
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries 删除所有现有条目
  return knex('users').del()
    .then(function () {
      // Inserts seed entries  插入种子条目
      return knex('users').insert([
        {id: 1, name: '何',email:"891453178@qq.com"},
        {id: 2, name: '王',email:"791453178@qq.com"},
        {id: 3, name: '张',email:"691453178@qq.com"},
      ]);
    });
};
