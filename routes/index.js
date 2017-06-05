var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '행인 - 행동하는 지식인','name':'행인' });
});

module.exports = router;
