const cors = require('koa2-cors');

module.exports = function setUpMiddleware(app) {
    app.use(cors());

    app.use(async (ctx, next) => {
        const start = new Date()
        await next()
        const ms = new Date() - start
        console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
    })
}