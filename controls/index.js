const Router = require('koa-router');

const apiRouter = new Router({prefix: '/api'});

const ceshi = require('./ceshi')(apiRouter);

module.exports = function setUpController(app) {
    app.use(ceshi.routes(), ceshi.allowedMethods());
}