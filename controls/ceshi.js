function ceshi(router) {
  router.get('/', async (ctx, next) => {
    await ctx.render('index', {
      title: 'Hello Koa 2!'
    })
  })
  
  router.get('/string', async (ctx, next) => {
    ctx.body = 'koa2 '
  })
  
  router.get('/json', async (ctx, next) => {
    ctx.body = {
      title: 'koa2 json'
    }
  })

  return router;
}

module.exports = ceshi;