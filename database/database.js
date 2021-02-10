const Sequelize = require('sequelize');
const config = require('config');
const { database, host, port, username, password } = config.sql;

const db = new Sequelize(database, username, password, {
  host: host,
  dialect: 'mysql',
  port: port,
  pool: { max: 5, min: 0, idle: 10 * 1000 }
});

module.exports = db;
