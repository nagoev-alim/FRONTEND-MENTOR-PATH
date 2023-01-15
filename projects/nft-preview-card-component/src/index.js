// 🚀 Images
import clockIco from '/assets/images/icon-clock.svg';
import viewIco from '/assets/images/icon-view.svg';
import ethereumIco from '/assets/images/icon-ethereum.svg';
import avatar from '/assets/images/image-avatar.png';
import equilibrium from '/assets/images/image-equilibrium.jpg';

// 🚀 Styles
import './style.css';

// 🚀 Render Skeleton
const root = document.querySelector('#app');
root.innerHTML = `
  <div class='component'>
    <div class='preview'>
      <div class='overlay'>
        <img src='${viewIco}' alt='View'>
      </div>
      <img class='image' src='${equilibrium}' alt='Equilibrium'>
    </div>
    <div class='body'>
      <h2><a href='#'>Equilibrium #3429</a></h2>
      <p class='text'>Our Equilibrium collection promotes balance and calm.</p>
      <div class='info'>
        <div>
          <img src='${ethereumIco}' alt='0.041 ETH'>
          <span>0.041 ETH</span>
        </div>
        <div>
          <img src='${clockIco}' alt='3 days left'>
          <span>3 days left</span>
        </div>
      </div>
      <div class='creator'>
        <img src='${avatar}' alt='Jules Wyvern'>
        <p>Creation of <span>Jules Wyvern</span></p>
      </div>
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
