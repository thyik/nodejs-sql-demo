
require('dotenv').config()
const config = require('config'); 

console.log(config.sql);
console.log(process.env.NODE_ENV);
