const router = require("koa-router")()
const validate = require("../lib/validate")
const Joi = require("joi")
const Knex = require("../db/knex")
const model = require("../model")


/**
 * @swagger
 * /get:
 *  get:
 *    summary: 获取用户信息
 *    description: 获取用户的信息
 *    tags:
 *       - Logger
 *    parameters:
 *      - name: appName
 *        in: query
 *        required: true
 *        description: 应用名称
 *        type: string
 *      - name: userId
 *        in: query
 *        required: true
 *        description: 用户id
 *        type: string
 *    responses:
 *      200:
 *        description: 成功获取
 */
router.get("/get",async (ctx)=>{
    //await ctx.ensureLogin() //身份验证 token
    const {offset, limit} = await validate(ctx.query,{
        offset: Joi.number()
            .integer()
            .min(0)
            .required(),
        limit: Joi.number()
            .integer()
            .min(1)
            .required(),
    })


    const result = await model.User.forge().orderBy('-created_at').fetchPage({  //拿到数据库中的数据根据创建时间降序排列，再分页
        limit,  //当前位置
        offset,  //偏移量
    })

    ctx.body = {  //返回给前台一个对象 count是全部数据条数   rows是当前位置的数据
        //count: result.pagination.rowCount,
        rows: result
    }
})
module.exports = router
