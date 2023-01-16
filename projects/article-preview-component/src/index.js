// 🚀 Images
import avatar from '/assets/images/avatar-michelle.jpg';
import shareIco from '/assets/images/icon-share.svg';
import fbIco from '/assets/images/icon-facebook.svg';
import pinIco from '/assets/images/icon-pinterest.svg';
import twIco from '/assets/images/icon-twitter.svg';

// 🚀 Styles
import './style.css';

// 🚀 Render Skeleton
const root = document.querySelector('#app');
root.innerHTML = `
  <div class='component'>
    <div class='image'></div>
    <div class='body'>
      <h3>Shift the overall look and feel by adding these wonderful touches to furniture in your home</h3>
      <p>Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.</p>
      <div class='creator'>
        <div class='info'>
          <img src='${avatar}' alt='Michelle Appleton'>
          <p>Michelle Appleton</p>
          <span>28 Jun 2020</span>
        </div>
        <div class='share'>
          <button data-share=''><img src='${shareIco}' alt='share'></button>
          <div class='share__block'>
            <p>Share</p>
            <ul>
              <li><img src='${fbIco}' alt='Facebook'></li>
              <li><img src='${twIco}' alt='Twitter'></li>
              <li><img src='${pinIco}' alt='Pintereset'></li>
            </ul>
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
  shareBtn: document.querySelector('[data-share]'),
  share: document.querySelector('.share__block'),
};

// ==========================
// 🚀 Query Selectors
// ==========================

// ==========================
// 🚀 Events
// ==========================
DOM.shareBtn.addEventListener('click', () => DOM.share.classList.toggle('open'));
