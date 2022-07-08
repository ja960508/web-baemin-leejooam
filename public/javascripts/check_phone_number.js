import { getRandomNumber } from './utils/get_random_number.js';
import { setTimer } from './utils/set_timer.js';

const getAuthNumber = setTimer(() => {
  const authNumber = document.querySelector('#auth-number');
  const nextBtn = document.querySelector('.next-btn');

  authNumber.value = getRandomNumber(4);
  nextBtn.style.display = 'block';
});

function processPhoneNumberInput(phoneNumber) {
  let processedPhoneNumber = phoneNumber;

  processedPhoneNumber = processedPhoneNumber.replace(/[^0-9]/g, '');
  processedPhoneNumber = processedPhoneNumber.slice(0, 11);
  processedPhoneNumber = processedPhoneNumber
    .replace(/[^0-9]/g, '')
    .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
    .replace(/(\-{1,2})$/g, '');

  return processedPhoneNumber;
}

function checkPhoneNumberInput(phoneNumber) {
  const phoneNumberRegExp = /^01[016789]-[0-9]{4}-[0-9]{4}$/;

  if (phoneNumber.length !== 13) {
    return false;
  }

  console.log(phoneNumberRegExp.test(phoneNumber));

  if (!phoneNumberRegExp.test(phoneNumber)) {
    return false;
  }

  return true;
}

function setPhoneNumberEvent() {
  const phoneNumber = document.querySelector('#phone-number');
  const cancleBtn = document.querySelector('.cancle-btn');
  const check = document.querySelector('.check');

  phoneNumber.addEventListener('input', () => {
    phoneNumber.value = processPhoneNumberInput(phoneNumber.value);

    if (checkPhoneNumberInput(phoneNumber.value)) {
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
}

function setAuthNumberEvent() {
  const phoneNumber = document.querySelector('#phone-number');
  const authRequestBtn = document.querySelector('.auth-number__request');
  const authReRequestBtn = document.querySelector('.auth-number__request-re');

  authRequestBtn.addEventListener('click', async () => {
    const authNumber = document.querySelector('.auth-number');

    if (!checkPhoneNumberInput(phoneNumber.value)) {
      return;
    }

    phoneNumber.readOnly = true;
    authRequestBtn.style.display = 'none';
    authNumber.style.display = 'flex';
    getAuthNumber();
  });

  authReRequestBtn.addEventListener('click', () => {
    getAuthNumber();
  });
}

function initCheckPhoneNumberPage() {
  const phoneNumberForm = document.querySelector('.check-phone-number__form');

  setAuthNumberEvent();
  setPhoneNumberEvent();

  phoneNumberForm.addEventListener('submit', (e) => {
    e.preventDefault();
  });
}

initCheckPhoneNumberPage();
