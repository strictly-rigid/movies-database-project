var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in s)return s[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return s[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,s){n[e]=s},e.parcelRequired7c6=t);var r=t("2shzp");const a={form:document.querySelector(".search-form-series"),seriesContainer:document.querySelector(".series-data-container"),seriesList:document.querySelector(".series-list"),targetObserverSeries:document.querySelector(".js-guard-series"),targetObserverSearch:document.querySelector(".js-guard-search"),backdrop:document.querySelector(".series-backdrop"),modalWrapper:document.querySelector(".series-item-wrapper"),endResultsInfo:document.querySelector(".no-results-info-series"),closeBtn:document.querySelector(".modal-close-btn")};var o=t("8G1wF");function i(e){console.log(e);const s=e.map((({id:e,name:s,overview:n,vote_average:t,poster_path:r,first_air_date:a})=>`<li class="series-item" data-id=${e}>\n            <img src="https://image.tmdb.org/t/p/w500${r}" class="series-poster" alt="series poster">\n            <div class="series-info">\n            <h2 class="series-title">${s}</h2>\n            <p class="series-description">${n}</p>\n            <p class="series-premiere">Premiere date: ${a}</p>\n            <span class="series-rate">Rating: ${t.toFixed(2)}</span>\n            </div>\n          </li>`)).join("");a.seriesList.insertAdjacentHTML("beforeend",s)}o=t("8G1wF");function c(e){const s=e.map((({id:e,genre_ids:s,name:n,overview:t,first_air_date:r,vote_average:a,vote_count:i,poster_path:c})=>{const l=function(e){return e.map((e=>{const s=o.genres.find((s=>s.id===e));return s?s.name:""})).filter(Boolean).join(", ")}(s);return`<li class="series-item" data-id=${e}>\n            <img src="https://image.tmdb.org/t/p/w500${c}" class="movie-poster" alt="movie poster">\n            <div class="series-info">\n            <h2 class="series-title">${n}</h2>\n            <p class="series-description">${t}</p>\n              <p class="series-genres">Genres: ${l||"No data"}</p>\n                <p class="series-premiere">Premiere date: ${r}</p>\n                 <span class="series-rate">Rating: ${a.toFixed(2)}</span> \n                 <span class="series-rate-count">Total votes: ${i}</span> \n          </div>     \n          </li>`})).join("");a.seriesList.insertAdjacentHTML("beforeend",s)}r=t("2shzp");async function l(e,s,n,t){try{const a=await r.default.get(`${s}?api_key=${e}&query=${n}&page=${t}`);return console.log(a),a}catch(e){console.log("Error fetching trending series:",e.message)}}r=t("2shzp");let d=!1;async function p(e,s,n){try{d=!0;const t=await r.default.get(`${s}/${n}?api_key=${e}`);console.log(t);return t.data}catch(e){console.log("Error fetching series:",e.message)}finally{d=!1}}async function u(e){const{id:s,created_by:n,in_production:t,languages:r,genres:o,origin_country:i,name:c,first_air_date:l,number_of_seasons:d,number_of_episodes:p,vote_average:u,vote_count:v,overview:b,poster_path:h}=e,y=o.map((e=>e.name)).join(", "),_=r.map((e=>e)).join(", ");let S=`<div class="series-item-detailed" id=${s}>\n       <img src="https://image.tmdb.org/t/p/w500${h}" class="movie-poster" alt="movie poster">\n        <h2 class="modal-title">${c}</h2>\n        <p class="modal-genres"><span class="modal-bold">Genres:</span> ${y}</p>\n       \n        <p class="orig-country"><span class="modal-bold">Origin country:</span> ${i}</p>\n        <p class="in-production"><span class="modal-bold">Still in production:</span> ${t}</p>\n      \n\n     \n        <p class="first-air-date"><span class="modal-bold">First air date:</span> ${l}</p>\n        <p class="modal-series-description"><span class="modal-bold">Desription:</span> ${b}</p>\n      \n        <p class="created-by"><span class="modal-bold">Creators:</span> ${n.map((e=>e.name)).join(", ")}</p>\n        <p class="languages"><span class="modal-bold">Spoken languages:</span> ${_}</p>\n        <div class="series-length">\n        <span class="seasons"><span class="modal-bold">Number of seasons:</span> ${d}</span>\n        <span class="episodes"><span class="modal-bold">Number of episodes:</span> ${p}</span>\n        </div>\n\n        <div class="series-modal-rate">\n         <span class="rating"><span class="modal-bold">Rating:</span> ${u}</span>\n         <span class="vote-count"><span class="modal-bold">Total votes:</span> ${v}</span>\n         </div>\n   \n      </div>`;a.backdrop.classList.remove("is-hidden"),a.modalWrapper.innerHTML=S,a.backdrop.addEventListener("click",f),window.addEventListener("keydown",g),a.closeBtn.addEventListener("click",m)}function m(){a.modalWrapper.innerHTML="",a.backdrop.classList.add("is-hidden"),a.backdrop.removeEventListener("click",m),a.closeBtn.removeEventListener("click",m),window.removeEventListener("keydown",g)}function g(e){"Escape"===e.code&&m()}function f(e){e.currentTarget===e.target&&m()}var v=t("kj8Rd");let b="",h=1,y=1,_=!1;async function S(e,s,n){try{_=!0;const t=await r.default.get(`${s}?api_key=${e}&page=${n}`);console.log(t),t.data.total_pages===y&&((0,v.notifyEndResults)(),$.unobserve(a.targetObserverSeries));return t.data.results}catch(e){console.log("Error fetching trending series:",e.message)}finally{_=!1}}let $=new IntersectionObserver((function(e,s){console.log(e),e.forEach((e=>{e.isIntersecting&&(h+=1,S("86bcaf318e232372b2e8e2623c959f88",o.URLS.BASE_SERIES_URL,h).then((e=>i(e))))}))}),{root:null,rootMargin:"400px",threshold:1});S("86bcaf318e232372b2e8e2623c959f88",o.URLS.BASE_SERIES_URL,h).then((e=>i(e))).then((()=>$.observe(a.targetObserverSeries))).catch((e=>console.log(e))),a.form.addEventListener("submit",(async function(e){e.preventDefault(),$.unobserve(a.targetObserverSeries),E.unobserve(a.targetObserverSearch),a.backdrop.classList.add("is-hidden"),b=a.form.searchQuery.value.trim(),y=1;try{a.seriesList.innerHTML="",a.endResultsInfo.classList.add("visually-hidden");const e=await l("86bcaf318e232372b2e8e2623c959f88",o.URLS.SEARCH_SERIES_URL,b,y),{results:s,total_results:n}=e.data;s&&s.length>0?(c(s),E.observe(a.targetObserverSearch)):(a.endResultsInfo.classList.remove("visually-hidden"),(0,v.notifyNoResults)()),n&&n<=20&&e.data.total_pages===y&&((0,v.notifyEndResults)(),E.unobserve(a.targetObserverSearch))}catch(e){console.log("Error fetching series:",e.message)}finally{a.form.searchQuery.value=""}}));let E=new IntersectionObserver((function(e){e.forEach((e=>{e.isIntersecting&&(y+=1,l("86bcaf318e232372b2e8e2623c959f88",o.URLS.SEARCH_SERIES_URL,b,y).then((e=>{const{results:s}=e.data;c(s)})))}))}),{root:null,rootMargin:"400px",threshold:1});a.seriesContainer.addEventListener("click",(async function(e){e.preventDefault();const s=e.target.closest(".series-item");if(s){const e=s.getAttribute("data-id");u(await p("86bcaf318e232372b2e8e2623c959f88",o.URLS.SINGLE_SERIES_URL,e))}}));
//# sourceMappingURL=trendingseries.9a0b1f15.js.map
