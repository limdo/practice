const Koa = require("koa");
const Router = require('koa-router');



const app = new Koa();
const router = new Router();

router.get('/', (ctx) => {
    ctx.body = '메인 페이지입니다.'
})

router.get("/other/:group", ctx => {
    const { group } = ctx.params;
    ctx.body = `${group}의 페이지입니다.`
})

router.get("/member", ctx => {
    const { name } = ctx.query;
    ctx.body = `레드벨벳 멤버 ${name}의 페이지입니다.`
})

app.use(router.routes())
app.use(router.allowedMethods())
app.listen(3000)