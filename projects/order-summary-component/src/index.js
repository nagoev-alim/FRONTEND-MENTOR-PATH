// 🚀 Images
import headerImage from '/assets/images/illustration-hero.svg';
import musicIco from '/assets/images/icon-music.svg';

// 🚀 Styles
import './style.css';

// 🚀 Render Skeleton
const root = document.querySelector('#app');
root.innerHTML = `
  <div class='component'>
    <div class='header'>
      <img src='${headerImage}' alt='Order Summary'>
    </div>
    <div class='body'>
      <h2>Order Summary</h2>
      <p>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like</p>
      <div class='details'>
        <div>
          <img src='${musicIco}' alt='Annual Plan'>
          <h3>Annual Plan</h3>
          <p>$59.99/year</p>
        </div>
        <a href='#'>Change</a>
      </div>
      <div class='buttons'>
        <a href='#'>Proceed to Payment</a>
        <a href='#'>Cancel Order</a>
      </div>
    </div>
  </div>
`;

// ==========================
// 🚀 Query Selectors
// ==========================
const DOM = {
};

// ==========================
// 🚀 Query Selectors
// ==========================

// ==========================
// 🚀 Events
// ==========================
