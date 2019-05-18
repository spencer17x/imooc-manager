const db = require('../config/db.js');
const DemoDb = db.Demo; // 引入数据-

const User = DemoDb.import('../schema/user.js'); // 用sequelize的import方法引入表结构，实例化了basicTable。

const getUserById = async function (id) {
  const userInfo = await User.findOne({
    // 用await控制异步操作，将返回的Promise对象里的数据返回出来。也就实现了“同步”的写法获取异步IO操作的数据
    where: {
      id: id
    }
  });

  return userInfo; // 返回数据
};

const getUserByName = async function(name) {
  const userInfo = await User.findOne({
    where: {
      username: name
    }
  })

  return userInfo
}

module.exports = {
  getUserById, // 导出getUserById的方法，将会在controller里调用
  getUserByName
};