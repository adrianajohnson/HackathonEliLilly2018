var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

router.get('/', function(req, res, next) {
  res.render('index', { title: 'User' });
});

router.get('/welcome', function(req, res, next) {
  res.render('welcome', { title: 'Welcome User' });
});

router.get('/welcome/question1', function(req, res, next) {
  res.render('question1', { title: 'Question1' });
});
router.get('/welcome/question1/question2', function(req, res, next) {
  res.render('question2', { title: 'Question2' });
});
router.get('/welcome/question1/question2/question3', function(req, res, next) {
  res.render('question3', { title: 'Question3' });
});


module.exports = router;
