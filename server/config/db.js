const Sequelize = require('sequelize'); // 引入sequelize
// 使用url连接的形式进行连接
const Demo = new Sequelize('mysql://root:123456@localhost/Demo', {
  define: {
    timestamps: false // 取消Sequelzie自动给数据表加入时间戳（createdAt以及updatedAt）
  }
});

module.exports = {
  Demo
}