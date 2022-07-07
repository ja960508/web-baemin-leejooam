const express = require('express');
const router = express.Router();
const sessionDBManager = require('../lib/session_db_manager');
const userDBManager = require('../lib/user_db_manager');

router.post('/login', (req, res) => {
  const { userId, password } = req.body;
  const cookies = req.headers.cookie;

  if (!(userId && password)) {
    res.status(400).json({ error: `Id or Password is Empty` });

    return;
  }

  if (!userDBManager.checkIsIdExist(userId)) {
    res.status(403).json({ error: `Couldn't Find User Id` });

    return;
  }

  if (!userDBManager.checkPasswordValidation(userId, password)) {
    res.status(403).json({ error: `Wrong Password` });

    return;
  }

  if (!(cookies && sessionDBManager.checkSessionId(cookies))) {
    const sessionId = sessionDBManager.generateSessionId(userId, password);

    res
      .status(200)
      .cookie('sessionId', sessionId, { maxAge: 60 * 60 * 24 * 30 * 1000 })
      .json({ userId });

    return;
  }

  res.status(200).json({ userId });
});

router.post('/register', (req, res) => {
  const { userId, password } = req.body;
});

module.exports = router;
