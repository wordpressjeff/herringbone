/*! For license information please see frontend-bundle.js.LICENSE.txt */
(()=>{"use strict";var e={"./src/css/frontend/fonts.css":(e,t,n)=>{n.r(t)},"./src/css/frontend/hb.css":(e,t,n)=>{n.r(t)},"./src/css/frontend/landing-dev.css":(e,t,n)=>{n.r(t)},"./src/css/frontend/landing.css":(e,t,n)=>{n.r(t)},"./src/js/frontend/css-animator.js":(e,t,n)=>{function s(e,t,n,s,o,a){let c=o-s,l=a/(a/1e3*60),i=0,d=0,u=o>=s;return new Promise((y=>{let p=setInterval((function(){if(d+=l,i=function(e,t,n,s,r){let o=n,a=t,c=s,l=r;switch(e){case"linear":return c*(o/l)+a;case"easeInQuad":return c*(o/=l)*o+a;case"easeOutQuad":return-c*(o/=l)*(o-2)+a;case"easeInOutQuad":return(o/=l/2)<1?c/2*o*o+a:-c/2*(--o*(o-2)-1)+a;case"easeInCubic":return c*(o/=l)*o*o+a;case"easeOutCubic":return c*((o=o/l-1)*o*o+1)+a;case"easeInOutCubic":return(o/=l/2)<1?c/2*o*o*o+a:c/2*((o-=2)*o*o+2)+a;case"easeInQuart":return c*(o/=l)*o*o*o+a;case"easeOutQuart":return-c*((o=o/l-1)*o*o*o-1)+a;case"easeInOutQuart":return(o/=l/2)<1?c/2*o*o*o*o+a:-c/2*((o-=2)*o*o*o-2)+a;case"easeInQuint":return c*(o/=l)*o*o*o*o+a;case"easeOutQuint":return c*((o=o/l-1)*o*o*o*o+1)+a;case"easeInOutQuint":return(o/=l/2)<1?c/2*o*o*o*o*o+a:c/2*((o-=2)*o*o*o*o+2)+a;case"easeInSine":return-c*Math.cos(o/l*(Math.PI/2))+c+a;case"easeOutSine":return c*Math.sin(o/l*(Math.PI/2))+a;case"easeInOutSine":return-c/2*(Math.cos(Math.PI*o/l)-1)+a;case"easeInExpo":return 0===o?a:c*Math.pow(2,10*(o/l-1))+a;case"easeOutExpo":return o===l?a+c:c*(1-Math.pow(2,-10*o/l))+a;case"easeInOutExpo":return 0===o?a:o===l?a+c:(o/=l/2)<1?c/2*Math.pow(2,10*(o-1))+a:c/2*(2-Math.pow(2,-10*--o))+a;case"easeInCirc":return-c*(Math.sqrt(1-(o/=l)*o)-1)+a;case"easeOutCirc":return c*Math.sqrt(1-(o=o/l-1)*o)+a;case"easeInOutCirc":return(o/=l/2)<1?-c/2*(Math.sqrt(1-o*o)-1)+a:c/2*(Math.sqrt(1-(o-=2)*o)+1)+a;case"easeInBack":return a=1.70158,c*(o/=l)*o*((a+1)*o-a)+a;case"easeOutBack":return a=1.70158,c*((o=o/l-1)*o*((a+1)*o+a)+1)+a;case"easeInOutBack":return a=1.70158,(o/=l/2)<1?c/2*(o*o*((1+(a*=1.525))*o-a))+a:c/2*((o-=2)*o*((1+(a*=1.525))*o+a)+2)+a;case"easeInBounce":return c-easeOutBounce(l-o,0,c,l)+a;case"easeOutBounce":return(o/=l)<1/2.75?c*(7.5625*o*o)+a:o<2/2.75?c*(7.5625*(o-=1.5/2.75)*o+.75)+a:o<2.5/2.75?c*(7.5625*(o-=2.25/2.75)*o+.9375)+a:c*(7.5625*(o-=2.625/2.75)*o+.984375)+a;case"easeInOutBounce":return o<l/2?.5*easeInBounce(2*o,0,c,l)+a:.5*easeOutBounce(2*o-l,0,c,l)+.5*c+a}}(n,s,d,c,a).toFixed(2),u&&i>=o||!u&&i<=o)return clearInterval(p),r(e,t,o),y(t+" done");r(e,t,i)}),1e3/60)}))}function r(e,t,n){switch(t){case"scale":return e.style.transform="scale("+n+")",void(e.style.opacity=n);case"left":return void(e.style.left=n+"px")}}n.r(t),n.d(t,{animate:()=>o});const o=async(e,t,n,r,o,a)=>{await s(e,t,n,r,o,a)}},"./src/js/frontend/dropdown-menu.js":(e,t,n)=>{n.r(t),n.d(t,{dropdownMenu:()=>s});const s=()=>{let e=setInterval((function(){"complete"===document.readyState&&(clearInterval(e),[...document.getElementsByClassName("dropdown_toggle")].forEach((e=>{e.addEventListener("click",buttonClicked=function(){hb_dropdownToggle.toggle(this.id)})})))}),100);function t(e){const t=e.getBoundingClientRect();return viewportHeight=window.innerHeight,shouldScroll={bool:t.bottom>viewportHeight,distance:t.bottom-viewportHeight}}return{toggle:function(e){let n=document.getElementById(e);if("false"==n.getAttribute("aria-expanded")){let s=window.getComputedStyle(n).height,r=document.querySelector("#"+e+" + .dropdown_contents");r.style.transform="translateY("+s+")",container=n.parentElement;let o=function(e){const t=e.getBoundingClientRect();return viewportWidth=window.innerWidth,t.left<=viewportWidth/2}(container);o?(r.style.right="",r.style.left="0"):(r.style.left="",r.style.right="0"),n.classList.add("dropdown_toggle-active"),n.setAttribute("aria-expanded",!0),n.setAttribute("aria-pressed",!0);let a=t(r);a.bool&&window.scrollBy(0,a.distance),document.addEventListener("click",hb_dropdownToggle.pageClick(e))}else hb_dropdownToggle.close(n)},close:function(e){e.classList.remove("dropdown_toggle-active"),e.setAttribute("aria-expanded",!1),e.setAttribute("aria-pressed",!1)},pageClick:function(e){return function t(){let n=document.getElementById(e),s=n.parentElement;s===!event.target||s.contains(event.target)||(hb_dropdownToggle.close(n),document.removeEventListener("click",t))}}}}},"./src/js/frontend/hideheader.js":(e,t,n)=>{n.r(t),n.d(t,{hideHeader:()=>s});const s=()=>{let e=document.querySelector("body"),t=document.querySelector(".header"),n=document.querySelector(".menuToggle"),s=!1;const r=setInterval((()=>{"complete"===document.readyState&&(clearInterval(r),n.addEventListener("click",o))}),100),o=()=>{s||(s=!0,e.classList.contains("menu_active")?c():a())},a=async()=>{t.setAttribute("hidden",!1),e.classList.add("menu_active"),await l(t,"transform","translate( 0, 0 )"),window.addEventListener("scroll",c,{once:!0}),s=!1},c=async()=>{t.setAttribute("hidden",!0),e.classList.remove("menu_active"),await l(t,"transform","translate( 0, -100% )"),s=!1},l=(e,n,s)=>{new Promise((r=>{try{e.style[n]=s;const o=n=>{n.target===e&&(t.removeEventListener("transitionend",o),r("Transition complete."))};t.addEventListener("transitionend",o)}catch(e){console.error(e.name+": "+e.message),reject(e)}}))}}},"./src/js/frontend/mobile-popup-menu.js":(e,t,n)=>{n.r(t),n.d(t,{mobilePopupMenu:()=>s});const s=()=>{let e,t=!0,n=!0,s=window.pageYOffset;window.onscroll=function(){e=window.pageYOffset,t&&(t=!1,setTimeout((function(){s>e&&0==n?($(".thumbNav-jshide").css({transform:"translateY(0rem)"}),n=!0):s<e&&1==n&&($(".thumbNav-jshide").css({transform:"translateY(5rem)"}),$(".thumbNav_checkbox").prop("checked",!1),n=!1),s=e,t=!0}),500))}}},"./src/js/frontend/modal.js":(e,t,n)=>{n.r(t),n.d(t,{modal:()=>r});var s=n("./src/js/frontend/css-animator.js");const r=()=>{let e,t,n,r,o=!1,a=!1,c=!0;async function l(l){const y=l.currentTarget.id;e=document.querySelector("."+y),t=e.querySelector(".modal_dialog"),n=e.querySelector(".modal_control-close"),n.onclick=()=>{d()},window.onclick=function(e){t===!e.target||t.contains(e.target)||d()},await Promise.all([i(),u()]),async function(){a||o||(a=!0,o=!0,function(){if(null!==document.getElementById("js_psuedoScrollBar"))document.getElementById("js_psuedoScrollBar").style.display="block";else{let e=document.createElement("div");e.setAttribute("id","js_psuedoScrollBar"),e.style.position="fixed",e.style.right="0",e.style.top="0",e.style.width=r,e.style.height="100vh",e.style.background="#333",e.style.zIndex="9",document.body.appendChild(e)}document.querySelector("body").style.overflow="hidden",document.querySelector("html").style.paddingRight=r}(),function(){let e,t=n=>{null!==e&&window.clearTimeout(e),e=window.setTimeout((function(){a?i():window.removeEventListener("resize",t)}),20)};window.addEventListener("resize",t)}(),c?(t.style.left="-768px",t.style.transform="scale(1)",t.style.opacity="1",e.style.display="contents",e.style.opacity="1",await(0,s.animate)(t,"left","easeInOutCirc",-768,0,800),o=!1):(t.style.left="0",t.style.transform="scale(0)",t.style.opacity="0",e.style.display="flex",e.style.opacity="0",function(e){let t=4,n=setInterval((function(){t>=100&&clearInterval(n),e.style.opacity=t/100,t+=2}),16)}(e),await(0,s.animate)(t,"scale","easeInOutCirc",0,1,800),o=!1))}()}async function i(){let n=parseInt(document.querySelector("html").getBoundingClientRect().width,10);c=n<=768,c&&a&&!o?(t.style.left="0",t.style.transform="scale(1)",t.style.opacity="1",e.style.display="contents",e.style.opacity="1"):!c||a||o?c||!a||o?c||a||o||(t.style.left="0",t.style.transform="scale(0)",t.style.opacity="0",e.style.display="none",e.style.opacity="0"):(t.style.left="0",t.style.transform="scale(1)",t.style.opacity="1",e.style.display="flex",e.style.opacity="1"):(t.style.left="-768px",t.style.transform="scale(1)",t.style.opacity="1",e.style.display="contents",e.style.opacity="1")}async function d(){a&&!o&&(a=!1,o=!0,null!==document.getElementById("js_psuedoScrollBar")&&(document.getElementById("js_psuedoScrollBar").style.display="none",document.querySelector("body").style.overflow="visible",document.querySelector("html").style.paddingRight="0"),c?(t.style.left="0",t.style.transform="scale(1)",t.style.opacity="1",e.style.display="contents",e.style.opacity="1",await(0,s.animate)(t,"left","easeInOutCirc",0,-768,800),o=!1):(t.style.left="0",t.style.transform="scale(1)",t.style.opacity="1",e.style.display="flex",e.style.opacity="1",function(e){let t=100,n=setInterval((function(){t<=0&&clearInterval(n),e.style.opacity=t/100,t-=2}),16)}(e),await(0,s.animate)(t,"scale","easeInOutCirc",1,0,800),e.style.display="none",o=!1))}async function u(){const e=window.innerWidth,t=document.querySelector("html").getBoundingClientRect().width;return r=parseInt(e-t,10)+"px",r}let y=setInterval((function(){"complete"===document.readyState&&(clearInterval(y),document.querySelectorAll(".modal_control-open").forEach((e=>{e.addEventListener("click",l)})))}),100)}},"./src/js/frontend/screenclass.js":(e,t,n)=>{n.r(t),n.d(t,{screenClass:()=>s});const s=()=>{let e,t,n,s,r,o,a=document.querySelector("body");function c(){e=window.innerWidth,t=window.innerHeight,s=e>=t?"landscape":"portrait",s!==n&&(a.classList.remove(n),a.classList.add(s),n=s),o=e<="768"?"mobile":e<="1120"?"tablet":e<="1440"?"laptop":e<="1920"?"desktop":"xl",o!==r&&(a.classList.remove(r),a.classList.add(o),r=o)}function l(){const e=window.innerWidth,t=document.querySelector("html").getBoundingClientRect().width,n=parseInt(e-t,10)+"px";document.documentElement.style.setProperty("--scrollbar",n)}new ResizeObserver((e=>l())).observe(document.body);let i=setInterval((function(){"complete"===document.readyState&&(clearInterval(i),c())}),10);var d;window.onresize=function(){d&&clearTimeout(d),d=setTimeout((function(){c(),l()}),10)}}},"./src/js/frontend/usp-section.js":(e,t,n)=>{n.r(t),n.d(t,{uspSection:()=>s});const s=()=>{const e=document.querySelectorAll(".usp_state"),t=document.querySelectorAll(".usp_graphicWrap");let n=setInterval((()=>{"complete"===document.readyState&&(clearInterval(n),[...t].forEach((t=>{t.addEventListener("click",(function(){for(let t=0;t<e.length;t++)e[t].checked=!1;e[0].parentElement.scrollIntoView()}))})))}),100)}}},t={};function n(s){var r=t[s];if(void 0!==r)return r.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,n),o.exports}n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var s={};(()=>{n.r(s);n("./src/css/frontend/hb.css"),n("./src/css/frontend/fonts.css"),n("./src/css/frontend/landing.css"),n("./src/css/frontend/landing-dev.css");var e=n("./src/js/frontend/dropdown-menu.js"),t=n("./src/js/frontend/hideheader.js"),r=n("./src/js/frontend/mobile-popup-menu.js"),o=n("./src/js/frontend/modal.js"),a=n("./src/js/frontend/screenclass.js"),c=n("./src/js/frontend/usp-section.js");(0,e.dropdownMenu)(),(0,t.hideHeader)(),(0,r.mobilePopupMenu)(),(0,o.modal)(),(0,a.screenClass)(),(0,c.uspSection)()})()})();
//# sourceMappingURL=frontend-bundle.js.map