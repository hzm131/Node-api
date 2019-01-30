const request = require("supertest")

const app = require("../../index")


describe('router', function () {
    it('get /get', function () {
        request(app.listen())
            .get('/get?limit=10&offset=0')
            .expect(200) //使用end()方法  expect()断言将不会抛出 -它们将断言作为错误返回给.end()回调
    });
});



