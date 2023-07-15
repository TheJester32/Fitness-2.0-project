const formInput = document.querySelectorAll('.form__input');

for (let i = 0; i < formInput.length; i++) {
  formInput[i].addEventListener('click', function () {
    formInput[i].value = '';
  });
}
