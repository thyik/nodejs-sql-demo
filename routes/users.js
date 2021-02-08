const userModel = require('../database/model/user');
var express = require('express');
var router = express.Router();

/* GET users listing. */
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
  //

  // call the async function
  fn(user1);

  //res.send('respond with a resource');


});

module.exports = router;
