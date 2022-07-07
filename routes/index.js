var express = require('express');
var router = express.Router();
const sessionDBManager = require('../lib/session_db_manager');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'My배민',
    user: sessionDBManager.checkSessionId(req.headers.cookie),
  });
});

module.exports = router;
