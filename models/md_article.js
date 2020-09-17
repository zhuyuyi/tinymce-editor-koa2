'use strict';
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const schema = new Schema({
    title: String, // 文章标题
    mdTexts: String, // 文章内容
    userId: {
        type: ObjectId,
        ref: 'User'
    },
    editUserId: {
        type: ObjectId,
        ref: 'User'
    },
    lockUserId: {
        // 加锁用户Id
        type: ObjectId
    },
    isLock: Number, // 是否被锁住 1 加锁 0 解锁
    markdownId: String, // 目录id
    catalogType: String, // 文章类型 markdown wysiwyg
    articleTag: String, // 文章标签
    versionId: String, // 版本id
    likes: Array, // 点赞的userId
    lookNumber: {
        // 文章查看数量
        type: Number,
        default: 0
    },
    isDraft: {
        // 是否是草稿
        type: Boolean,
        default: false
    },
    isDeleted: {
        // 是否被删除
        type: String,
        default: '0'
    },
    isPush: {
        // 是否推送
        type: Number,
        default: 0
    },
    createDate: {
        // 创建的时间
        type: Date,
        default: Date.now
    },
    updateDate: {
        // 更新的时间
        type: Date,
        default: Date.now
    },
    lockTime: Date, // 加锁时间
    pushTime: Date // 推送时间
});

module.exports = mongoose.model('articles', schema);
