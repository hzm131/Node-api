/*
    验证请求是否合法  这里是用过验证请求头中的jwt
*/
module.exports = (deserialize)=> async function(ctx,next){
        ctx.ensureLogin = async ()=>{
            if (!ctx.header.authorization){ //如果请求头authorization中不存在jwt
                return Promise.reject({code:401001})
            }
            const [type, credentials] = ctx.header.authorization.split(' ')  //存在就结构到type，credentials

            if (type !== 'Bearer') { //再判断jwt前面的类型
                return Promise.reject({ code: 401003 }) // access_token 不合法
            }
            //access_token合法 那么返回解析后的token
            return deserialize(credentials)
        }
        return next()
}