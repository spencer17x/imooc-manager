/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('management', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    sex: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    interest: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'management'
  });
};
