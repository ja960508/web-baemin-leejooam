const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const cookieParser = require('./cookie_parser');
const sessionAdapter = new FileSync('./db/session.json');
const sessionDB = low(sessionAdapter);
const sessionData = sessionDB.get('sessionData').value();

function generateSessionId(userId, password) {
  const sessionData = sessionDB.get('sessionData').value();
  const sessionIdPool =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const { length } = sessionIdPool;
  let result = '';

  for (let i = 0; i < 10; i++) {
    result += sessionIdPool[Math.floor(Math.random() * length)];
  }

  if (sessionData[result]) {
    result = generateSessionId(userId, password);
  } else {
    sessionDB
      .get('sessionData')
      .assign({
        [result]: {
          userId,
          password,
        },
      })
      .write();
  }

  return result;
}

function checkSessionId(cookie) {
  const id = cookieParser(cookie)['sessionId'];
  if (sessionData[id]) {
    return sessionData[id].userId;
  }

  return null;
}

exports.checkSessionId = checkSessionId;
exports.generateSessionId = generateSessionId;
