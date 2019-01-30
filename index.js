const Koa = require("koa")
const bodyParser = require('koa-bodyparser')
const static = require('koa-static')
const router = require("./router")
const ensureLogin = require("./lib/LoginJwt")
const path = require("path")
const auth = require("./middleware/auth")
const app = new Koa()
const port = process.env.PORT || 8000

app
    .use(static(
        path.join( __dirname,  "/public/")
    ))
    .use(bodyParser())
    //.use(ensureLogin(auth.deserializeUserId))
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(port,function () {
    console.log("listening on port:",port)
})

module.exports = app
