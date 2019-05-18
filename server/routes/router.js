const KoaRouter = require('koa-router');
const UserController = require('./../controllers/user.js');
const router = KoaRouter();
module.exports = function (app) {
  router.post('/user/:id', UserController.getUserInfo); //用POST请求
  router.post('/api/user', UserController.getUserAuth);
  app.use(router.routes()).use(router.allowedMethods());
};