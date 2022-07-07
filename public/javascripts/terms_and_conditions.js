(function () {
  const agreeAllInput = document.querySelector('.agreeAll input');
  const agreeTermsInput = document.querySelectorAll('.agree input');
  const essentialInputs = document.querySelectorAll('.essential input');
  const nextBtn = document.querySelector('.next-btn');
  const form = document.querySelector('.terms-form');

  agreeAllInput.addEventListener('click', () => {
    const agreeAllInputState = agreeAllInput.checked;

    agreeTermsInput.forEach((item) => {
      item.checked = agreeAllInputState;
      nextBtn.disabled = !agreeAllInputState;
    });
  });

  agreeTermsInput.forEach((item) =>
    item.addEventListener('click', () => {
      let allAgreeTermsInputState = true;
      let nextBtnState = false;

      agreeTermsInput.forEach((input) => {
        if (!input.checked) {
          allAgreeTermsInputState = false;
        }
      });

      agreeAllInput.checked = allAgreeTermsInputState;

      essentialInputs.forEach((item) => {
        console.log(item.checked);
        if (!item.checked) {
          nextBtnState = true;
        }
      });

      nextBtn.disabled = nextBtnState;
    })
  );

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    location.href = '/users/phone-number-check';
  });
})();
