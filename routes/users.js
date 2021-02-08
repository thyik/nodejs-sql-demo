const userModel = require('../database/models/user');
const userManager = require('../database/userManager')
var express = require('express');
var router = express.Router();

const getUser = async (user_id, response) => {
  let ret = await userModel.findOne({
    where: {
      id: user_id
    }
  })

  response.send(ret);
}

/* GET users listing. */
router.get('/:id', function (req, res, next) {
  var user1 = req.params.id;

  userManager.getUser(user1)
    .then((result) => {
      res.send(result.dataValues);
    })
    .catch(err => res.send("not found"));

});

router.post('/', function (req, res, next) {
  userManager.createUser(req.body)
    .then((result) => {
      res.send('created : ' + result.dataValues);
    })
    .catch(err => res.send('created fail'));

});

router.delete('/:id', function (req, res, next) {
  var user1 = req.params.id;
  userManager.deleteUser(user1)
    .then(res.send('deleted'))
    .catch(err => res.send('delete fail'));
});

module.exports = router;
