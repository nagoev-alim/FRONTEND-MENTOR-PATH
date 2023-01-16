(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const a=""+new URL("images/icon-star.svg",import.meta.url).href,l=""+new URL("images/image-colton.jpg",import.meta.url).href,c=""+new URL("images/image-irene.jpg",import.meta.url).href,d=""+new URL("images/image-anne.jpg",import.meta.url).href;const u=document.querySelector("#app");u.innerHTML=`
  <div class='component'>
    <div class='column column--top'>
      <div>
        <h1>10,000+ of our users love our products.</h1>
        <p>We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.</p>
      </div>
      <ul class='reviews'>
        ${["Rated 5 Stars in Reviews","Rated 5 Stars in Report Guru","Rated 5 Stars in BestTech"].map(i=>`
          <li>
            <ul class='stars'>${Array.from({length:5}).map(r=>`<li><img src='${a}' alt=''></li>`).join("")}</ul>
            <p>${i}</p>
          </li>
        `).join("")}
      </ul>
    </div>
    <div class='column column--bottom'>
      <ul>
      ${[{n:"Colton Smith",i:l,t:'"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"'},{n:"Irene Roberts",i:c,t:'"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."'},{n:"Anne Wallace",i:d,t:'"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"'}].map(({n:i,i:r,t:o})=>`
        <li>
        <div>
          <img src='${r}' alt='${i}'>
          <h3>${i}</h3>
          <p>Verified Buyer</p>
        </div>
        <p>${o}</p>
</li>
      `).join("")}
</ul>
    </div>
  </div>
`;
