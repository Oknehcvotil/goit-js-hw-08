const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

const STORAGE_FEEDBACK_FORM = 'feedback-form-state';

refs.form.addEventListener('input', onFormInput);
refs.form.addEventListener('submit', onFormSubmit);

let formData = {};
populateFormInput();

function onFormInput(e) {
  formData[e.target.name] = e.target.value;

  localStorage.setItem(STORAGE_FEEDBACK_FORM, JSON.stringify(formData));
}

function populateFormInput() {
  const savedInput = localStorage.getItem(STORAGE_FEEDBACK_FORM);

  if (savedInput) {
    const parsedSavedInput = JSON.parse(savedInput);
    refs.input.value = parsedSavedInput.email;
    refs.textarea.value = parsedSavedInput.message;
  }
}

function onFormSubmit(e) {
  e.preventDefault();

  const savedInput = localStorage.getItem(STORAGE_FEEDBACK_FORM);
  const parsedSavedInput = JSON.parse(savedInput);
  console.log(parsedSavedInput);

  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_FEEDBACK_FORM);
}
