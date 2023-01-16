(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const t of r.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&n(t)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const s=""+new URL("images/illustration-hero.svg",import.meta.url).href,a=""+new URL("images/icon-music.svg",import.meta.url).href;const l=document.querySelector("#app");l.innerHTML=`
  <div class='component'>
    <div class='header'>
      <img src='${s}' alt='Order Summary'>
    </div>
    <div class='body'>
      <h2>Order Summary</h2>
      <p>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like</p>
      <div class='details'>
        <div>
          <img src='${a}' alt='Annual Plan'>
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
