const db = require('./database');
const Sequelize = require('sequelize');

const user = db.define('user', {
  id: {
    type: Sequelize.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  uuid: {
    type: Sequelize.CHAR(36),
    allowNull: true,
    unique: true
  },
  username: {
    type: Sequelize.STRING(64),
    allowNull: false,
    defaultValue: '',
    unique: true
  },
  password: {
    type: Sequelize.STRING(255),
    allowNull: false,
    defaultValue: ''
  }
}, {
  timestamps: false,
  freezeTableName: true,
  tableName: 'user'
});

module.exports = user;