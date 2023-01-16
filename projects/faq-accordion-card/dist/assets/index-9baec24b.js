(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const l=""+new URL("images/icon-arrow-down.svg",import.meta.url).href;const c=[{title:"How many team members can I invite?",text:"You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."},{title:"What is the maximum file upload size?",text:"No more than 2GB. All files in your account must fit your allotted storage space."},{title:"How do I reset my password?",text:"Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you."},{title:"Can I cancel my subscription?",text:"Yes! Send us a message and we’ll process your request no questions asked."},{title:"Do you provide additional support?",text:"Chat and email support is available 24/7. Phone lines are open during normal business hours."}],d=document.querySelector("#app");d.innerHTML=`
  <div class='component'>
    <div class='content'>
      <h2>FAQ</h2>
      <ul>
        ${c.map(({title:s,text:o})=>`
          <li data-container=''>
            <div data-header=''>
               <button>
                <span>${s}</span>
                <img data-icon='' src='${l}' alt=''>
              </button>
            </div>
            <div data-body=''>
              <p>${o}</p>
            </div>
          </li>
        `).join("")}
      </ul>
    </div>
  </div>
`;const a={accordionItems:document.querySelectorAll("[data-container]")};function u({target:s}){const o=s.closest("[data-container]"),n=o.querySelector("[data-body]");o.classList.contains("open")?(o.classList.remove("open"),n.style.height=n.style.paddingBottom="0px"):(a.accordionItems.forEach((i,e)=>{i.classList.remove("open");const t=i.querySelector("[data-body]");t.style.height=t.style.paddingBottom="0px"}),o.classList.add("open"),n.style.height=o.classList.contains("open")?`${n.scrollHeight+15}px`:"0px",n.style.paddingBottom=o.classList.contains("open")?"15px":"0px")}a.accordionItems.forEach(s=>s.querySelector("[data-header]").addEventListener("click",u));
