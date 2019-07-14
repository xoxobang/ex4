var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'BY KING BIG' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'BY KING BIG' });
});

router.get('/about/Tell', function(req, res, next) {
  res.render('Tell', { title: 'BY KING BIG' });
});

module.exports = router;
