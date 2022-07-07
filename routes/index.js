var express = require('express');
var router = express.Router();
const cookieParser = require('../lib/cookie_parser');
const sessionDBManager = require('../lib/session_db_manager');

/* GET home page. */
router.get('/', function (req, res, next) {
  let user;

  if (req.headers.cookie) {
    const cookies = cookieParser(req.headers.cookie);

    user = sessionDBManager.checkSessionId(cookies['sessionId']);
  }

  res.render('index', { title: 'My배민', user });
});

module.exports = router;
