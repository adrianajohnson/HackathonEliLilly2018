var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

router.get('/', function(req, res, next) {
<<<<<<< HEAD
  res.render('index', { title: 'Welcome'});
=======
  res.render('index', { title: 'User' });
>>>>>>> 7dd737e0f67907b6278c31f7760c65a3c6571f3b
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
router.get('/welcome/question1/question2/question3/question4', function(req, res, next) {
  res.render('question4', { title: 'Question4' });
});
router.get('/welcome/question1/question2/question3/question4/question5', function(req, res, next) {
  res.render('question5', { title: 'Question5' });
});
router.get('/welcome/question1/question2/question3/question4/question5/question6', function(req, res, next) {
  res.render('question6', { title: 'Question6' });
});
router.get('/welcome/question1/question2/question3/question4/question5/question6/question7', function(req, res, next) {
  res.render('question7', { title: 'Question7' });
});

module.exports = router;
