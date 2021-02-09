const db = require('../database');
const Sequelize = require('sequelize');

const account = db.define('account', {
  id: {
    type: Sequelize.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    unique: true
  },
  userid: {
    type: Sequelize.STRING(64),
    allowNull: false,
    defaultValue: '',
    unique: true
  },
  balance: {
    type: Sequelize.BIGINT,
    allowNull: false,
    defaultValue: 0
  },
  modify_datetime: {
    type: Sequelize.BIGINT,
    allowNull: false,
    defaultValue: 0
  }
}, {
  timestamps: false,
  freezeTableName: true,
  tableName: 'account'
});

// create if not exist
account.sync();
// drop and recreate
//account.sync({ force: true });

module.exports = account;
