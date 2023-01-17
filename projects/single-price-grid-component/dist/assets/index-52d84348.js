(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const t of o.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&i(t)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();const s=document.querySelector("#app");s.innerHTML=`
  <div class='component'>
    <div class='column top'>
      <h1>Join our community</h1>
      <p>30-day, hassle-free money back guarantee</hp>
      <p>Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</p>
    </div>
    <div class='column middle'>
      <h3>Monthly Subscription</h3>
      <p>&dollar;29 <span>per month</span></p>
      <p>Full access for less than &dollar;1 a day</p>
      <button>Sign Up</button>
    </div>
    <div class='column bottom'>
      <h3>Why Us</h3>
      <ul>
        <li>Tutorials by industry experts</li>
        <li>Peer &amp; expert code review</li>
        <li>Coding exercises</li>
        <li>Access to our GitHub repos</li>
        <li>Community forum</li>
        <li>Flashcard decks</li>
        <li>New videos every week</li>
      </ul>
    </div>
  </div>
`;
