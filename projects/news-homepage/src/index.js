// 🚀 Images
import logo from '/assets/images/logo.svg';
import menuClose from '/assets/images/icon-menu-close.svg';
import menu from '/assets/images/icon-menu.svg';
import imageHeroM from '/assets/images/image-web-3-mobile.jpg';
import imageHeroD from '/assets/images/image-web-3-desktop.jpg';

// 🚀 Styles
import './style.css';

// 🚀 Mock
const data = {
  hero: [
    { title: 'Hydrogen VS Electric Cars', text: 'Will hydrogen-fueled cars ever catch up to EVs?' },
    {
      title: 'The Downsides of AI Artistry',
      text: 'What are the possible adverse effects of on-demand AI image generation?',
    },
    {
      title: 'Is VC Funding Drying Up?',
      text: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
    },
  ],
  posts: [
    {
      title: 'Reviving Retro PCs',
      text: 'What happens when old PCs are given modern upgrades?',
      src: 'image-retro-pcs.jpg',
    },
    {
      title: 'Top 10 Laptops of 2022',
      text: 'Our best picks for various needs and budgets.',
      src: 'image-top-laptops.jpg',
    },
    {
      title: 'The Growth of Gaming',
      text: 'How the pandemic has sparked fresh opportunities.',
      src: 'image-gaming-growth.jpg',
    },
  ],
};
console.log(data.hero);
// 🚀 Render Skeleton
const root = document.querySelector('#app');
root.innerHTML = `
  <div class='page'>
    <!--🚀 Header-->
    <header class='header'>
      <nav class='nav'>
        <a href='#' class='logo'><img src='${logo}' alt='W.' class='logo__image'></a>
        <button class='trigger' data-menu=''><img src='${menu}' alt='Menu'></button>
        <ul class='menu'>${['Home', 'New', 'Popular', 'Trending', 'Categories'].map(link => `<li><a href='#'>${link}</a></li>`).join('')}</ul>
      </nav>
    </header>

    <!--🚀 Main-->
    <main class='main'>
      <!--🚀 Hero-->
      <section class='hero'>
        <article class='hero__article hero-article'>
          <picture class='hero-article__picture'>
            <source media='(min-width: 760px)' srcset='${imageHeroD}'>
            <img src='${imageHeroM}' alt='Web 3.0'>
          </picture>
          <div class='hero-article__content'>
            <h1 class='hero-article__title'>The Bright Future of Web 3.0?</h1>
            <div class='hero-article__text'>
              <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
              <a class='button' href='#'>Read more</a>
            </div>
          </div>
        </article>
        <aside class='hero__update'>
          <h2 class='hero__update-title'>New</h2>
          ${data.hero.map(({ title, text }) => `
            <article>
              <h3>${title}</h3>
              <p>${text}</p>
            </article>
          `).join('')}
        </aside>
      </section>
      <!--🚀 Top-->
      <section class='top'>
        <h2 class='visually-hidden'>Top posts</h2>
        <ul class='top__list'>
        ${data.posts.map(({ title, text, src }, idx) => `
            <li>
              <article>
                 <img src='./assets/images/${src}' alt='${title}'>
                 <p>0${idx + 1}</p>
                 <h3>${title}</h3>
                 <p>${text}</p>
              </article>
            </li>
          `).join('')}
        </ul>
      </section>
    </main>
  </div>
`;

// ==========================
// 🚀 Query Selectors
// ==========================
const DOM = {
  menuBtn: document.querySelector('[data-menu]'),
  menuList: document.querySelector('.menu'),
};
// ==========================
// 🚀 Query Selectors
// ==========================
function onClick({ target }) {
  target.classList.toggle('active');
  DOM.menuList.classList.toggle('active');
  target.innerHTML = `<img src='${target.classList.contains('active') ? menuClose : menu}' alt='Menu'>`;
}
// ==========================
// 🚀 Events
// ==========================
DOM.menuBtn.addEventListener('click', onClick);
