// 🚀 Images
import mobile from '/assets/images/image-header-mobile.jpg';
import desktop from '/assets/images/image-header-desktop.jpg';

// 🚀 Styles
import './style.css';

// 🚀 Render Skeleton
const root = document.querySelector('#app');
root.innerHTML = `
  <div class='component'>
    <div class='image'>
      <picture>
        <source
          media='(min-width:768px)'
          srcset='${desktop}'
        />
        <img src='${mobile}' draggable='false' alt='Product Image' />
      </picture>
    </div>
    <div class='content'>
      <h2>Get <span>insights</span> that help your business grow.</h2>
      <p>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
      <ul>
        <li>
          <p>10k+</p>
          <p>companies</p>
        </li>
        <li>
          <p>314</p>
          <p>templates</p>
        </li>
        <li>
          <p>12m+</p>
          <p>queries</p>
        </li>
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
