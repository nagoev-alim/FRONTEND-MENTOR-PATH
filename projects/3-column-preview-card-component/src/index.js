// 🚀 Images
import sedans from '/assets/images/icon-sedans.svg';
import suvs from '/assets/images/icon-suvs.svg';
import luxury from '/assets/images/icon-luxury.svg';

// 🚀 Styles
import './style.css';

// 🚀 Mock
const mock = [
  {
    title: 'Sedans',
    src: sedans,
    text: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'
  },
  {
    title: 'Suvs',
    src: suvs,
    text: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.'
  },
  {
    title: 'Luxury',
    src: luxury,
    text: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.'
  },
];

// 🚀 Render Skeleton
const root = document.querySelector('#app');
root.innerHTML = `
  <div class='component'>
    <ul>
      ${mock.map(({title,src,text}) => `
        <li>
          <img src='${src}' alt='${title}'>
          <h3>${title}</h3>
          <p>${text}</p>
          <button>Learn More</button>
        </li>
      `).join('')}
    </ul>
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
