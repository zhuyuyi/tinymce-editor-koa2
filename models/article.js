const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const schema = new Schema({
    title: String, // 文章标题
    texts: String, // 文章内容
});

module.exports = mongoose.model('Article', schema);