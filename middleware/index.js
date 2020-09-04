const cors = require('koa2-cors');
const bodyParser = require('koa-bodyparser');

module.exports = function setUpMiddleware(app) {
    app.use(bodyParser());
    
    app.use(cors());
    app.use(async (ctx, next) => {
        const start = new Date()
        await next()
        const ms = new Date() - start
        console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
    })
}