# Learn NodeJS

Create Project

```sh
$ mkdir sql-demo
$ cd sql-demo
$ npm init
$ npm install express --save
$ express
$ npm install

$ npm install sequelize --save
$ npm install mysql2 --save

```



**database.js**

```js
const Sequelize = require('sequelize');

const db = new Sequelize("mytestdb", "root", "root",{ 
    host: 'localhost', 
    dialect:'mysql', 
    port:3306,
    pool: { max: 5, min: 0, idle: 10 * 1000 }
});

module.exports = db;
```



**user.js**

```js
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
```



**users.js**

```js
router.get('/:id', function (req, res, next) {
  var user1 = req.params.id;
  // create an async function
  let fn = async (user_id) => {
    let ret = await userModel.findOne({
      where: {
        id: user_id
      }
    })

    res.send(ret);
  }
  
  // call the async function
  fn(user1);
});
```



Create a table in mysql

user

