import './style.css';
import axios from 'axios';
// ==========================
// 🚀 Render Skeleton
// ==========================
const ROOT = document.querySelector('#app');
ROOT.innerHTML = `
<div class='page'>
  <header class='header'>
    <nav class='nav container'>
      <a href='#' class='logo'>
        <img src='./assets/images/logo.svg' alt='Shortly' class='logo__ico'>
      </a>
      <button class='burger' data-burger=''>
        <i class='fas fa-bars'></i>
      </button>
      <div class='menu' data-menu=''>
        <ul class='menu__list'>
          ${['Features', 'Pricing', 'Resources'].map(value => `<li class='menu__item'><a href='#' class='menu__link'>${value}</a></li>`).join('')}
        </ul>
        <ul class='user'>
          ${['Login', 'Sign Up'].map((value, i) => `<li class='user__item'><a href='#' class='${i === 1 ? 'btn' : 'user__link'}'>${value}</a></li>`).join('')}
        </ul>
      </div>
    </nav>
  </header>

  <main>
    <section class='hero'>
      <div class='container hero__inner'>
      <div class='hero__image'><img src='./assets/images/illustration-working.svg' alt='More than just shorter links'></div>
      <div class='hero__content'>
        <h1>More than just shorter links</h1>
        <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
        <a href='#' class='btn'>Get Started</a>
      </div>
      </div>
    </section>

    <section class='shorten'>
      <div class='container'>
      <div class='shorten__inner'>
        <form data-form='' class='shorten__form'>
          <label>
            <input type='text' name='url' placeholder='Shorten a link here...'>
            <span class='error hide'>Please add a valid link</span>
          </label>
          <button type='submit' class='btn'>Shorten It!</button>
        </form>
        <ul class='shorten__list' data-links=''></ul>
      </div>
      </div>
    </section>

    <section class='statistics'>
      <div class='container statistics__inner'>
        <div class='statistics__top'>
          <h2>Advanced Statistics</h2>
          <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
        </div>
        <ul class='statistics__list'>
          <li class='statistics__item'>
            <div class='statistics__item-image'>
              <img src='./assets/images/icon-brand-recognition.svg' alt='Brand Recognition' class='statistics__item-ico'>
            </div>
            <h3 class='statistics__item-name'>Brand Recognition</h3>
            <p class='statistics__item-text'>Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instill confidence in your content.</p>
          </li>
          <li class='statistics__item'>
            <div class='statistics__item-image'>
              <img src='./assets/images/icon-detailed-records.svg' alt='Detailed Records' class='statistics__item-ico'>
            </div>
            <h3 class='statistics__item-name'>Detailed Records</h3>
            <p class='statistics__item-text'>Gain insights into who is clicking your links. Knowing when and where
              people engage with your content helps inform better decisions.</p>
          </li>
          <li class='statistics__item'>
            <div class='statistics__item-image'>
              <img src='./assets/images/icon-fully-customizable.svg' alt='Fully Customizable' class='statistics__item-ico'>
            </div>
            <h3 class='statistics__item-name'>Fully Customizable</h3>
            <p class='statistics__item-text'>Improve brand awareness and content discoverability through customizable
              links, supercharging audience engagement.</p>
          </li>
        </ul>
      </div>
    </section>

    <section class='boost'>
      <h2>Boost your links today</h2>
      <a href='#' class='btn'>Get Started</a>
    </section>

  </main>

  <footer class='footer'>
    <div class='container footer__inner'>
      <a href='#' class='logo'>
        <img src='./assets/images/logo.svg' alt='Shortly' class='logo__ico'>
      </a>
      <div class='footer__columns'>
      <div class='footer__column'>
        <h3>Features</h3>
        <ul>
          ${['Link Shortening', 'Branded Links', 'Analytics'].map(value => `<li><a href='#'>${value}</a></li>`).join('')}
        </ul>
      </div>
      <div class='footer__column'>
        <h3>Resources</h3>
        <ul>
          ${['Blog', 'Developers', 'Support'].map(value => `<li><a href='#'>${value}</a></li>`).join('')}
        </ul>
      </div>
      <div class='footer__column'>
        <h3>Company</h3>
        <ul>
          ${['About', 'Our Team', 'Careers', 'Contact'].map(value => `<li><a href='#'>${value}</a></li>`).join('')}
        </ul>
      </div>
      </div>

      <ul class='footer__social'>
        ${['fa-facebook-square', 'fa-twitter', 'fa-pinterest', 'fa-instagram'].map(value => `
          <li class='footer__social-item'>
            <a href='#' class='footer__social-link'>
              <i class='fab ${value}'></i>
            </a>
          </li>
        `).join('')}
      </ul>
    </div>
  </footer>
</div>
`;
// ==========================
// 🚀 Query Selectors
// ==========================
const DOM = {
  btnBurger: document.querySelector('[data-burger]'),
  menu: document.querySelector('[data-menu]'),
  form: document.querySelector('[data-form]'),
  links: document.querySelector('[data-links]'),
  error: document.querySelector('.error'),
};

const PROPS = {
  links: storeGet(),
};
// ==========================
// 🚀 Functions
// ==========================
/**
 * @function onMenuToggle - Toggle mobile menu
 * @param target
 */
function onMenuToggle({ target }) {
  DOM.menu.classList.toggle('open');
  target.innerHTML = `${DOM.menu.classList.contains('open') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>'}`;
}

/**
 * @function onSubmit - Form submit event handler
 * @param event
 * @return {Promise<void>}
 */
async function onSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const url = Object.fromEntries(new FormData(form).entries()).url.trim();

  if (url.length === 0 || !/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/.test(url)) {
    DOM.error.classList.remove('hide');
    setTimeout(() => DOM.error.classList.add('hide'), 2000);
    return;
  }

  try {
    const {
      data: {
        ok,
        result: { full_short_link },
      },
    } = await axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`);

    if (!ok) {
      DOM.error.textContent = 'Something went wrong, open dev console.';
      DOM.error.classList.remove('hide');
      setTimeout(() => DOM.error.classList.add('hide'), 2000);
      return;
    }

    PROPS.links = [...PROPS.links, {
      title: url,
      link: full_short_link,
    }];

    storeSet(PROPS.links)
    renderHTML(PROPS.links);
  } catch (e) {
    console.log(e);
  }

  form.reset();
}

/**
 * @function renderHTML - Render links
 * @param data
 */
function renderHTML(data) {
  DOM.links.innerHTML = ``;

  for (const { title, link } of data) {
    const li = document.createElement('li');
    li.classList.add('shorten__list-item');
    li.innerHTML = `
      <h3>${title}</h3>
      <p>${link}</p>
      <button class='btn' data-clipboard='${link}'>Copy</button>
    `;

    const copyBtn = li.querySelector('[data-clipboard]');

    copyBtn.addEventListener('click', ({ target }) => {
      navigator.clipboard.writeText(target.dataset.clipboard);
      target.textContent = 'Copied!';
      target.classList.add('copy');
    });

    DOM.links.appendChild(li);
  }
}

/**
 * @function storeSet - Set data to local storage
 * @param data
 */
function storeSet(data) {
  return localStorage.setItem('shortens', JSON.stringify(data));
}

/**
 * @function storeGet - Get data from local storage
 * @return {any|*[]}
 */
function storeGet() {
  return localStorage.getItem('shortens') ? JSON.parse(localStorage.getItem('shortens')) : [];
}

/**
 * @function storeDisplay - Get and display local storage data
 */
function storeDisplay() {
  const links = storeGet();
  if (links.length !== 0) {
    renderHTML(links);
  }
}

// ==========================
// 🚀 Events
// ==========================
storeDisplay();
DOM.btnBurger.addEventListener('click', onMenuToggle);
DOM.form.addEventListener('submit', onSubmit);
