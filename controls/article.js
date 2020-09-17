const axios = require('axios');

const Article = require('./../proxy/article');
const ArticlesModels = require('./../models/md_article');


function setArticle(router) {

    router.get('/article', async (ctx, next) => {
        let articles = await ArticlesModels.find({});
        console.log(articles[1],'articles[0]._doc')
        ctx.body = {
            returns: articles[1]
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