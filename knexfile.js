//Update with you config settings 使用配置设置更新
module.exports = {
    development:{  // 开发环境
        client: "pg",
        connection: {
            host : '127.0.0.1',
            user : 'gwp',
            password : '123456',
            database : 'hezhimin'
        }, // 本地服务器 用于测试
        migrations: {
            directory: __dirname + "/db/migrations" //提供迁移路径
        },
        seeds:{
            directory: __dirname + "/db/seeds"  //种子的路径
        }
    },
    production:{  // 生产环境
        client: "pg",
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: __dirname + "/db/migrations"
        },
        seeds:{
            directory: __dirname + "/db/seeds/production"
        }
    }
}
