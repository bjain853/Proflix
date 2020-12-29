const path = require("path");
const fs = require("fs");
const { response } = require("express");


module.exports = {
    filePathNew: (oldPath, mId,response) => {
        const directories = path.dirname(oldPath);
        const extension = path.extname(oldPath);
        const newPath = directories+`/${mId}`+extension;
        fs.rename(oldPath,newPath,(error)=>{
            if(error) {
                response.json({error})
                response.sendStatus(500);
                throw error;}
        });
        return newPath;
    }
}