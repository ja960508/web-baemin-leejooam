function setAgreeInputEvents() {
  const agreeAllInput = document.querySelector('.agree--all input');
  const agreeInputs = document.querySelectorAll('.agree input');
  const essentialInputs = document.querySelectorAll('.essential input');
  const nextBtn = document.querySelector('.next-btn');

  agreeAllInput.addEventListener('click', () => {
    const agreeAllInputState = agreeAllInput.checked;

    agreeInputs.forEach((item) => {
      item.checked = agreeAllInputState;
      nextBtn.disabled = !agreeAllInputState;
    });
  });

  agreeInputs.forEach((item) =>
    item.addEventListener('click', () => {
      let allAgreeInputsState = true;
      let nextBtnState = false;

      agreeInputs.forEach((input) => {
        if (!input.checked) {
          allAgreeInputsState = false;

          return false;
        }
      });

      agreeAllInput.checked = allAgreeInputsState;

      essentialInputs.forEach((item) => {
        if (!item.checked) {
          nextBtnState = true;

          return false;
        }
      });

      nextBtn.disabled = nextBtnState;
    })
  );
}

function initAgreeTerms() {
  setAgreeInputEvents();

  const form = document.querySelector('.agree-terms__form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    location.href = '/users/register/check-phone-number';
  });
}

initAgreeTerms();
