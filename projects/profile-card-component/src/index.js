// 🚀 Images
import avatar from '/assets/images/image-victor.jpg';

// 🚀 Styles
import './style.css';

// 🚀 Render Skeleton
const root = document.querySelector('#app');
root.innerHTML = `
  <div class='component'>
    <div class='header'></div>
    <div class='body'>
      <img src='${avatar}' alt='Victor'>
      <p class='name'>Victor Crest<span> 26</span></p>
      <p>London</p>
      <ul>
        ${[
  { n: '80k', t: 'Followers' },
  { n: '803K', t: 'Likes' },
  { n: '1.4K', t: 'Photos' },
].map(({ n, t }) => `
            <li>
              <p>${n}</p>
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
