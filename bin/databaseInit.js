const mongoose = require("mongoose");

function databaseInit() {
    mongoose.connect("mongodb://127.0.0.1:27017/tinymce", (err) => {
        if (err) {
            console.log('连接失败');
        } else {
            console.log("连接成功")
        }
    });
}

module.exports = databaseInit;