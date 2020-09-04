const ArticleModel = require('../models/article');

class Article {
    static add(contion) {
        return ArticleModel.create(contion);
    }
    static update() {
        return ArticleModel
    }
    static get() {
        return ArticleModel.findOne({})
    }
}

module.exports = Article;