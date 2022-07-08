var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function (req, res, next) {
  res.render('login');
});

router.get('/register/agree-terms', function (req, res, next) {
  res.render('agree_terms');
});

router.get('/register/check-phone-number', function (req, res, next) {
  res.render('check_phone_number');
});

module.exports = router;
