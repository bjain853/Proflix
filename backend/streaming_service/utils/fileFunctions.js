const path = require("path");
const fs = require("fs");


module.exports = {
    filePathNew: (oldPath, mId) => {
        const directories = path.dirname(oldPath);
        const extension = path.extname(oldPath);
        const newPath = directories + `/${mId}` + extension;
        fs.rename(oldPath, newPath, (error) => {
            if (error) {
                throw error;
            }
        });
        return newPath;
    }
}