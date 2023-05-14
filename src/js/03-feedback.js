import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const DATA_USER_FORM = 'feedback-form-state';

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput() {
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(DATA_USER_FORM, JSON.stringify(state));
}

function onFormSubmit(event) {
  event.preventDefault();

  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.removeItem(DATA_USER_FORM);
  emailInput.value = '';
  messageInput.value = '';

  console.log(state);
}

const savedStateJson = localStorage.getItem(DATA_USER_FORM);
if (savedStateJson) {
  const savedState = JSON.parse(savedStateJson);
  emailInput.value = savedState.email;
  messageInput.value = savedState.message;
}
