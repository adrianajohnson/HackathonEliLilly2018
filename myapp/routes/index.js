var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

router.get('/', function(req, res, next) {
  res.render('index', { title: 'User' });
});

router.get('/home/question1', function(req, res, next) {
  res.render('question1', { title: 'Question1' });
});
module.exports = router;
