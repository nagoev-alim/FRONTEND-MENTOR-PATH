// 🚀 Images
// import team from '/assets/images/icon-team-builder.svg';

// 🚀 Styles
import './style.css';
// https://rngueco.github.io/intro-component-with-signup-form/
// 🚀 Render Skeleton
const root = document.querySelector('#app');
root.innerHTML = `
  <div class='intro'>
    <div class='header'>
      <h1>Learn to code by watching others</h1>
      <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
    </div>
    <div class='signup'>
      <p class='price'><strong>Try it free 7 days</strong> then $20/mo. thereafter</p>
      <form data-form=''>
        <label>
          <input type='text' name='name' placeholder='First Name'>
        </label>
        <label>
          <input type='text' name='lastname' placeholder='Last Name'>
        </label>
        <label>
          <input type='email' name='email' placeholder='Email Address'>
        </label>
        <label>
          <input type='password' name='password' placeholder='Password'>
        </label>
        <button type='submit'>Claim your free trial</button>
        <p class='terms'>By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
      </form>
    </div>
  </div>
`;

// ==========================
// 🚀 Query Selectors
// ==========================
const DOM = {};

// ==========================
// 🚀 Query Selectors
// ==========================

// ==========================
// 🚀 Events
// ==========================
