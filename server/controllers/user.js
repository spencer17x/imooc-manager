const user = require('../models/user.js');
// const jwt = require('koa-jwt');
const getUserInfo = async function (ctx, next) {
  const id = ctx.params.id;// 获取url里传过来的参数里的id
  const result = await user.getUserById(id);  // 通过await“同步”地返回查询结果
  ctx.response.body = result; // 将请求的结果放到response的body里返回
};

const getUserAuth = async function (ctx, next) {
  const data = ctx.request.body; // post过来的数据存在request.body里
  console.log(data);
  const userInfo = await user.getUserByName(data.name);
  console.log(userInfo);

  if (userInfo != null) {
    // 如果查无此用户会返回null
    if (userInfo.password != data.password) {
      ctx.response.body = {
        success: false, // success标志位是方便前端判断返回是正确与否
        info: '密码错误！'
      };
    } else {
      // 如果密码正确
      // const userToken = {
      //   name: userInfo.username,
      //   id: userInfo.id
      // };
      // const secret = 'vue-koa-demo'; // 指定密钥，这是之后用来判断token合法性的标志
      // const token = jwt.sign({
      //   ...userToken,
      //   secret
      // }); // 签发token
      ctx.response.body = {
        success: true,
        // token: token // 返回token
      };
    }
  } else {
    ctx.response.body = {
      success: false,
      info: '用户不存在！' // 如果用户不存在返回用户不存在
    };
  }
};

module.exports = {
  getUserInfo, // 把获取用户信息的方法暴露出去
  getUserAuth
}; // 把获取用户信息的方法暴露出去