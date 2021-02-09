const dtl = require('../utils/datetime_tool')
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  res.send(dtl.getTimestamp(req.body.time).toString());
});

module.exports = router;
