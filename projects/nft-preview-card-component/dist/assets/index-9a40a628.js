(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const t of i.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&o(t)}).observe(document,{childList:!0,subtree:!0});function s(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerpolicy&&(i.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?i.credentials="include":e.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(e){if(e.ep)return;e.ep=!0;const i=s(e);fetch(e.href,i)}})();const n=""+new URL("images/icon-clock.svg",import.meta.url).href,a=""+new URL("images/icon-view.svg",import.meta.url).href,l=""+new URL("images/icon-ethereum.svg",import.meta.url).href,c=""+new URL("images/image-avatar.png",import.meta.url).href,u=""+new URL("images/image-equilibrium.jpg",import.meta.url).href;const m=document.querySelector("#app");m.innerHTML=`
  <div class='component'>
    <div class='preview'>
      <div class='overlay'>
        <img src='${a}' alt='View'>
      </div>
      <img class='image' src='${u}' alt='Equilibrium'>
    </div>
    <div class='body'>
      <h2><a href='#'>Equilibrium #3429</a></h2>
      <p class='text'>Our Equilibrium collection promotes balance and calm.</p>
      <div class='info'>
        <div>
          <img src='${l}' alt='0.041 ETH'>
          <span>0.041 ETH</span>
        </div>
        <div>
          <img src='${n}' alt='3 days left'>
          <span>3 days left</span>
        </div>
      </div>
      <div class='creator'>
        <img src='${c}' alt='Jules Wyvern'>
        <p>Creation of <span>Jules Wyvern</span></p>
      </div>
    </div>
  </div>
`;
