import { getRandomNumber } from './utils/random_number.js';
import { timer } from './utils/timer.js';

const phoneNumber = document.querySelector('#phone-number');
const cancleBtn = document.querySelector('.cancle-btn');
const check = document.querySelector('.check');
const phoneNumberForm = document.querySelector('.phone-number-form');
const authRequestBtn = document.querySelector('.auth-number__request');
const authReRequestBtn = document.querySelector('.auth-number__request-re');

const getAuthNumber = timer(() => {
  const authNumber = document.querySelector('#auth-number');
  const nextBtn = document.querySelector('.next-btn');

  authNumber.value = getRandomNumber(4);
  nextBtn.style.display = 'block';
});

phoneNumber.addEventListener('input', () => {
  phoneNumber.value = phoneNumber.value.replace(/[^0-9]/g, '');
  phoneNumber.value = phoneNumber.value.slice(0, 11);
  phoneNumber.value = phoneNumber.value
    .replace(/[^0-9]/g, '')
    .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
    .replace(/(\-{1,2})$/g, '');

  if (phoneNumber.value.length === 13) {
    cancleBtn.style.display = 'none';
    check.style.display = 'block';

    return;
  } else {
    check.style.display = 'none';
  }

  if (phoneNumber.value) {
    cancleBtn.style.display = 'block';
  }
});

cancleBtn.addEventListener('click', () => {
  phoneNumber.value = '';
  cancleBtn.style.display = 'none';
});

authRequestBtn.addEventListener('click', async () => {
  const authNumber = document.querySelector('.auth-number');

  if (phoneNumber.value.length !== 13) {
    return;
  }

  phoneNumber.readOnly = true;
  authRequestBtn.style.display = 'none';
  authNumber.style.display = 'flex';
  getAuthNumber();
});

phoneNumberForm.addEventListener('submit', (e) => {
  e.preventDefault();
});

authReRequestBtn.addEventListener('click', () => {
  getAuthNumber();
});
