import './style.css';
import axios from 'axios';
// ==========================
// 🚀 Render Skeleton
// ==========================
const ROOT = document.querySelector('#app');
ROOT.innerHTML = `
<div class='devfinder'>
  <header class='header'>
    <h1>devfinder</h1>
    <button data-theme-toggle=''>
      <span>Dark</span>
      <img src='./assets/images/icon-moon.svg' alt='Dark'>
    </button>
  </header>

  <div class='body'>
    <p class='error hide'></p>
    <form class='form' data-form=''>
      <label>
        <input type='text' name='query' placeholder='Search Github username...'>
      </label>
      <button type='submit'>Search</button>
    </form>

    <div class='profile'>
      <div class='profile__header'>
        <img class='profile__avatar' src='https://avatars.githubusercontent.com/u/583231?v=4' alt='The Octocat' data-header-avatar=''>
        <div class='profile__inner'>
          <div class='profile__name'>
            <h3 data-header-name=''>The Octocat</h3>
            <p data-header-login=''>@octocat</p>
          </div>
          <p class='profile__join' data-header-join=''>Joined 25 Jan 2011</p>
        </div>
        <p class='profile__bio' data-header-bio=''>This profile has no bio</p>
      </div>
      <div class='profile__stats profile-stats'>
        <div class='profile-stats__item'>
          <p class='profile-stats__label'>Repos</p>
          <p class='profile-stats__value' data-stats-repos=''>8</p>
        </div>
        <div class='profile-stats__item'>
          <p class='profile-stats__label'>Followers</p>
          <p class='profile-stats__value' data-stats-followers=''>8101</p>
        </div>
        <div class='profile-stats__item'>
          <p class='profile-stats__label'>Following</p>
          <p class='profile-stats__value' data-stats-following=''>9</p>
        </div>
      </div>
      <div class='profile__info profile-info'>
        <div class='profile-info__item'>
          <img src='./assets/images/icon-location.svg' alt='location' class='profile-info__ico'>
          <p class='profile-info__value' data-info-city=''>San Francisco</p>
        </div>
        <div class='profile-info__item'>
          <img src='./assets/images/icon-website.svg' alt='blog' class='profile-info__ico'>
          <p class='profile-info__value' data-info-blog=''>https://github.blog</p>
        </div>
        <div class='profile-info__item'>
          <img src='./assets/images/icon-twitter.svg' alt='email' class='profile-info__ico'>
          <p class='profile-info__value' data-info-social=''>Not available</p>
        </div>
        <div class='profile-info__item'>
          <img src='./assets/images/icon-company.svg' alt='company' class='profile-info__ico'>
          <p class='profile-info__value' data-info-company=''>@github</p>
        </div>
      </div>
    </div>
  </div>
</div>
`;
// ==========================
// 🚀 Query Selectors
// ==========================
const DOM = {
  btnTheme: document.querySelector('[data-theme-toggle]'),
  form: document.querySelector('[data-form]'),
  header: {
    avatar: document.querySelector('[data-header-avatar]'),
    name: document.querySelector('[data-header-name]'),
    login: document.querySelector('[data-header-login]'),
    join: document.querySelector('[data-header-join]'),
    bio: document.querySelector('[data-header-bio]'),
  },
  stats: {
    repos: document.querySelector('[data-stats-repos]'),
    followers: document.querySelector('[data-stats-followers]'),
    following: document.querySelector('[data-stats-following]'),
  },
  info: {
    city: document.querySelector('[data-info-city]'),
    blog: document.querySelector('[data-info-blog]'),
    social: document.querySelector('[data-info-social]'),
    company: document.querySelector('[data-info-company]'),
  },
};
// ==========================
// 🚀 Functions
// ==========================
/**
 * @function onSubmit - Form submit event handler
 * @param event
 * @return {Promise<void>}
 */
async function onSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const query = Object.fromEntries(new FormData(form).entries()).query.trim();

  if (query.length === 0) {
    alert('Please fill the field.');
    return;
  }

  try {
    const {
      data: {
        public_repos,
        name,
        login,
        location,
        following,
        followers,
        twitter_username,
        created_at,
        company,
        blog,
        bio,
        avatar_url,
      },
    } = await axios.get(`https://api.github.com/users/${query}`);

    DOM.header.avatar.src = avatar_url;
    DOM.header.name.textContent = name;
    DOM.header.login.textContent = login;
    DOM.header.bio.textContent = bio ?? 'This profile has no bio';
    DOM.header.join.innerHTML = `Joined ${new Date(created_at).getDate()} ${new Date(created_at).toLocaleString('en-En', { month: 'short' })} ${new Date(created_at).getFullYear()}`;

    DOM.stats.repos.textContent = public_repos;
    DOM.stats.followers.textContent = followers;
    DOM.stats.following.textContent = following;

    DOM.info.city.textContent = location ?? 'Not available';
    DOM.info.blog.textContent = blog !== '' ? blog : 'Not available';
    DOM.info.social.textContent = twitter_username ?? 'Not available';
    DOM.info.company.textContent = company ?? 'Not available';

  } catch (e) {
    document.querySelector('.error').classList.remove('hide');
    document.querySelector('.error').textContent = e.response.data.message;
    setTimeout(() => {
      document.querySelector('.error').classList.add('hide');
      document.querySelector('.error').textContent = '';
    }, 3000);
    console.log(e);
  }

  form.reset();
}

/**
 * @function onToggleTheme - Toggle theme
 */
function onToggleTheme() {
  const isSetTheme = document.documentElement.classList.toggle('dark');
  DOM.btnTheme.innerHTML = `
    <span>${isSetTheme ? 'Light' : 'Dark'}</span>
    <img src='./assets/images/${isSetTheme ? 'icon-sun.svg' : 'icon-moon.svg'}' alt='${isSetTheme ? 'Light' : 'Dark'}'>
    `;
  localStorage.setItem('theme', isSetTheme ? 'dark' : 'light');
}

/**
 * @function storageGet - Get item from localStorage
 */
function storageGet() {
  if (localStorage.getItem('theme')) {
    const isSetTheme = localStorage.getItem('theme') === 'light';
    DOM.btnTheme.innerHTML = `
    <span>${isSetTheme ? 'Dark' : 'Light'}</span>
    <img src='./assets/images/${isSetTheme ? 'icon-moon.svg' : 'icon-sun.svg'}' alt='${isSetTheme ? 'Dark' : 'Light'}'>`;
    document.documentElement.className = `${isSetTheme ? '' : 'dark'}`;
  }
}

// ==========================
// 🚀 Events
// ==========================
storageGet();
DOM.form.addEventListener('submit', onSubmit);
DOM.btnTheme.addEventListener('click', onToggleTheme);
