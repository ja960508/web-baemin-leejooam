var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function (req, res, next) {
  res.render('login');
});

router.get('/terms-and-conditions', function (req, res, next) {
  res.render('terms_and_conditions');
});

router.get('/phone-number-check', function (req, res, next) {
  res.render('phone_number_check');
});

module.exports = router;
