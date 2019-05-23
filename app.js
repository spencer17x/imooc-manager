// koa 文件入口
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('./server/routes/router');
const server = require('koa-static');
const path = require('path');

const app = new Koa();
app.use(bodyParser());
router(app);
app.use(server(path.resolve('build')));

app.on('error', function (err, ctx) {
  // 监听错误信息
  console.log('server error', err);
});

app.listen(4444, () => {
  console.log('server is running at http://localhost:4444'); //监控4444端口
});

module.exports = app;