(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const a=""+new URL("images/star-ico.svg",import.meta.url).href,l=""+new URL("images/thank-you.svg",import.meta.url).href;const u=document.querySelector("#app");u.innerHTML=`
  <div class='component' data-component=''>
    <div class='circle star'>
      <img src='${a}' alt='Set rating'>
    </div>
    <h2>How did we do?</h2>
    <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
    <form data-form=''>
      ${Array.from({length:5},(o,r)=>r+1).map(o=>`
        <div>
          <input type='radio' name='rating' id='${o}' value='${o}' class='visually-hidden'>
          <label for='${o}' class='circle'>${o}</label>
        </div>
      `).join("")}
      <button>Submit</button>
    </form>
  </div>
`;const c={component:document.querySelector("[data-component]"),form:document.querySelector("[data-form]")};function d(o){o.preventDefault();const r=o.target,{rating:n}=Object.fromEntries(new FormData(r).entries()),i=r.querySelectorAll('[type="radio"]').length;if(!n){alert("Please select one option.");return}r.querySelector("button").textContent="Submitting...",setTimeout(()=>{c.component.classList.add("success"),c.component.innerHTML=`
    <img src='${l}' alt='You selected ${n} out of ${i}'/>
    <p>You selected ${n} out of ${i}</p>
    <h2>Thank you!</h2>
    <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>`},2e3)}c.form.addEventListener("submit",d);
