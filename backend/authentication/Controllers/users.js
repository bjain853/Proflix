/**Database functions for table users with Schema
+----------+--------------+------+-----+---------+-------+
| Field    | Type         | Null | Key | Default | Extra |
+----------+--------------+------+-----+---------+-------+
| username | varchar(150) | NO   | YES | NULL    |       |
| name     | varchar(255) | YES  |     | NULL    |       |
| email    | varchar(255) | YES  |     | NULL    |       |
| password | varchar(400) | YES  |     | NULL    |       |
+----------+--------------+------+-----+---------+-------+
*/

const connection = require("./connection");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require('uuid');

module.exports = {
    findUserByUsername: (username, callback) => {
        //returns either error or user object
        connection.query("SELECT * FROM users WHERE username = ?", [username], (err, result) => {
            if (err) {
                callback(err, null)
            } else {
                callback(null, {
                    name: result[0].name, username: result[0].username, email: result[0].email, password:
                        result[0].password, uId: result[0].uId
                });
            }
        });
    },
    findUserById: (id, callback) => {
        connection.query("SELECT * FROM users WHERE uId = ?", [id], (err, result) => {
            if (err) {
                callback(err, null)
            } else {
                callback(null, {
                    name: result[0].name, username: result[0].username, email: result[0].email, password:
                        result[0].password, uId: result[0].uId
                });
            }
        });
    },
    deleteUser: (uId, callback) => {
        //returns either the erorr or confirmation of being deleted
        connection.quuery("DELETE FROM users WHERE uId = ?", [uId], (err) => {
            if (err) {
                callback(err, false);
            } else {
                console.log("Deleted the user");
                callback(null, true);
            }

        });

    },
    updateInfo: (uId, field, update, callback) => {
        // returns either the error or the updated user Object
        connection.quuery("UPDATE users SET ? = ? WHERE uId = ?", [field, update, uId], (err) => {
            if (err) {
                callback(err, false);
            } else {
                console.log("Updated the user");
                callback(null, true);
            }
        })
    },
    addUser: (name, username, email, password, callback) => {
        //returns either the error or confirmation that 
        try {
            connection.beginTransaction((error) => {
                if (error) return connection.rollback(() => {
                    throw error;
                })
                connection.query("SELECT * FROM users WHERE username = ?", [username], (error, results) => {
                    if (error) return connection.rollback(() => {
                        throw error;
                    })
                    if (results.length == 0) {
                        const uId = uuidv4();
                        /**
                         * Generate hashed password
                         */
                        bcrypt.hash(password, 10, (err, hash) => {
                            if (err) throw err;
                            connection.query("INSERT INTO users VALUES (?,?,?,?,?)", [uId, username, name, email, hash],
                                (error) => {
                                    if (error) {
                                        return connection.rollback(() => {
                                            throw error;
                                        })
                                    }
                                    else {
                                        console.log("User added");
                                        callback(null, true);
                                    }

                                })
                        }
                        )
                        connection.commit((error) => {
                            if (error) return connection.rollback(() => {
                                throw error;
                            })
                        })
                    } else {
                        callback(new Error("Username already registered"), false);
                    }
                });
            })
        } catch (error) {
            console.error(error);
            callback(error, false);
        }
    }
}

