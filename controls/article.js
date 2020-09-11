const axios = require('axios');

const Article = require('./../proxy/article');
const ArticlesModels = require('./../models/md_article');


function setArticle(router) {

    router.get('/article', async (ctx, next) => {
        let articles = await ArticlesModels.find({});
        for (let i = 0; i < articles.length; i++) {
            let article = articles[i]._doc;
            axios.post(`http://www.zhuyuyi.cn:9200/article-index/_create/${article.markdownId}`, {
                title: article.title,
                mdTexts: article.mdTexts,
                markdownId: article.markdownId,
            })
        }
        ctx.body = {
            returns: JSON.stringify(articles)
        }
    })

    router.post('/setArticle', async (ctx, next) => {
        let { texts, title } = ctx.request.body;
        let retrunObj = null;
        try {
            retrunObj = await Article.add({
                title,
                texts
            })
        } catch (e) {
            retrunObj = e;
        }
        ctx.body = {
            returns: retrunObj
        }
    })

    return router;
}

module.exports = setArticle;