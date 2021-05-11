const jwt = require('jsonwebtoken');
const {accessToken,refreshToken} = require('../config/config');

module.exports={
    generateAccessToken:(username)=>{
        return jwt.sign({user:username}, accessToken, { expiresIn: "1d" });
      },
    verifyToken:(token)=>{
        return jwt.verify(token,accessToken);
    }
}