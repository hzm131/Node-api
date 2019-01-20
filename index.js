const Koa = require("koa")
const bodyParser = require('koa-bodyparser')
const router = require("./router")
const ensureLogin = require("./lib/LoginJwt")
const auth = require("./services/auth")
const app = new Koa()



app
    .use(bodyParser())
    //.use(ensureLogin(auth.deserializeUserId))
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(3000)