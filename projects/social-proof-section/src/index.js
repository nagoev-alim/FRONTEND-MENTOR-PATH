// 🚀 Images
import starIco from '/assets/images/icon-star.svg';
import avatar01 from '/assets/images/image-colton.jpg';
import avatar02 from '/assets/images/image-irene.jpg';
import avatar03 from '/assets/images/image-anne.jpg';

// 🚀 Styles
import './style.css';

// 🚀 Render Skeleton
const root = document.querySelector('#app');
root.innerHTML = `
  <div class='component'>
    <div class='column column--top'>
      <div>
        <h1>10,000+ of our users love our products.</h1>
        <p>We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.</p>
      </div>
      <ul class='reviews'>
        ${['Rated 5 Stars in Reviews', 'Rated 5 Stars in Report Guru', 'Rated 5 Stars in BestTech'].map(i => `
          <li>
            <ul class='stars'>${Array.from({ length: 5 }).map(star => `<li><img src='${starIco}' alt=''></li>`).join('')}</ul>
            <p>${i}</p>
          </li>
        `).join('')}
      </ul>
    </div>
    <div class='column column--bottom'>
      <ul>
      ${[
  {
    n: 'Colton Smith',
    i: avatar01,
    t: '"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"',
  },
  {
    n: 'Irene Roberts',
    i: avatar02,
    t: '"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."',
  },
  {
    n: 'Anne Wallace',
    i: avatar03,
    t: '"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"',
  },
].map(({n, i, t}) => `
        <li>
        <div>
          <img src='${i}' alt='${n}'>
          <h3>${n}</h3>
          <p>Verified Buyer</p>
        </div>
        <p>${t}</p>
</li>
      `).join('')}
</ul>
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
