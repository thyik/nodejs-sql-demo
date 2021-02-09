const accountModel = require('../database/models/account');
const accountManager = require('../database/accountManager')
var express = require('express');
var router = express.Router();

/* POST account. */
router.post('/', function (req, res, next) {

    accountManager.createAccount(req.body)
        .then((data) => {
            res.send(data.dataValues);
        })
        .catch(err => res.send("not found"));

});

/* GET account. */
router.get('/:id', function (req, res, next) {
    var user1 = req.params.id;

    accountManager.getAccount(user1)
        .then((data) => {
            res.send(data.dataValues);
        })
        .catch(err => res.send("not found"));

});

/* PUT account. */
router.put('/:id', function (req, res, next) {

    accountManager.updateBalance(req.body)
        .then((data) => {
            console.log('then');
            res.send(data===undefined ? 'update fail' : data);
        })
        .catch(err => res.send("not found"));

});


module.exports = router;
