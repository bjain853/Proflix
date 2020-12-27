/**Database functions for table users with Schema
+----------+--------------+------+-----+---------+-------+
| Field    | Type         | Null | Key | Default | Extra |
+----------+--------------+------+-----+---------+-------+
| uId      | varchar(255) | NO   | PRI | NULL    |       |
| username | varchar(150) | YES  |     | NULL    |       |
| name     | varchar(255) | YES  |     | NULL    |       |
| email    | varchar(255) | YES  |     | NULL    |       |
| password | varchar(400) | YES  |     | NULL    |       |
+----------+--------------+------+-----+---------+-------+
*/
const connection = require("./connection");
const { v4: uuidv4 } = require('uuid');
const bcrypt = require("bcrypt");

module.exports = {
    findUserByUsername: (username,callback) => {
        connection.query("SELECT * FROM users WHERE username = ?", [username], (err, result) => {
            callback(err,{ name: result[0].name, username: result[0].username, email: result[0].email, password: result[0].password,uId:result[0].uId });
        });
    },
    deleteUser: (request, response) => {
        if (request.body == null || request.body.id == null) {
            response.sendStatus(400);
        } else {
            connection.quuery("DELETE FROM users WHERE uId = ?", [request.body.id], (err) => {
                if (err) throw err;
                console.log("Deleted the user");
            });
        }
    },
    updateInfo: (request, response) => {
        if (request.body == null || request.body.field == null || request.body.update == null || request.body.id == null) {
            response.sendStatus(400);
        } else {
            connection.quuery("UPDATE users SET ? = ? WHERE uId = ?", [request.body.field, request.body.update, request.body.id], (err) => {
                if (err) throw err;
                console.log("Updated the user");
            })
        }
    },
    addUser: (request, response) => {
        const { password, email, username, name } = request.body;
        if (!password || !email || !username || !name) {
            response.sendStatus(400);
        } else {
            try {
                connection.beginTransaction((error) => {
                    if (error) return connection.rollback(() => {
                        throw error;
                    })
                    connection.query("SELECT * FROM users WHERE username = ? OR email = ?", [username, email], (error, results) => {
                        if (error) return connection.rollback(() => {
                            throw error;
                        })
                        if (results.length == 0) {
                            const uId = uuidv4(); //generate userId
                            /**
                             * Generate hashed password
                             */
                            bcrypt.genSalt(10, (err, salt) => {
                                if (err) throw err;
                                bcrypt.hash(password, salt, (err, hash) => {
                                    if (err) throw err;
                                    connection.query("INSERT INTO users VALUES (?,?,?,?,?)", [uId, username, name, email, hash], (error, results) => {
                                        if (error) {
                                            return connection.rollback(() => {
                                                throw error;
                                            })
                                        }
                                        else {
                                            response.sendStatus(200);
                                            console.log("User added");
                                        }

                                    });

                                })
                            })
                            connection.commit((error) => {
                                if (error) return connection.rollback(() => {
                                    throw error;
                                })
                            })
                        } else {
                            console.error("Email/username already registered")
                            response.sendStatus(409);
                        }
                    });
                })
            } catch (error) {
                console.error(error);
                response.sendStatus(500);
            } finally {

            }
        }
    }

}