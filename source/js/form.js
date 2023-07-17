const formInput = document.querySelectorAll('.form__input');
const form = document.querySelector('.form');
const phone = document.getElementById('phone');
const userName = document.getElementById('name');

for (let i = 0; i < formInput.length; i++) {
  formInput[i].addEventListener('click', function () {
    formInput[i].value = '';
    userName.setAttribute('style', 'color: white;');
    phone.setAttribute('style', 'color: white;');
  });
}

function isValidName() {
  const patternName = /[а-яА-ЯёЁ]+/;
  return patternName.test(userName.value);
}

function isValidPhone() {
  const patternPhone = /^[0-9]*$/;
  return patternPhone.test(phone.value);
}

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  if (!userName.value || !phone.value) {
    userName.value = 'Пожалуйста, заполните все поля';
    phone.value = 'Пожалуйста, заполните все поля';
    userName.setAttribute('style', 'color: red;');
    phone.setAttribute('style', 'color: red;');
    return;
  }

  if (!isValidName(userName)) {
    userName.value = 'Введите ваше имя кириллицей';
    userName.setAttribute('style', 'color: red;');
    return;
  }

  if (!isValidPhone(phone)) {
    phone.value = 'Введите ваш номер телефона, используя только цифры';
    phone.setAttribute('style', 'color: red;');
    return;
  }

  form.submit();
});

