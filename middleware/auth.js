
/*
    //解析token
*/
function  deserializeUserId(token){
    let decoded
    try{
        decoded = jwt.verify(token) //解析token
    }catch (e) { //看有没有错
        if (e.name === 'TokenExpiredError') {
            return Promise.reject({ code: 401002 }) // token 超时
        }

        if (e.name === 'JsonWebTokenError') {
            return Promise.reject({ code: 401005 }) // token 的签名验证不通过
        }

        throw e
    }
    //如果没错的话返回uid
    return decoded.uid
}

module.exports = {
    deserializeUserId
}