export function checkIdValidation(userId) {
  const emailRegExp =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  const idRegExp = /^[0-9a-zA-Z]+$/;

  if (emailRegExp.test(userId)) {
    return true;
  }

  if (idRegExp.test(userId)) {
    return true;
  }

  return false;
}

export function checkPasswordValidation(password) {
  const repeatedNumber3Times = /([0-9])\1{2,}/;

  if (password.length < 10) {
    return false;
  }

  if (repeatedNumber3Times.test(password)) {
    return false;
  }

  return true;
}
