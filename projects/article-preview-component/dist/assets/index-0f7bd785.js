(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const l=""+new URL("images/avatar-michelle.jpg",import.meta.url).href,a=""+new URL("images/icon-share.svg",import.meta.url).href,c=""+new URL("images/icon-facebook.svg",import.meta.url).href,d=""+new URL("images/icon-pinterest.svg",import.meta.url).href,u=""+new URL("images/icon-twitter.svg",import.meta.url).href;const m=document.querySelector("#app");m.innerHTML=`
  <div class='component'>
    <div class='image'></div>
    <div class='body'>
      <h3>Shift the overall look and feel by adding these wonderful touches to furniture in your home</h3>
      <p>Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.</p>
      <div class='creator'>
        <div class='info'>
          <img src='${l}' alt='Michelle Appleton'>
          <p>Michelle Appleton</p>
          <span>28 Jun 2020</span>
        </div>
        <div class='share'>
          <button data-share=''><img src='${a}' alt='share'></button>
          <div class='share__block'>
            <p>Share</p>
            <ul>
              <li><img src='${c}' alt='Facebook'></li>
              <li><img src='${u}' alt='Twitter'></li>
              <li><img src='${d}' alt='Pintereset'></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
`;const s={shareBtn:document.querySelector("[data-share]"),share:document.querySelector(".share__block")};s.shareBtn.addEventListener("click",()=>s.share.classList.toggle("open"));
