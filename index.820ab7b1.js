var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in s)return s[e].exports;if(e in t){var n=t[e];delete t[e];var a={id:e,exports:{}};return s[e]=a,n.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,s){t[e]=s},e.parcelRequired7c6=n);const a={form:document.querySelector(".search-form"),dataContainer:document.querySelector(".data-container"),list:document.querySelector(".movies-list"),targetObserver:document.querySelector(".js-guard-movies"),targetObserverSearch:document.querySelector(".js-guard-search"),backdrop:document.querySelector(".backdrop"),modalWrapper:document.querySelector(".movie-item-wrapper"),endResultsInfo:document.querySelector(".no-results-info-movies"),closeBtn:document.querySelector(".modal-close-btn")};var o=n("8G1wF");o=n("8G1wF");function r(e,s){return e.map((e=>{const t=s.find((s=>s.id===e));return t?t.name:""})).filter(Boolean).join(", ")}function i(e){const s=e.map((({id:e,genre_ids:s,original_title:t,overview:n,vote_average:a,poster_path:i})=>{const l=r(s,o.genres);return`<li class="movies-item" data-id=${e}>\n            <img src="${o.URLS.POSTER_URL}${i}" class="movie-poster" alt="movie poster">\n            <div class="movie-info">\n            <h2 class="movie-title">${t}</h2>\n            <p class="movie-description">${n}</p>\n            <p class="movie-genres">Genres: ${l||"Sorry, no genres available"}</p>\n            <span class="movie-rate">Rating: ${a.toFixed(2)}</span> \n          </div>\n     \n          </li>`})).join("");a.list.insertAdjacentHTML("beforeend",s)}o=n("8G1wF");function l(e){const s=e.map((({id:e,genre_ids:s,original_title:t,overview:n,release_date:a,vote_average:i,vote_count:l,poster_path:c})=>{const d=r(s,o.genres);return`<li class="movies-item" data-id=${e}>\n            <img src="${o.URLS.POSTER_URL}${c}" class="movie-poster" alt="movie poster">\n            <div class="movie-info">\n            <h2 class="movie-title">${t}</h2>\n            <p class="movie-description">${n}</p>\n              <p class="movie-genres">Genres: ${d||"Sorry, no genres available"}</p>\n                <p class="movie-genres">Release date: ${a}</p>\n            <span class="movie-rate">Rating: ${i.toFixed(2)}</span> \n                 <span class="movie-rate-count">Total votes: ${l}</span> \n          </div>     \n          </li>`})).join("");a.list.insertAdjacentHTML("beforeend",s)}var c=n("2shzp");async function d(e,s,t,n){try{return await c.default.get(`${s}?api_key=${e}&query=${t}&page=${n}`)}catch(e){console.log("Error fetching trending movies:",e.message)}}c=n("2shzp");async function v(e,s,t){try{const n=await c.default.get(`${s}/${t}?api_key=${e}`);return n.data}catch(e){console.log("Error fetching a movie:",e.message)}}o=n("8G1wF");var p,u=n("6Ipdt"),m=n("kj8Rd");let g=null!==(p=JSON.parse(localStorage.getItem("favorite_movies")))&&void 0!==p?p:[];async function f(e){const{id:s,budget:t,genres:n,origin_country:r,title:i,original_title:l,release_date:c,revenue:d,runtime:v,spoken_languages:p,vote_average:f,vote_count:h,overview:y,poster_path:_}=e,$=n.map((e=>e.name)).join(", "),S=p.map((e=>e.english_name)).join(", ");let L=`<div class="movie-item-detailed" id=${s}>\n        <img src="${o.URLS.POSTER_URL}${_}" class="movie-poster" alt="movie poster">\n        <h2 class="modal-title">${i}</h2>\n        <h3 class="modal-original-title"><span class="modal-bold">Original title</span>: ${l}</h3>\n        <p class="modal-genres"><span class="modal-bold">Genres:</span> ${$}</p>\n        <p class="orig-country"><span class="modal-bold">Country of origin:</span> ${r}</p>\n        <p class="modal-release-date"><span class="modal-bold">Release date:</span> ${c}</p>\n        <p class="modal-movie-description"><span class="modal-bold">Desription:</span> ${y}</p>\n        <p class="languages"><span class="modal-bold">Spoken languages:</span> ${S}</p>\n        <span class="budget"><span class="modal-bold">Budget:</span> $${(t/1e6).toFixed()} mln</span>\n        <span class="revenue"><span class="modal-bold">Revenue:</span> $${(d/1e6).toFixed()} mln</span>\n        <p class="runtime"><span class="modal-bold">Time:</span> ${v} minutes</p>\n\n         <div class="movies-modal-rate">\n        <span class="rating"><span class="modal-bold">Rating:</span> ${f}</span>\n        <span class="vote-count"><span class="modal-bold">Total votes:</span> ${h}</span>\n        </div>\n\n        <button type="button" class="movies-fav">Add to favorites</button>\n      </div>`;a.backdrop.classList.remove("is-hidden"),a.modalWrapper.innerHTML=L,a.backdrop.addEventListener("click",(e=>(0,u.onBackdropClick)(e,b))),window.addEventListener("keydown",(e=>(0,u.onEscKeyPress)(e,b))),a.closeBtn.addEventListener("click",b);document.querySelector(".movies-fav").addEventListener("click",(()=>function(e){const s=g.some((s=>s.id===e.id)),t={id:e.id,title:e.title,origTitle:e.original_title,budget:e.budget,languages:e.spoken_languages,genres:e.genres,originCountry:e.origin_country,releaseDate:e.release_date,posterPath:e.poster_path,revenue:e.revenue,runtime:e.runtime,overview:e.overview,voteAverage:e.vote_average,voteCount:e.vote_count};s?(0,m.notifyIsInFavorites)(e.title):(g.push(t),localStorage.setItem("favorite_movies",JSON.stringify(g)),(0,m.notifyAddSuccess)(e.title))}(e)))}function b(){a.modalWrapper.innerHTML="",a.backdrop.classList.add("is-hidden"),a.backdrop.removeEventListener("click",b),a.closeBtn.removeEventListener("click",b),window.removeEventListener("keydown",u.onEscKeyPress)}m=n("kj8Rd");var h=n("dB5GG"),y=n("hlWSz");let _="",$=1,S=1;async function L(e){try{const s=await(0,h.fetchData)(o.URLS.BASE_MOVIES_URL,{api_key:"86bcaf318e232372b2e8e2623c959f88",page:e});s.total_pages===S&&((0,m.notifyEndResults)(),R.unobserve(a.targetObserver));return s.results}catch(e){console.log("Error fetching trending movies:",e.message)}}const R=(0,y.setNewObserver)((function(e){e.forEach((e=>{e.isIntersecting&&($+=1,L($).then((e=>i(e))))}))}),o.trendingObserverOptions);L($).then((e=>i(e))).then((()=>R.observe(a.targetObserver))).catch((e=>console.log(e))),a.form.addEventListener("submit",(async function(e){e.preventDefault(),a.backdrop.classList.add("is-hidden"),_=a.form.searchQuery.value.trim(),R.unobserve(a.targetObserver),E.unobserve(a.targetObserverSearch),a.list.innerHTML="",a.endResultsInfo.classList.add("visually-hidden"),S=1;try{const e=await d("86bcaf318e232372b2e8e2623c959f88",o.URLS.SEARCH_MOVIE_URL,_,S),{results:s,total_results:t}=e.data;s&&s.length>0?(l(s),E.observe(a.targetObserverSearch)):(a.endResultsInfo.classList.remove("visually-hidden"),(0,m.notifyNoResults)()),t&&t<=20&&e.data.total_pages===S&&((0,m.notifyEndResults)(),E.unobserve(a.targetObserverSearch))}catch(e){console.log("Error fetching movies:",e.message)}finally{a.form.searchQuery.value=""}}));const E=(0,y.setNewObserver)((function(e){e.forEach((e=>{e.isIntersecting&&(S+=1,d("86bcaf318e232372b2e8e2623c959f88",o.URLS.SEARCH_MOVIE_URL,_,S).then((e=>{const{results:s}=e.data;l(s)})))}))}),o.searchObserverOptions);a.dataContainer.addEventListener("click",(async function(e){e.preventDefault();const s=e.target.closest(".movies-item");if(s){const e=s.getAttribute("data-id");f(await v("86bcaf318e232372b2e8e2623c959f88",o.URLS.SINGLE_MOVIE_URL,e))}}));
//# sourceMappingURL=index.820ab7b1.js.map