const Koa = require("koa")
const bodyParser = require('koa-bodyparser')
const router = require("./router")
const ensureLogin = require("./lib/LoginJwt")
const auth = require("./middleware/auth")
const app = new Koa()
const port = process.env.PORT || 8000



app
    .use(bodyParser())
    //.use(ensureLogin(auth.deserializeUserId))
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(port,function () {
    console.log("listening on port:",port)
})
