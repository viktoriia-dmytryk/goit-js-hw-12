import{a as l,S as f,i as n}from"./assets/vendor-Do60_h77.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();l.defaults.baseURL="https://pixabay.com/api/";const m="10580483-492be0cc0cc7e2002da66cc4f";function g(a){return l.get("",{params:{key:m,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),y=new f(".gallery a",{overlayOpacity:.9,animationSpeed:500});function h(a){const r=a.map(({webformatURL:o,largeImageURL:s,tags:e,likes:t,views:i,comments:p,downloads:d})=>`
      <li class="gallery-item">
        <a href="${s}">
          <img class="gallery-image" src="${o}" alt="${e}" />
          <div class="info-wrapper">
            <p class="tag-title">Likes <span class="tag-value">${t}</span></p>
            <p class="tag-title">Views <span class="tag-value">${i}</span></p>
            <p class="tag-title">Comments <span class="tag-value">${p}</span></p>
            <p class="tag-title">Downloads <span class="tag-value">${d}</span></p>
          </div>
        </a>
      </li>
    `).join("");c.innerHTML=r,y.refresh()}function L(){c.innerHTML=""}function b(){u.classList.remove("hidden")}function v(){u.classList.add("hidden")}const S=document.querySelector(".form");S.addEventListener("submit",w);function w(a){a.preventDefault();const r=a.target.elements["search-text"].value.trim();r&&(L(),b(),g(r).then(o=>{const s=o.hits;if(!s.length){n.error({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",position:"topRight",messageSize:"16px",messageColor:"white"});return}h(s)}).catch(()=>{n.error({message:"Something went wrong"})}).finally(()=>{v()}),a.target.reset())}
//# sourceMappingURL=index.js.map
