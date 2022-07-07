const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const userAdapter = new FileSync('./db/users.json');
const userDB = low(userAdapter);
const userData = userDB.get('users').value();

function checkIsIdExist(userId) {
  if (!userData[userId]) {
    return false;
  }

  return true;
}

function checkPasswordValidation(userId, password) {
  if (userData[userId].password !== password) {
    return false;
  }

  return true;
}

exports.checkIsIdExist = checkIsIdExist;
exports.checkPasswordValidation = checkPasswordValidation;
