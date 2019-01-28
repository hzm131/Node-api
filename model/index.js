const Knex = require("../db/knex")
const bookshelf = require("bookshelf")(Knex)

bookshelf.plugin('pagination')
bookshelf.plugin('registry')


//定义模型后返回的就是json格式的数据
const User = bookshelf.Model.extend({
    hasTimestamps: true,
    tableName: 'users'
})

module.exports = {
    User
}
