import './style.css';
import feather from 'feather-icons';
// ==========================
// 🚀 Mock Data
// ==========================
const mockData = {
  HEADER: {
    src: './assets/images/logo.svg',
    alt: 'Fylo',
    menu: ['Features', 'Team', 'Sign In'],
  },
  INTRO: {
    src: './assets/images/illustration-intro.png',
    title: 'All your files in one secure location, accessible anywhere.',
    text: 'Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.',
    label: 'Get Started',
  },
  FEATURES: [
    {
      src: './assets/images/icon-access-anywhere.svg',
      title: 'Access your files, anywhere',
      text: 'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.',
    },
    {
      src: './assets/images/icon-security.svg',
      title: 'Security you can trust',
      text: '2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.',
    },
    {
      src: './assets/images/icon-collaboration.svg',
      title: 'Real-time collaboration',
      text: 'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.',
    },
    {
      src: './assets/images/icon-any-file.svg',
      title: 'Store any type of file',
      text: 'Whether you\'re sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.',
    },
  ],
  ABOUT: {
    src: './assets/images/illustration-stay-productive.png',
    title: 'Stay productive, wherever you are',
    text: [
      'Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.',
      'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.',
    ],
    link: 'See how Fylo works',
  },
  REVIEWS: [
    {
      src: './assets/images/profile-1.jpg',
      text: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
      name: 'Satish Patel',
      position: 'Founder & CEO, Huddle',
    },
    {
      src: './assets/images/profile-2.jpg',
      text: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
      name: 'Bruce McKenzie',
      position: 'Founder & CEO, Huddle',
    },
    {
      src: './assets/images/profile-3.jpg',
      text: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
      name: 'Iva Boyd',
      position: 'Founder & CEO, Huddle',
    },
  ],
  ACCESS: {
    title: 'Get early access today',
    text: 'It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.',
    label: 'Get Started For Free',
  },
  FOOTER: {
    src: './assets/images/logo.svg',
    alt: 'Fylo',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    phone: '+1-543-123-4567',
    email: 'example@fylo.com',
    list01: ['About Us', 'Jobs', 'Press', 'Blog'],
    list02: ['Contact Us', 'Terms', 'Privacy'],
  },
};
// ==========================
// 🚀 Query Selectors
// ==========================
const ROOT = document.querySelector('#app');
// ==========================
// 🚀 Query Selectors
// ==========================
// ==========================
// 🚀 Events
// ==========================
ROOT.innerHTML = `
<div class='page'>
  <header class='header'>
    <nav class='header__nav container'>
      <a href='#' class='logo'>
        <img src='${mockData.HEADER.src}' alt='${mockData.HEADER.alt}' class='logo__img'>
      </a>
      <ul class='header__menu'>
        ${mockData.HEADER.menu.map(label => `<li class='header__menu-item'><a href='#' class='header__menu-link'>${label}</a></li>`).join('')}
      </ul>
    </nav>
  </header>
  <!-- /.header -->

  <main class='main'>

    <section class='intro'>
      <img src='${mockData.INTRO.src}' alt='${mockData.INTRO.title}' class='intro__img'>
      <h1 class='intro__title'>${mockData.INTRO.title}</h1>
      <p class='intro__text'>${mockData.INTRO.text}</p>
      <a href='#' class='btn intro__btn'>${mockData.INTRO.label}</a>
    </section>
    <!-- /.intro -->

    <section class='features container'>
      <h2 class='visually-hidden'>Our Features</h2>
      <ul class='features__list'>
        ${mockData.FEATURES.map(({ src, text, title }) => `
          <li class='features__item'>
            <img src='${src}' alt='${title}' class='features__item-ico'>
            <h3 class='features__item-title'>${title}</h3>
            <p class='features__item-text'>${text}</p>
          </li>
        `).join('')}
      </ul>
    </section>
    <!-- /.features -->

    <section class='about container'>
      <img src='${mockData.ABOUT.src}' alt='${mockData.ABOUT.src}' class='about__img'>
      <div class='about__content'>
        <h2 class='title about__title'>${mockData.ABOUT.title}</h2>
        <p class='about__text'>${mockData.ABOUT.text[0]}</p>
        <p class='about__text'>${mockData.ABOUT.text[1]}</p>
        <a href='#' class='about__link'>${mockData.ABOUT.link}</a>
      </div>
    </section>
    <!-- /.about -->

    <section class='testimonials container'>
      <h2 class='visually-hidden'>Testimonials</h2>
      <ul class='testimonials__list'>
        ${mockData.REVIEWS.map(({ src, text, name, position }) => `
          <li class='testimonials__item'>
            <p class='testimonials__item-text'>${text}</p>
            <div class='testimonials__creator'>
              <img src='${src}' alt='${name}' class='testimonials__item-avatar'>
              <p class='testimonials__item-name'>${name}</p>
              <p class='testimonials__item-position'>${position}</p>
            </div>
          </li>
        `).join('')}
      </ul>
    </section>
    <!-- /.testimonials -->

    <section class='access container'>
      <div class='access__inner'>
        <h2 class='access__title'>${mockData.ACCESS.title}</h2>
        <p class='access__text'>${mockData.ACCESS.text}</p>
        <form class='access__form'>
          <label>
            <input type='email' name='email' placeholder='email@example.com'>
            <span class='error'></span>
          </label>
          <button class='btn' type='submit'>${mockData.ACCESS.label}</button>
        </form>
      </div>
    </section>
    <!-- /.access -->

  </main>
  <!-- /.main -->

  <footer class='footer'>
    <div class='container footer__inner'>
      <a href='#' class='logo'>
        <img src='${mockData.FOOTER.src}' alt='${mockData.FOOTER.alt}' class='logo__ico'>
      </a>
      <div class='footer__column'>
        <p class='footer__address'>
          ${feather.icons['map-pin'].toSvg()}
          ${mockData.FOOTER.text}
        </p>
        <a href='tel:${mockData.FOOTER.phone}' class='footer__tel'>
          ${feather.icons['phone-call'].toSvg()}
          ${mockData.FOOTER.phone}
        </a>
        <a href='mailto:${mockData.FOOTER.email}' class='footer__email'>
          ${feather.icons.mail.toSvg()}
          ${mockData.FOOTER.email}
        </a>
      </div>
      <div class='footer__column'>
        <ul class='footer__list'>
          ${mockData.FOOTER.list01.map(link => `<li class='footer__list-item'><a href='#' class='footer__list-link'>${link}</a></li>`).join('')}
        </ul>
      </div>
      <div class='footer__column'>
        <ul class='footer__list'>
          ${mockData.FOOTER.list02.map(link => `<li class='footer__list-item'><a href='#' class='footer__list-link'>${link}</a></li>`).join('')}
        </ul>
      </div>
      <div class='footer__column'>
        <ul class='footer__social'>
          <li class='footer__social-item'>
            <a href='' class='footer__social-link'>

            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
  <!-- /.footer -->

</div>


<!-- /.page -->
`;
//
// ### Primary
//
// - Dark Blue (intro and email sign up background): hsl(217, 28%, 15%)
// - Dark Blue (main background): hsl(218, 28%, 13%)
// - Dark Blue (footer background): hsl(216, 53%, 9%)
// - Dark Blue (testimonials background): hsl(219, 30%, 18%)
//
// ### Accent
//
// - Cyan (inside call-to-action gradient): hsl(176, 68%, 64%)
// - Blue (inside call-to-action gradient): hsl(198, 60%, 50%)
// - Light Red (error): hsl(0, 100%, 63%)
//
// ### Neutral
//
//
//
//
// - Font size: 14px
//
// ### Headings, Call-to-actions, Header Navigation
//
// - Family: [Raleway](https://fonts.google.com/specimen/Raleway)
// - Weights: 400, 700
//
// ### Body
//
// - Family: [Open Sans](https://fonts.google.com/specimen/Open+Sans)
// - Weights: 400, 700
