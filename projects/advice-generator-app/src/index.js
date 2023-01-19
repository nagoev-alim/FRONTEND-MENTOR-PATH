import './style.css';
import axios from 'axios';
// ==========================
// 🚀 Render Skeleton
// ==========================
const ROOT = document.querySelector('#app');
ROOT.innerHTML = `
<div class='component'>
  <div class='spinner' data-spinner=''></div>
  <div class='content hide' data-content=''>
    <h2 class='visually-hidden'>Advice generator</h2>
    <p class='number' data-number=''>Advice #18</p>
    <p class='advice-text' data-text=''>Some advice</p>
    <picture>
      <source srcset='./assets/images/pattern-divider-desktop.svg' media='(min-width: 567px)'>
      <img src='./assets/images/pattern-divider-mobile.svg' alt='divider' aria-hidden='true' class='divider'>
    </picture>
  </div>

  <button class='button disabled' data-generate=''>
    <img src='./assets/images/icon-dice.svg' alt='Generate Advice'>
  </button>
</div>
`;
// ==========================
// 🚀 Query Selectors
// ==========================
const DOM = {
  button: document.querySelector('[data-generate]'),
  spinner: document.querySelector('[data-spinner]'),
  text: document.querySelector('[data-text]'),
  number: document.querySelector('[data-number]'),
  content: document.querySelector('[data-content]'),
};
const PROPS = {
  API: 'https://api.adviceslip.com',
};
// ==========================
// 🚀 Functions
// ==========================
async function fetchAdvice() {
  try {
    const { status, data: { slip: { id, advice } } } = await axios.get(`${PROPS.API}/advice`);

    if (status !== 200) {
      alert('Something went wrong, open developer console.');
      return;
    }

    DOM.content.classList.add('hide');
    DOM.spinner.classList.add('show');
    DOM.button.classList.add('disabled');
    DOM.spinner.textContent = 'Loading...';

    setTimeout(() => {
      DOM.content.classList.remove('hide');
      DOM.spinner.classList.remove('show');
      DOM.button.classList.remove('disabled');
      DOM.number.textContent = `Advice #${id}`;
      DOM.text.textContent = `“${advice}”`;
    }, 1000);

  } catch (e) {
    alert('Something went wrong, open developer console.');
    DOM.content.classList.add('hide');
    DOM.spinner.classList.add('show');
    DOM.button.classList.add('disabled');
    DOM.spinner.textContent = 'Sorry, there was an error fetching the advice.';
    console.log(e);
  }
}

// ==========================
// 🚀 Events
// ==========================
fetchAdvice()
DOM.button.addEventListener('click', fetchAdvice);
