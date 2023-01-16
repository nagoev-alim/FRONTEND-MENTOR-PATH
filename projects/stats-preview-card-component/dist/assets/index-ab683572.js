(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const n=""+new URL("images/image-header-mobile.jpg",import.meta.url).href,l=""+new URL("images/image-header-desktop.jpg",import.meta.url).href;const c=document.querySelector("#app");c.innerHTML=`
  <div class='component'>
    <div class='image'>
      <picture>
        <source
          media='(min-width:768px)'
          srcset='${l}'
        />
        <img src='${n}' draggable='false' alt='Product Image' />
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
