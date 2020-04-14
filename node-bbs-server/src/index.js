const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
    console.log('Test')
    ctx.set("Limdo", 'LDH');
    await next();
    console.log('Finished.')
});

app.use(async (ctx, next) => {
    console.log('1. asdf')
    await next();
});

app.use(async (ctx, next) => {
    console.log('2. asdf')
    ctx.body = 'TEST'
});

app.listen(3000);