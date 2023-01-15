(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const a=""+new URL("images/icon-sedans.svg",import.meta.url).href,c=""+new URL("images/icon-suvs.svg",import.meta.url).href,l=""+new URL("images/icon-luxury.svg",import.meta.url).href;const u=[{title:"Sedans",src:a,text:"Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."},{title:"Suvs",src:c,text:"Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."},{title:"Luxury",src:l,text:"Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."}],d=document.querySelector("#app");d.innerHTML=`
  <div class='component'>
    <ul>
      ${u.map(({title:o,src:r,text:n})=>`
        <li>
          <img src='${r}' alt='${o}'>
          <h3>${o}</h3>
          <p>${n}</p>
          <button>Learn More</button>
        </li>
      `).join("")}
    </ul>
  </div>
`;
