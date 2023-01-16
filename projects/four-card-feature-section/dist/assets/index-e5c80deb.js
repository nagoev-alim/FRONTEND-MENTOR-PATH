(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const l=""+new URL("images/icon-calculator.svg",import.meta.url).href,a=""+new URL("images/icon-karma.svg",import.meta.url).href,n=""+new URL("images/icon-supervisor.svg",import.meta.url).href,c=""+new URL("images/icon-team-builder.svg",import.meta.url).href;const u=document.querySelector("#app");u.innerHTML=`
  <div class='section'>
    <div class='header'>
      <h2>
        <span>Reliable, efficient delivery</span>
        <span>Powered by Technology</span>
      </h2>
      <p>Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>
    </div>
    <ul>
      <li>
        <h3>Supervisor</h3>
        <p>Monitors activity to identify project roadblocks</p>
        <img src='${n}' alt='Supervisor'>
      </li>
      <li>
        <h3>Team Builder</h3>
        <p>Scans our talent network to create the optimal team for your project</p>
        <img src='${c}' alt='Team Builder'>
      </li>
      <li>
        <h3>Karma</h3>
        <p>Regularly evaluates our talent to ensure quality</p>
        <img src='${a}' alt='Karma'>
      </li>
      <li>
        <h3>Calculator</h3>
        <p>Uses data from past projects to provide better delivery estimates</p>
        <img src='${l}' alt='Calculator'>
      </li>
    </ul>
  </div>
`;
