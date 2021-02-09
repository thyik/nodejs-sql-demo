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
    }
}, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'account'
});

account.sync();

module.exports = account;