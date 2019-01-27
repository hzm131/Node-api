var environment = process.env.NODE_ENV || 'development';
var config = require('../knexfile')[environment]  //现在使用的环境是由environment决定
console.log(config)

// 配置好了后暴露出去
module.exports = require('knex')(config)
