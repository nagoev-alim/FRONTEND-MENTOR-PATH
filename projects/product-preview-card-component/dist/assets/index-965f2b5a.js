(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const n=""+new URL("images/icon-cart.svg",import.meta.url).href,a=""+new URL("images/image-product-mobile.jpg",import.meta.url).href,c=""+new URL("images/image-product-desktop.jpg",import.meta.url).href;const l=document.querySelector("#app");l.innerHTML=`
  <div class='component'>
    <picture>
      <source
        media="(min-width:576px)"
        srcset="${c}"
      />
      <img src="${a}" draggable="false" alt="Product Image" />
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
        <img src='${n}' alt='Add to Cart' draggable="false">
        Add to Cart
      </button>
    </div>
  </div>
`;
