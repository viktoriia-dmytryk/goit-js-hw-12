import{a as u,S as L,i as l}from"./assets/vendor-Do60_h77.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(e){if(e.ep)return;e.ep=!0;const a=s(e);fetch(e.href,a)}})();u.defaults.baseURL="https://pixabay.com/api/";const b="10580483-492be0cc0cc7e2002da66cc4f",v=async(t,r)=>{const{data:s}=await u.get("",{params:{key:b,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}});return s},p=document.querySelector(".gallery"),f=document.querySelector(".loader"),m=document.querySelector(".load-btn"),w=new L(".gallery a",{overlayOpacity:.9,animationSpeed:500});function S(t){const r=t.map(({webformatURL:s,largeImageURL:i,tags:e,likes:a,views:o,comments:y,downloads:h})=>`
      <li class="gallery-item">
        <a href="${i}">
          <img class="gallery-image" src="${s}" alt="${e}" />
          <div class="info-wrapper">
            <p class="tag-title">Likes <span class="tag-value">${a}</span></p>
            <p class="tag-title">Views <span class="tag-value">${o}</span></p>
            <p class="tag-title">Comments <span class="tag-value">${y}</span></p>
            <p class="tag-title">Downloads <span class="tag-value">${h}</span></p>
          </div>
        </a>
      </li>
    `).join("");p.insertAdjacentHTML("beforeend",r),w.refresh()}function q(){p.innerHTML=""}function $(){f.classList.remove("hidden")}function O(){f.classList.add("hidden")}function x(){m.classList.remove("hidden")}function d(){m.classList.add("hidden")}const B=document.querySelector(".form"),E=document.querySelector(".load-btn");let n=1,c="";const P=async t=>{n++,await g()};E.addEventListener("click",P);const M=async t=>{t.preventDefault(),c=t.target.elements["search-text"].value.trim(),c&&(n=1,q(),await g(),t.target.reset())};B.addEventListener("submit",M);async function g(){$();try{const{hits:t,totalHits:r}=await v(c,n);if(!t.length){l.error({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",position:"topRight",messageSize:"16px",messageColor:"white"}),d();return}S(t,n),n*15>=r?d():x()}catch{l.error({message:"Something went wrong"})}finally{O()}}
//# sourceMappingURL=index.js.map
