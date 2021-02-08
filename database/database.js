const Sequelize = require('sequelize');

const db = new Sequelize("mytestdb", "root", "root",{ 
    host: 'localhost', 
    dialect:'mysql', 
    port:3306,
    pool: { max: 5, min: 0, idle: 10 * 1000 }
});

module.exports = db;