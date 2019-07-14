var express = require('express');
var router = express.Router();
var connect = require('../config/database')

/* GET home page. */
router.get("/", function(req, res, next) {
  var query = `SELECT activities.id,  detail,
                categories.name, status FROM activities
                 INNER JOIN categories ON
                  activities.category_id = categories.id`;
 
  connect.query(query, function(error, result) {
    if (error) res.send(error.message);
    res.render("index", { activities: result });
  });
 });
 

router.post("/store", function(req, res, next) {
  var category_id = req.body.category_id;
  var detail = req.body.detail;
  var query = "INSERT INTO activities (category_id, detail, status) VALUES (?, ? , ?)";
  connect.query(query, [category_id, detail, 0], function(error, result) {
    if (error) res.send(error.message);
    res.redirect("/");
  });
  });
 

router.get('/create', function(req, res, next) {
  var query = "SELECT * FROM categories";
connect.query(query,function(error,result) {
//console.log(result);  
res.render('create', { categories: result });
});

});

router.get('/delete/:id', function(req, res, next) {
  var id = req.params.id
  var query = "DELETE FROM activities WHERE id = ?";
  connect.query(query , id , function(error, result){
    if(error) res.send(error.message)
    res.redirect('/');
  })
  //res.render('delete');
});
router.get('/login', function(req, res, next) {
  res.render('login');
});

module.exports = router;
