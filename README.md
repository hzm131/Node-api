服务器框架：koa

操作数据库：knex.js库
    创建迁移文件到指定的目录中:
        knex migrate:make migration_name 
    编写完迁移后，可以NODE_ENV通过运行来更新与您匹配的数据库：
        knex migrate:latest
    要回滚最后一批迁移:
        knex migrate:rollback
    要创建种子文件:
        knex seed:make seed_name    
        
orm库：bookshelf.js库

测试: supertest.js库

数据字段验证：joi.js库
    Joi.validate()方法传入ctx接受到的数据，再传入设置的schema(校验数据字段的怎么个校验法，比如必须是数据或者必填等)
    成功就往下走
    
身份验证：jsonwebtoken.js

文档: swagger-ui
        文档文件在public目录中，目前打开的方式是通过koa提供的静态资源服务打开，在线编辑完swagger-editor后导出json格式文件，
    再在index.html中的url属性更改为： /刚导出的json文件.json
    在之后会更新为本地router上添加注释在更新文档

这是一个练习使用的项目，正在初始阶段
