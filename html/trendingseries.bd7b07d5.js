var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in s)return s[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return s[e]=a,t.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,s){n[e]=s},e.parcelRequired7c6=t);var a=t("2shzp");const r={form:document.querySelector(".search-form-series"),seriesContainer:document.querySelector(".series-data-container"),seriesList:document.querySelector(".series-list"),targetObserverSeries:document.querySelector(".js-guard-series"),targetObserverSearch:document.querySelector(".js-guard-search"),backdrop:document.querySelector(".series-backdrop"),modalWrapper:document.querySelector(".series-item-wrapper"),endResultsInfo:document.querySelector(".no-results-info-series"),closeBtn:document.querySelector(".modal-close-btn")},i={BASE_MOVIES_URL:"https://api.themoviedb.org/3/trending/movie/week",BASE_SERIES_URL:"https://api.themoviedb.org/3/trending/tv/week",BASE_PEOPLE_URL:"https://api.themoviedb.org/3/trending/person/week",SEARCH_MOVIE_URL:"https://api.themoviedb.org/3/search/movie",SEARCH_SERIES_URL:"https://api.themoviedb.org/3/search/tv",SINGLE_MOVIE_URL:"https://api.themoviedb.org/3/movie",SINGLE_SERIES_URL:"https://api.themoviedb.org/3/tv",SEARCH_PERSON_URL:"https://api.themoviedb.org/3/search/person",SINGLE_PERSON_URL:"https://api.themoviedb.org/3/person"},o=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}];function c(e){console.log(e);const s=e.map((({id:e,name:s,overview:n,vote_average:t,poster_path:a,first_air_date:r})=>`<li class="series-item" data-id=${e}>\n            <img src="https://image.tmdb.org/t/p/w500${a}" class="series-poster" alt="series poster">\n            <div class="series-info">\n            <h2 class="series-title">${s}</h2>\n            <p class="series-description">${n}</p>\n            <p class="series-premiere">Premiere date: ${r}</p>\n            <span class="series-rate">Rating: ${t.toFixed(2)}</span>\n            </div>\n          </li>`)).join("");r.seriesList.insertAdjacentHTML("beforeend",s)}function l(e){const s=e.map((({id:e,genre_ids:s,name:n,overview:t,first_air_date:a,vote_average:r,vote_count:i,poster_path:c})=>{const l=function(e){return e.map((e=>{const s=o.find((s=>s.id===e));return s?s.name:""})).filter(Boolean).join(", ")}(s);return`<li class="series-item" data-id=${e}>\n            <img src="https://image.tmdb.org/t/p/w500${c}" class="series-poster" alt="series poster">\n            <div class="series-info">\n            <h2 class="series-title">${n}</h2>\n            <p class="series-description">${t}</p>\n              <p class="series-genres">Genres: ${l||"No data"}</p>\n                <p class="series-premiere">Premiere date: ${a}</p>\n                 <span class="series-rate">Rating: ${r.toFixed(2)}</span> \n                 <span class="series-rate-count">Total votes: ${i}</span> \n          </div>     \n          </li>`})).join("");r.seriesList.insertAdjacentHTML("beforeend",s)}a=t("2shzp");async function d(e,s,n,t){try{const r=await a.default.get(`${s}?api_key=${e}&query=${n}&page=${t}`);return console.log(r),r}catch(e){console.log("Error fetching trending series:",e.message)}}a=t("2shzp");let p=!1;async function m(e,s,n){try{p=!0;const t=await a.default.get(`${s}/${n}?api_key=${e}`);console.log(t);return t.data}catch(e){console.log("Error fetching series:",e.message)}finally{p=!1}}async function u(e){const{id:s,created_by:n,in_production:t,languages:a,genres:i,origin_country:o,name:c,first_air_date:l,number_of_seasons:d,number_of_episodes:p,vote_average:m,vote_count:u,overview:h,poster_path:b}=e,_=i.map((e=>e.name)).join(", "),E=a.map((e=>e)).join(", ");let S=`<div class="series-item-detailed" id=${s}>\n       <img src="https://image.tmdb.org/t/p/w500${b}" class="series-poster" alt="series poster">\n        <h2 class="modal-title">${c}</h2>\n        <p class="modal-genres"><span class="modal-bold">Genres:</span> ${_}</p>\n       \n        <p class="orig-country"><span class="modal-bold">Origin country:</span> ${o}</p>\n        <p class="in-production"><span class="modal-bold">Still in production:</span> ${t}</p>\n      \n\n     \n        <p class="first-air-date"><span class="modal-bold">First air date:</span> ${l}</p>\n        <p class="modal-series-description"><span class="modal-bold">Desription:</span> ${h}</p>\n      \n        <p class="created-by"><span class="modal-bold">Creators:</span> ${n.map((e=>e.name)).join(", ")}</p>\n        <p class="languages"><span class="modal-bold">Spoken languages:</span> ${E}</p>\n        <div class="series-length">\n        <span class="seasons"><span class="modal-bold">Number of seasons:</span> ${d}</span>\n        <span class="episodes"><span class="modal-bold">Number of episodes:</span> ${p}</span>\n        </div>\n\n        <div class="series-modal-rate">\n         <span class="rating"><span class="modal-bold">Rating:</span> ${m}</span>\n         <span class="vote-count"><span class="modal-bold">Total votes:</span> ${u}</span>\n         </div>\n   \n      </div>`;r.backdrop.classList.remove("is-hidden"),r.modalWrapper.innerHTML=S,r.backdrop.addEventListener("click",f),window.addEventListener("keydown",v),r.closeBtn.addEventListener("click",g)}function g(){r.modalWrapper.innerHTML="",r.backdrop.classList.add("is-hidden"),r.backdrop.removeEventListener("click",g),r.closeBtn.removeEventListener("click",g),window.removeEventListener("keydown",v)}function v(e){"Escape"===e.code&&g()}function f(e){e.currentTarget===e.target&&g()}var h=t("kj8Rd");let b="",_=1,E=1,S=!1;async function y(e,s,n){try{S=!0;const t=await a.default.get(`${s}?api_key=${e}&page=${n}`);console.log(t),t.data.total_pages===E&&((0,h.notifyEndResults)(),L.unobserve(r.targetObserverSeries));return t.data.results}catch(e){console.log("Error fetching trending series:",e.message)}finally{S=!1}}let L=new IntersectionObserver((function(e,s){console.log(e),e.forEach((e=>{e.isIntersecting&&(_+=1,y("86bcaf318e232372b2e8e2623c959f88",i.BASE_SERIES_URL,_).then((e=>c(e))))}))}),{root:null,rootMargin:"400px",threshold:1});y("86bcaf318e232372b2e8e2623c959f88",i.BASE_SERIES_URL,_).then((e=>c(e))).then((()=>L.observe(r.targetObserverSeries))).catch((e=>console.log(e))),r.form.addEventListener("submit",(async function(e){e.preventDefault(),L.unobserve(r.targetObserverSeries),R.unobserve(r.targetObserverSearch),r.backdrop.classList.add("is-hidden"),b=r.form.searchQuery.value.trim(),E=1;try{r.seriesList.innerHTML="",r.endResultsInfo.classList.add("visually-hidden");const e=await d("86bcaf318e232372b2e8e2623c959f88",i.SEARCH_SERIES_URL,b,E),{results:s,total_results:n}=e.data;s&&s.length>0?(l(s),R.observe(r.targetObserverSearch)):(r.endResultsInfo.classList.remove("visually-hidden"),(0,h.notifyNoResults)()),n&&n<=20&&e.data.total_pages===E&&((0,h.notifyEndResults)(),R.unobserve(r.targetObserverSearch))}catch(e){console.log("Error fetching series:",e.message)}finally{r.form.searchQuery.value=""}}));let R=new IntersectionObserver((function(e){e.forEach((e=>{e.isIntersecting&&(E+=1,d("86bcaf318e232372b2e8e2623c959f88",i.SEARCH_SERIES_URL,b,E).then((e=>{const{results:s}=e.data;l(s)})))}))}),{root:null,rootMargin:"400px",threshold:1});r.seriesContainer.addEventListener("click",(async function(e){e.preventDefault();const s=e.target.closest(".series-item");if(s){const e=s.getAttribute("data-id");u(await m("86bcaf318e232372b2e8e2623c959f88",i.SINGLE_SERIES_URL,e))}}));
//# sourceMappingURL=trendingseries.bd7b07d5.js.map
