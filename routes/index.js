var express = require('express');
var router = express.Router();

router.get('/play/:num1/:num2', function(req, res, next) {
  //console.log(req.params)
  var num1 = req.params.num1;
 var num2 = req.params.num2;
 var sum = parseInt(num1) + parseInt(num2);
 res.send("ผลรวมของตัวเลข 2 จำนวนคือ " + sum);
  res.render('play');
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/create', function(req, res, next) {
  res.render('create');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

module.exports = router;
