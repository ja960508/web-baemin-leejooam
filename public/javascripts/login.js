import {
  checkIdValidation,
  checkPasswordValidation,
} from './auth_valid_check.js';
import { requestUserLogin } from './requests/auth_requests.js';

function initInputError() {
  const errors = document.querySelectorAll('.error');

  errors.forEach((error) => (error.style.display = 'none'));
}

function setLoginEventHandler() {
  const loginForm = document.querySelector('.login__form');

  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const [userId, password] = [e.target.userId.value, e.target.password.value];
    const idError = document.querySelector('.idError');
    const passwordError = document.querySelector('.passwordError');
    const loginError = document.querySelector('.loginError');

    initInputError();

    if (!(userId && checkIdValidation(userId))) {
      idError.style.display = 'block';

      return;
    }

    if (!(password && checkPasswordValidation(password))) {
      passwordError.style.display = 'block';

      return;
    }

    const result = await requestUserLogin(userId, password);

    if (result.error) {
      loginError.style.display = 'block';
      loginError.innerText = result.result;

      return;
    }

    location.href = '/';
  });
}

setLoginEventHandler();
