const mongoose = require("mongoose");

function databaseInit() {
    mongoose.connect("mongodb://172.17.0.3:27017/tinymce", (err) => {
        if (err) {
            console.log('连接失败');
        } else {
            console.log("连接成功")
        }
    });
}

module.exports = databaseInit;