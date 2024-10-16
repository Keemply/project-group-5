import{A as B,a as h,S as x}from"./assets/vendor-BnKFBj3L.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function c(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=c(t);fetch(t.href,o)}})();const y=document.querySelectorAll(".my-projects__block"),O=document.querySelector(".my-projects__button-container"),g=document.querySelector(".my-projects__loader"),m=document.querySelector(".my-projects__button");let u=0;const f=3;function v(){Array.from(y).slice(u,u+f).forEach(s=>{s.style.display="block"}),u+=f,u>=y.length&&(O.style.display="none")}y.forEach((e,s)=>{s>=f&&(e.style.display="none")});m.addEventListener("click",e=>{e.preventDefault(),g.style.display="block",m.style.display="none",setTimeout(()=>{v(),g.style.display="none",m.style.display="block"},500)});v();document.addEventListener("DOMContentLoaded",function(){new B(".accordion",{duration:400,showMultiple:!1,openOnInit:[0],onOpen:function(e){e.parentElement.classList.add("open")},onClose:function(e){e.parentElement.classList.remove("open")}})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".accordion-item");if(e.length>0){e[0].classList.add("open");const s=e[0].querySelector(".accordion-body");s.style.display="block"}e.forEach(s=>{s.querySelector(".accordion-header").addEventListener("click",()=>{e.forEach(t=>{t!==s&&(t.classList.remove("open"),t.querySelector(".accordion-body").style.display="none")}),s.classList.toggle("open");const a=s.querySelector(".accordion-body");a.style.display=s.classList.contains("open")?"block":"none"})})});h.defaults.baseURL="https://portfolio-js.b.goit.study/api/";const i=document.querySelector(".next"),n=document.querySelector(".prev"),C=document.querySelector(".error-message");window.addEventListener("resize",()=>{r.isBeginning?n.classList.add("swiper-button-disabled"):n.classList.contains("swiper-button-disabled")&&n.classList.remove("swiper-button-disabled"),r.isEnd?i.classList.add("swiper-button-disabled"):i.classList.contains("swiper-button-disabled")&&i.classList.remove("swiper-button-disabled")});document.addEventListener("keydown",function(e){e.key==="ArrowLeft"?S():e.key==="ArrowRight"&&E()});function E(){r.slideNext(),r.isBeginning?n.classList.add("swiper-button-disabled"):n.classList.contains("swiper-button-disabled")&&n.classList.remove("swiper-button-disabled"),r.isEnd?i.classList.add("swiper-button-disabled"):i.classList.contains("swiper-button-disabled")&&i.classList.remove("swiper-button-disabled")}function S(){r.slidePrev(),r.isBeginning?n.classList.add("swiper-button-disabled"):n.classList.contains("swiper-button-disabled")&&n.classList.remove("swiper-button-disabled"),r.isEnd?nextButBut.classList.add("swiper-button-disabled"):i.classList.contains("swiper-button-disabled")&&i.classList.remove("swiper-button-disabled")}i.addEventListener("click",E);n.addEventListener("click",S);const r=new x(".swiper",{slidesPerView:1,spaceBetween:20,breakpoints:{0:{slidesPerView:1},768:{slidesPerView:1},1280:{slidesPerView:2}}}),I=document.querySelector(".swiper-wrapper");async function T(){try{return(await h("/reviews")).data}catch(e){C.classList.remove("error-message"),r.isBeginning?n.classList.add("swiper-button-disabled"):n.classList.contains("swiper-button-disabled")&&n.classList.remove("swiper-button-disabled"),r.isEnd?i.classList.add("swiper-button-disabled"):i.classList.contains("swiper-button-disabled")&&i.classList.remove("swiper-button-disabled"),console.log(e)}}function A(){r.update()}async function M(){try{const s=(await T()).map(c=>`<div class="swiper-slide review-obj">
          <p class="review-review">${c.review}</p>
          <div class="review-box">
          <img src="${c.avatar_url}" class="review-img"/>
          <p class="review-author">${c.author}</p>
          </div>
          </div>`).join("");I.insertAdjacentHTML("beforeend",s),A()}catch(e){console.log(e)}}M();document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("contactForm"),s=document.querySelector(".pop-up-background"),c=document.querySelector(".pop-up-container-header"),a=document.querySelector(".pop-up-container-text");e.addEventListener("submit",async function(o){o.preventDefault();const d=document.getElementById("email").value,l=document.getElementById("message").value;try{await t(d,l),c.textContent="Thank you for your interest in cooperation!",a.textContent="The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.",s.classList.remove("pop-up-hide"),e.reset()}catch(p){c.textContent="Error",a.textContent=p.message||"Something went wrong. Please try again later.",s.classList.remove("pop-up-hide")}});async function t(o,d){const l=await fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o,comment:d})});if(!l.ok){const p=await l.json();throw new Error(p.message||"Failed to send the message")}}});const _=document.querySelector(".menu-toggle"),w=document.querySelector(".mobile-menu"),D=document.querySelector(".menu-close"),L=document.body;_.addEventListener("click",()=>{w.style.display="flex",L.style.overflow="hidden"});D.addEventListener("click",()=>{w.style.display="none",L.style.overflow=""});document.querySelectorAll(".mobile-nav a").forEach(e=>{e.addEventListener("click",()=>{w.style.display="none",L.style.overflow=""})});const k=document.querySelector("#theme-toggle"),b=document.body,q=localStorage.getItem("theme");q==="dark"&&b.classList.add("night-theme");q==="dark"&&(k.checked=!0);const N=e=>{e.target.checked?(b.classList.add("night-theme"),localStorage.setItem("theme","dark")):(b.classList.remove("night-theme"),localStorage.setItem("theme","light"))};k.addEventListener("change",N);const P=document.querySelector(".pop-up-background"),U=document.querySelector(".pop-up-container-button");function j(){P.classList.add("pop-up-hide")}U.addEventListener("click",j);document.addEventListener("keydown",function(e){e.key==="Escape"&&!P.classList.contains("pop-up-hide")&&j()});
//# sourceMappingURL=index.js.map
