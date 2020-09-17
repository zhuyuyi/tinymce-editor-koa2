const Router = require('koa-router');

const apiRouter = new Router({prefix: '/api'});

const ceshi = require('./ceshi')(apiRouter);
const article = require('./article')(apiRouter);

module.exports = function setUpController(app) {
    app.use(ceshi.routes(), ceshi.allowedMethods());
    app.use(article.routes(), article.allowedMethods());
}