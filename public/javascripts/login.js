import {
  checkIdValidation,
  checkPasswordValidation,
} from './auth_valid_check.js';

async function loginRequest(userId, password) {
  try {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        password,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error);
    }

    return { result, error: false };
  } catch (e) {
    return { result: e, error: true };
  }
}

function initInputError() {
  const errors = document.querySelectorAll('.error');

  errors.forEach((error) => (error.style.display = 'none'));
}

const loginForm = document.querySelector('.loginForm');

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

  const result = await loginRequest(userId, password);

  if (result.error) {
    loginError.style.display = 'block';
    loginError.innerText = result.result;

    return;
  }

  location.href = '/';
});

console.log(checkPasswordValidation('010'));
