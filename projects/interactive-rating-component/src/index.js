// 🚀 Images
import starIco from '/assets/images/star-ico.svg';
import thankIco from '/assets/images/thank-you.svg';

// 🚀 Styles
import './style.css';

// 🚀 Render Skeleton
const root = document.querySelector('#app');
root.innerHTML = `
  <div class='component' data-component=''>
    <div class='circle star'>
      <img src='${starIco}' alt='Set rating'>
    </div>
    <h2>How did we do?</h2>
    <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
    <form data-form=''>
      ${Array.from({ length: 5 }, (v, i) => i + 1).map(i => `
        <div>
          <input type='radio' name='rating' id='${i}' value='${i}' class='visually-hidden'>
          <label for='${i}' class='circle'>${i}</label>
        </div>
      `).join('')}
      <button>Submit</button>
    </form>
  </div>
`;

// ==========================
// 🚀 Query Selectors
// ==========================
const DOM = {
  component: document.querySelector('[data-component]'),
  form: document.querySelector('[data-form]'),
};

// ==========================
// 🚀 Query Selectors
// ==========================
function onSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const { rating } = Object.fromEntries(new FormData(form).entries());
  const radioCount = form.querySelectorAll('[type="radio"]').length;

  if (!rating) {
    alert('Please select one option.');
    return;
  }

  form.querySelector('button').textContent = 'Submitting...';

  setTimeout(() => {
    DOM.component.classList.add('success');

    DOM.component.innerHTML = `
    <img src='${thankIco}' alt='You selected ${rating} out of ${radioCount}'/>
    <p>You selected ${rating} out of ${radioCount}</p>
    <h2>Thank you!</h2>
    <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>`;

  }, 2000);
}


// ==========================
// 🚀 Events
// ==========================
DOM.form.addEventListener('submit', onSubmit);
