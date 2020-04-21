const Koa = require("koa");
const Router = require('koa-router');
const db = require("./model");

const app = new Koa();
const router = new Router();

router.get('/', async ctx => {
    const ret = await db.findUser();
    ctx.body = ret;
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