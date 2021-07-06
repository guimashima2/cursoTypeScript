import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGE = 'show-error-message';
const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

const submitEventFn = (event: Event) => {
  event.preventDefault();
  const target = event.target as HTMLFormElement;
  hideErrorMessage(target);
  checkForEmptyFields(username, password, password2);
  checkEmail(email);
  checkPassword(password, password2);
  if (shouldSentForm(target)) console.log('Formulario enviado');
};

form.addEventListener('submit', submitEventFn);

form.addEventListener('change', () => hideErrorMessage(form));

function hideErrorMessage(form: HTMLFormElement): void {
  form
    .querySelectorAll('.' + SHOW_ERROR_MESSAGE)
    .forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGE));
}

function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector(
    '.error-message',
  ) as HTMLSpanElement;
  errorMessage.innerText = msg;
  formFields.classList.add(SHOW_ERROR_MESSAGE);
}

function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value) showErrorMessage(input, 'Campo nao pode estar vazio');
  });
}

function checkEmail(input: HTMLInputElement): void {
  if (!isEmail(input.value)) showErrorMessage(input, 'Email invalido');
}

function checkPassword(pass1: HTMLInputElement, pass2: HTMLInputElement): void {
  if (!(pass1.value === pass2.value))
    showErrorMessage(pass2, 'Senhas nao estao iguais');
}

function shouldSentForm(form: HTMLFormElement): boolean {
  let send = true;
  form.querySelectorAll('.' + SHOW_ERROR_MESSAGE).forEach(() => (send = false));
  return send;
}
