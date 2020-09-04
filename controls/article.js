const Article = require('./../proxy/article');

function setArticle(router) {

    router.get('/article', async (ctx, next) => {
        const article = await Article.get();
        ctx.body = {
            ...article._doc
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
        } catch(e){
            retrunObj = e;
        }
        ctx.body = {
            returns:retrunObj
        }
    })

    return router;
}

module.exports = setArticle;