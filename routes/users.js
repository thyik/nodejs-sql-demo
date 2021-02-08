const userModel = require('../database/model/user');
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
  // create an async function
  // call the async function
  getUser(user1, res); 

  // direct calling arrow functions
/*   ((param1, param2) => {
    console.log("arrow function direct calling....")
    console.log("param1 : ", param1);
    console.log("param2 : ", param2);
  })(user1, "I'm P2"); */
  //res.send('respond with a resource');

/*   (async (user_id) => {
    let ret = await userModel.findOne({
      where: {
        id: user_id
      }
    })

    console.log("alternative call...");
    res.send(ret);
  }) (user1); */

});

module.exports = router;
