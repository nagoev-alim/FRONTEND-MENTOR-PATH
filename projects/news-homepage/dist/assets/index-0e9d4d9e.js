(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const u=""+new URL("images/logo.svg",import.meta.url).href,m=""+new URL("images/icon-menu-close.svg",import.meta.url).href,l=""+new URL("images/icon-menu.svg",import.meta.url).href,p=""+new URL("images/image-web-3-mobile.jpg",import.meta.url).href,d=""+new URL("images/image-web-3-desktop.jpg",import.meta.url).href;const n={hero:[{title:"Hydrogen VS Electric Cars",text:"Will hydrogen-fueled cars ever catch up to EVs?"},{title:"The Downsides of AI Artistry",text:"What are the possible adverse effects of on-demand AI image generation?"},{title:"Is VC Funding Drying Up?",text:"Private funding by VC firms is down 50% YOY. We take a look at what that means."}],posts:[{title:"Reviving Retro PCs",text:"What happens when old PCs are given modern upgrades?",src:"image-retro-pcs.jpg"},{title:"Top 10 Laptops of 2022",text:"Our best picks for various needs and budgets.",src:"image-top-laptops.jpg"},{title:"The Growth of Gaming",text:"How the pandemic has sparked fresh opportunities.",src:"image-gaming-growth.jpg"}]};console.log(n.hero);const h=document.querySelector("#app");h.innerHTML=`
  <div class='page'>
    <!--🚀 Header-->
    <header class='header'>
      <nav class='nav'>
        <a href='#' class='logo'><img src='${u}' alt='W.' class='logo__image'></a>
        <button class='trigger' data-menu=''><img src='${l}' alt='Menu'></button>
        <ul class='menu'>${["Home","New","Popular","Trending","Categories"].map(t=>`<li><a href='#'>${t}</a></li>`).join("")}</ul>
      </nav>
    </header>

    <!--🚀 Main-->
    <main class='main'>
      <!--🚀 Hero-->
      <section class='hero'>
        <article class='hero__article hero-article'>
          <picture class='hero-article__picture'>
            <source media='(min-width: 760px)' srcset='${d}'>
            <img src='${p}' alt='Web 3.0'>
          </picture>
          <div class='hero-article__content'>
            <h1 class='hero-article__title'>The Bright Future of Web 3.0?</h1>
            <div class='hero-article__text'>
              <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
              <a class='button' href='#'>Read more</a>
            </div>
          </div>
        </article>
        <aside class='hero__update'>
          <h2 class='hero__update-title'>New</h2>
          ${n.hero.map(({title:t,text:o})=>`
            <article>
              <h3>${t}</h3>
              <p>${o}</p>
            </article>
          `).join("")}
        </aside>
      </section>
      <!--🚀 Top-->
      <section class='top'>
        <h2 class='visually-hidden'>Top posts</h2>
        <ul class='top__list'>
        ${n.posts.map(({title:t,text:o,src:r},i)=>`
            <li>
              <article>
                 <img src='/assets/images/${r}' alt='${t}'>
                 <p>0${i+1}</p>
                 <h3>${t}</h3>
                 <p>${o}</p>
              </article>
            </li>
          `).join("")}
        </ul>
      </section>
    </main>
  </div>
`;const c={menuBtn:document.querySelector("[data-menu]"),menuList:document.querySelector(".menu")};function g({target:t}){t.classList.toggle("active"),c.menuList.classList.toggle("active"),t.innerHTML=`<img src='${t.classList.contains("active")?m:l}' alt='Menu'>`}c.menuBtn.addEventListener("click",g);
