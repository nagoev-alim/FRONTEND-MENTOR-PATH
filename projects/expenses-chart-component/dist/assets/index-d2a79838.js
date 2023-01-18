(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=l(e);fetch(e.href,s)}})();const n=[{day:"mon",amount:17.45},{day:"tue",amount:34.91},{day:"wed",amount:52.36},{day:"thu",amount:31.07},{day:"fri",amount:23.39},{day:"sat",amount:43.28},{day:"sun",amount:25.48}],d=document.querySelector("#app");d.innerHTML=`
  <div class='component'>
    <div class='header'>
      <div class='balance'>
        <span class='balance__text'>My balance</span>
        <p class='balance__value'>$921.48</p>
      </div>
      <img class='balance__ico' src='./assets/images/logo.svg' alt='My balance'>
    </div>

    <div class='main'>
      <h2 class='title'>Spending - Last 7 days</h2>
      <ul class='days'>
        ${n.map(({day:t,amount:a})=>`
          <li class='days__item days-item ${t}'>
            <div class='days-item__tooltip'>$${a}</div>
            <div class='days-item__bar'></div>
            <p class='days-item__day'>${t}</p>
          </li>
        `).join("")}
      </ul>
      <div class='summary'>
        <div class='summary__current'>
          <p class='summary__title'>Total this month</p>
          <p class='summary__amount'>$478.33</p>
        </div>
        <div class='summary__last'>
          <p class='summary__plus'>+2.4%</p>
          <span class='summary__label'>from last month</span>
        </div>
      </div>
    </div>
  </div>
`;const r=Math.max(...n.map(t=>t.amount)),c=n.find(t=>t.amount===r).day;console.log(c);const m=150;function u(t){const a=document.querySelector(`.${t.day}`);document.querySelector(`.${c}`).classList.add("max"),setTimeout(()=>{a.querySelector(".days-item__bar").style.height=`${t.amount*m/r}px`},800),a.addEventListener("click",({target:l})=>{var o;(o=document.querySelector(".open"))==null||o.classList.remove("open"),l.closest("li").querySelector(".days-item__tooltip").classList.add("open")})}n.forEach(u);
