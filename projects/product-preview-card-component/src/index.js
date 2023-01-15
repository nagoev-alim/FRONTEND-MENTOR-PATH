// 🚀 Images
import cartIco from '/assets/images/icon-cart.svg';
import previewMobile from '/assets/images/image-product-mobile.jpg';
import previewDesktop from '/assets/images/image-product-desktop.jpg';

// 🚀 Styles
import './style.css';

// 🚀 Render Skeleton
const root = document.querySelector('#app');
root.innerHTML = `
  <div class='component'>
    <picture>
      <source
        media="(min-width:576px)"
        srcset="${previewDesktop}"
      />
      <img src="${previewMobile}" draggable="false" alt="Product Image" />
    </picture>

    <div class='content'>
      <span class='category'>Perfume</span>
      <h1>Gabrielle Essence Eau De Parfum</h1>
      <p>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
      <div class="prices">
        <span>$149.99</span>
        <span>$169.99</span>
      </div>
      <button>
        <img src='${cartIco}' alt='Add to Cart' draggable="false">
        Add to Cart
      </button>
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
