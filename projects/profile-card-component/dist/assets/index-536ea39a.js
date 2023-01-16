(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const l=""+new URL("images/image-victor.jpg",import.meta.url).href;const c=document.querySelector("#app");c.innerHTML=`
  <div class='component'>
    <div class='header'></div>
    <div class='body'>
      <img src='${l}' alt='Victor'>
      <p class='name'>Victor Crest<span> 26</span></p>
      <p>London</p>
      <ul>
        ${[{n:"80k",t:"Followers"},{n:"803K",t:"Likes"},{n:"1.4K",t:"Photos"}].map(({n,t:o})=>`
            <li>
              <p>${n}</p>
              <p>${o}</p>
            </li>
          `).join("")}
      </ul>
    </div>
  </div>
`;
