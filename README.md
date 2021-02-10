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

## NodeJS configuration file

1. Create sub folder `config`

2. Install nodejs `config` dependency [package](https://www.npmjs.com/package/config)

   ```sh
   $ npm install config --save
   ```

   

3. code to load from `default.json`

   ```js
   const config = require('config');
   const { database, host, port, username, password } = config.sql;
   ```

   

4. create `default.json` inside the `config` folder for default configuration

   ```json
   {
     "sql": {
       "database": "mytestdb",
       "port": 3306,
       "host": "localhost",
       "username": "root",
       "password": "root"
     }
   }
   ```

   

5. create `production.json` in the `config` folder for custom production configuration setting

   ```json
   {
     "sql": {
       "password": "root"
     }
   }
   ```

6. set environment variable `NODE_ENV` to load the `production.json` setting

   ```sh
   // powershell
   PS> $Env:NODE_ENV='production'
   
   // cmd
   D:/> set NODE_ENV=production
   
   // linux
   $ export NODE_ENV=production
   
   ```

## VSCode debug

[Reference](https://vscode.readthedocs.io/en/latest/nodejs/nodejs-debugging/)

create `launch.json` in `.vscode` folder

Attach to process

```json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    
    {
      "name": "Attach by Process ID",
      "processId": "${command:PickProcess}",
      "request": "attach",
      "type": "node"
    }]
 }
```



Debug single file

```json
    {
      "name": "Debug current file",
      "program": "${file}",
      "request": "launch",
      "skipFiles": [
        "<node_internals>/**"
      ],
      "type": "node"
    }
```



Debug progam

```json
   {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "skipFiles": [
        "<node_internals>/**"
      ],
      "program": "${workspaceFolder}\\bin\\www"
    }
```



Remote debugging

[Reference](https://maikthulhu.github.io/2019-05-17-remote-debugging-node-vscode/)

```json
    {
      "address": "localhost",
      "localRoot": "${workspaceFolder}",
      "name": "Attach to Remote",
      "port": 9229,
      "remoteRoot": null,
      "request": "attach",
      "skipFiles": [
        "<node_internals>/**"
      ],
      "type": "node"
    },
```



run nodejs program. **Don't run from vscode terminal. this will not work**

```sh
$ node --inspect-brk ./bin/www

> node --inspect-brk ./bin/www

Debugger listening on ws://127.0.0.1:9229/dce127a4-322b-4a69-8f7c-2d60c94395de
For help, see: https://nodejs.org/en/docs/inspector
```

run vscode debugger **Attach to Remote** configuration

use ssh tunneling to map the remote address 9229 to localhost:9229