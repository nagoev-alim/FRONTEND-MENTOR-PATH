(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const s=""+new URL("images/image-qr-code.png",import.meta.url).href;const l=document.querySelector("#app");l.innerHTML=`
  <div class='component'>
    <img src='${s}' alt='Qr Code'>
    <h2>Improve your front-end <br> skills by building projects</h2>
    <p>Scan the QR code to visit Frontend <br> Mentor and take your coding skills to <br> the next level</p>
  </div>
`;
