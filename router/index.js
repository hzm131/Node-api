const router = require("koa-router")()
router.get("/get",async (ctx)=>{
    //await ctx.ensureLogin()
    ctx.body = {
        message : "成功"
    }
})
module.exports = router