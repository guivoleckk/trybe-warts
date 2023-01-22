// pegando elementos

const getButtonSubmitLogin = document.getElementById('botao-enviar');
const getButtonAgreement = document.getElementById('agreement');
const getButtonSubmitForm = document.getElementById('submit-btn');
const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');
const evaluationForm = document.getElementById('evaluation-form');
const formData = document.getElementById('form-data');

const inputName = document.getElementById('input-name');
const inputLastName = document.getElementById('input-lastname');
const inputEmail = document.getElementById('input-email');
const inputHouse = document.getElementById('house');
const inputFamily = document.querySelectorAll('.family');
const inputSubject = document.getElementsByClassName('subject');
const inputRate = document.getElementsByClassName('rate');
const inputTextarea = document.getElementById('textarea');

const nameOutput = document.getElementById('name-output');
const lastnameOutput = document.getElementById('lastname-output');
const emailOutput = document.getElementById('email-output');
const houseOutput = document.getElementById('house-output');
const familyOutput = document.getElementById('family-output');
const subjectOutput = document.getElementById('subject-output');
const rateOutput = document.getElementById('rate-output');
const textareaOutput = document.getElementById('textarea-output');

const counterMax = 500;

// funcoes

getButtonSubmitLogin.addEventListener('click', (event) => {
  const emailUser = document.getElementById('email-user').value;
  const passwordUser = document.getElementById('password-user').value;
  event.preventDefault();
  if (emailUser === 'tryber@teste.com' && passwordUser === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const validateButton = () => {
  getButtonSubmitForm.disabled = !getButtonAgreement.checked;
};

const importFamily = () => {
  for (let index = 0; index < inputFamily.length; index += 1) {
    if (inputFamily[index].checked) {
      return inputFamily[index].value;
    }
  }
};

const importSubject = () => {
  const subjectArray = [];
  for (let index = 0; index < inputSubject.length; index += 1) {
    if (inputSubject[index].checked) {
      subjectArray.push(inputSubject[index].value);
    }
  }
  return subjectArray.join(', ');
};

const importRate = () => {
  for (let index = 0; index < inputRate.length; index += 1) {
    if (inputRate[index].checked) {
      return inputRate[index].value;
    }
  }
};

const attributeValues = () => {
  nameOutput.innerHTML = inputName.value;
  lastnameOutput.innerHTML = inputLastName.value;
  emailOutput.innerHTML = inputEmail.value;
  houseOutput.innerHTML = inputHouse.value;
  familyOutput.innerHTML = importFamily();
  subjectOutput.innerHTML = importSubject();
  rateOutput.innerHTML = importRate();
  textareaOutput.innerHTML = inputTextarea.value;
};

getButtonAgreement.addEventListener('click', () => {
  if (getButtonAgreement.checked) {
    getButtonSubmitForm.disabled = false;
  } else {
    validateButton();
  }
});

getButtonSubmitForm.addEventListener('click', (event) => {
  event.preventDefault();
  evaluationForm.style.display = 'none';
  formData.style.display = 'block';
  attributeValues();
});

textarea.addEventListener('keyup', () => {
  counter.innerHTML = counterMax - textarea.value.length;
});

// calling functions
window.onload = () => {
  validateButton();
};
