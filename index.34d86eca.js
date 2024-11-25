var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in s)return s[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return s[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,s){n[e]=s},e.parcelRequired7c6=t);const a={form:document.querySelector(".search-form"),moviesContainer:document.querySelector(".data-container"),moviesList:document.querySelector(".movies-list"),targetObserverMovies:document.querySelector(".js-guard-movies"),targetObserverSearch:document.querySelector(".js-guard-search"),backdrop:document.querySelector(".backdrop"),modalWrapper:document.querySelector(".movie-item-wrapper"),endResultsInfo:document.querySelector(".no-results-info-movies"),closeBtn:document.querySelector(".modal-close-btn")};var o=t("2shzp"),r=t("8G1wF");r=t("8G1wF");function i(e,s){return e.map((e=>{const n=s.find((s=>s.id===e));return n?n.name:""})).filter(Boolean).join(", ")}function l(e){const s=e.map((({id:e,genre_ids:s,original_title:n,overview:t,vote_average:a,poster_path:o})=>{const l=i(s,r.genres);return`<li class="movies-item" data-id=${e}>\n            <img src="${r.URLS.POSTER_URL}${o}" class="movie-poster" alt="movie poster">\n            <div class="movie-info">\n            <h2 class="movie-title">${n}</h2>\n            <p class="movie-description">${t}</p>\n            <p class="movie-genres">Genres: ${l||"Sorry, no genres available"}</p>\n            <span class="movie-rate">Rating: ${a.toFixed(2)}</span> \n          </div>\n     \n          </li>`})).join("");a.moviesList.insertAdjacentHTML("beforeend",s)}r=t("8G1wF");function c(e){const s=e.map((({id:e,genre_ids:s,original_title:n,overview:t,release_date:a,vote_average:o,vote_count:l,poster_path:c})=>{const d=i(s,r.genres);return`<li class="movies-item" data-id=${e}>\n            <img src="${r.URLS.POSTER_URL}${c}" class="movie-poster" alt="movie poster">\n            <div class="movie-info">\n            <h2 class="movie-title">${n}</h2>\n            <p class="movie-description">${t}</p>\n              <p class="movie-genres">Genres: ${d||"Sorry, no genres available"}</p>\n                <p class="movie-genres">Release date: ${a}</p>\n            <span class="movie-rate">Rating: ${o.toFixed(2)}</span> \n                 <span class="movie-rate-count">Total votes: ${l}</span> \n          </div>     \n          </li>`})).join("");a.moviesList.insertAdjacentHTML("beforeend",s)}o=t("2shzp");async function d(e,s,n,t){try{return await o.default.get(`${s}?api_key=${e}&query=${n}&page=${t}`)}catch(e){console.log("Error fetching trending movies:",e.message)}}o=t("2shzp");let v=!1;async function p(e,s,n){try{v=!0;const t=await o.default.get(`${s}/${n}?api_key=${e}`);console.log(t);return t.data}catch(e){console.log("Error fetching a movie:",e.message)}finally{v=!1}}r=t("8G1wF");var u,m=t("6Ipdt"),g=t("kj8Rd");let f=null!==(u=JSON.parse(localStorage.getItem("favorite_movies")))&&void 0!==u?u:[];async function b(e){const{id:s,budget:n,genres:t,origin_country:o,title:i,original_title:l,release_date:c,revenue:d,runtime:v,spoken_languages:p,vote_average:u,vote_count:b,overview:h,poster_path:_}=e,L=t.map((e=>e.name)).join(", "),$=p.map((e=>e.english_name)).join(", ");let S=`<div class="movie-item-detailed" id=${s}>\n        <img src="${r.URLS.POSTER_URL}${_}" class="movie-poster" alt="movie poster">\n        <h2 class="modal-title">${i}</h2>\n        <h3 class="modal-original-title"><span class="modal-bold">Original title</span>: ${l}</h3>\n        <p class="modal-genres"><span class="modal-bold">Genres:</span> ${L}</p>\n        <p class="orig-country"><span class="modal-bold">Country of origin:</span> ${o}</p>\n        <p class="modal-release-date"><span class="modal-bold">Release date:</span> ${c}</p>\n        <p class="modal-movie-description"><span class="modal-bold">Desription:</span> ${h}</p>\n        <p class="languages"><span class="modal-bold">Spoken languages:</span> ${$}</p>\n        <span class="budget"><span class="modal-bold">Budget:</span> $${(n/1e6).toFixed()} mln</span>\n        <span class="revenue"><span class="modal-bold">Revenue:</span> $${(d/1e6).toFixed()} mln</span>\n        <p class="runtime"><span class="modal-bold">Time:</span> ${v} minutes</p>\n\n         <div class="movies-modal-rate">\n        <span class="rating"><span class="modal-bold">Rating:</span> ${u}</span>\n        <span class="vote-count"><span class="modal-bold">Total votes:</span> ${b}</span>\n        </div>\n\n        <button type="button" class="movies-fav">Add to favorites</button>\n      </div>`;a.backdrop.classList.remove("is-hidden"),a.modalWrapper.innerHTML=S,a.backdrop.addEventListener("click",(e=>(0,m.onBackdropClick)(e,y))),window.addEventListener("keydown",(e=>(0,m.onEscKeyPress)(e,y))),a.closeBtn.addEventListener("click",y);document.querySelector(".movies-fav").addEventListener("click",(()=>function(e){const s=f.some((s=>s.id===e.id)),n={id:e.id,title:e.title,origTitle:e.original_title,budget:e.budget,languages:e.spoken_languages,genres:e.genres,originCountry:e.origin_country,releaseDate:e.release_date,posterPath:e.poster_path,revenue:e.revenue,runtime:e.runtime,overview:e.overview,voteAverage:e.vote_average,voteCount:e.vote_count};s?(0,g.notifyIsInFavorites)(e.title):(f.push(n),localStorage.setItem("favorite_movies",JSON.stringify(f)),(0,g.notifyAddSuccess)(e.title))}(e)))}function y(){a.modalWrapper.innerHTML="",a.backdrop.classList.add("is-hidden"),a.backdrop.removeEventListener("click",y),a.closeBtn.removeEventListener("click",y),window.removeEventListener("keydown",m.onEscKeyPress)}g=t("kj8Rd");let h="",_=1,L=1;async function $(e,s,n){try{isLoading=!0;const t=await o.default.get(`${s}?api_key=${e}&page=${n}`);t.data.total_pages===L&&((0,g.notifyEndResults)(),S.unobserve(a.targetObserverMovies));return t.data.results}catch(e){console.log("Error fetching trending movies:",e.message)}finally{isLoading=!1}}let S=new IntersectionObserver((function(e,s){console.log(e),e.forEach((e=>{e.isIntersecting&&(_+=1,$("86bcaf318e232372b2e8e2623c959f88",r.URLS.BASE_MOVIES_URL,_).then((e=>l(e))))}))}),r.trendingObserverOptions);$("86bcaf318e232372b2e8e2623c959f88",r.URLS.BASE_MOVIES_URL,_).then((e=>l(e))).then((()=>S.observe(a.targetObserverMovies))).catch((e=>console.log(e))),a.form.addEventListener("submit",(async function(e){e.preventDefault(),S.unobserve(a.targetObserverMovies),R.unobserve(a.targetObserverSearch),a.backdrop.classList.add("is-hidden"),h=a.form.searchQuery.value.trim(),L=1;try{a.moviesList.innerHTML="",a.endResultsInfo.classList.add("visually-hidden");const e=await d("86bcaf318e232372b2e8e2623c959f88",r.URLS.SEARCH_MOVIE_URL,h,L),{results:s,total_results:n}=e.data;s&&s.length>0?(c(s),R.observe(a.targetObserverSearch)):(a.endResultsInfo.classList.remove("visually-hidden"),(0,g.notifyNoResults)()),n&&n<=20&&e.data.total_pages===L&&((0,g.notifyEndResults)(),R.unobserve(a.targetObserverSearch))}catch(e){console.log("Error fetching movies:",e.message)}finally{a.form.searchQuery.value=""}}));let R=new IntersectionObserver((function(e){e.forEach((e=>{e.isIntersecting&&(L+=1,d("86bcaf318e232372b2e8e2623c959f88",r.URLS.SEARCH_MOVIE_URL,h,L).then((e=>{const{results:s}=e.data;c(s)})))}))}),r.searchObserverOptions);a.moviesContainer.addEventListener("click",(async function(e){e.preventDefault();const s=e.target.closest(".movies-item");if(s){const e=s.getAttribute("data-id");b(await p("86bcaf318e232372b2e8e2623c959f88",r.URLS.SINGLE_MOVIE_URL,e))}}));
//# sourceMappingURL=index.34d86eca.js.map