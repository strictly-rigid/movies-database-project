!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){r[e]=n},n.parcelRequired7c6=a);var o=a("bpxeT"),s=a("2TvXO"),i={form:document.querySelector(".search-form"),moviesContainer:document.querySelector(".data-container"),moviesList:document.querySelector(".movies-list"),targetObserverMovies:document.querySelector(".js-guard-movies"),targetObserverSearch:document.querySelector(".js-guard-search"),backdrop:document.querySelector(".backdrop"),modalWrapper:document.querySelector(".movie-item-wrapper"),endResultsInfo:document.querySelector(".no-results-info-movies"),closeBtn:document.querySelector(".modal-close-btn")},c=a("dIxxU"),l=a("4s6iC");l=a("4s6iC");function u(e){var n=e.map((function(e){var n=e.id,t=e.genre_ids,r=e.original_title,a=e.overview,o=e.vote_average,s=e.poster_path,i=function(e){return e.map((function(e){var n=l.genres.find((function(n){return n.id===e}));return n?n.name:""})).filter(Boolean).join(", ")}(t);return'<li class="movies-item" data-id='.concat(n,'>\n            <img src="').concat("https://image.tmdb.org/t/p/w500").concat(s,'" class="movie-poster" alt="movie poster">\n            <div class="movie-info">\n            <h2 class="movie-title">').concat(r,'</h2>\n            <p class="movie-description">').concat(a,'</p>\n            <p class="movie-genres">Genres: ').concat(i||"Sorry, no genres available",'</p>\n            <span class="movie-rate">Rating: ').concat(o.toFixed(2),"</span> \n          </div>\n     \n          </li>")})).join("");i.moviesList.insertAdjacentHTML("beforeend",n)}l=a("4s6iC");function d(e){var n=e.map((function(e){var n=e.id,t=e.genre_ids,r=e.original_title,a=e.overview,o=e.release_date,s=e.vote_average,i=e.vote_count,c=e.poster_path,u=function(e){return e.map((function(e){var n=l.genres.find((function(n){return n.id===e}));return n?n.name:""})).filter(Boolean).join(", ")}(t);return'<li class="movies-item" data-id='.concat(n,'>\n            <img src="').concat("https://image.tmdb.org/t/p/w500").concat(c,'" class="movie-poster" alt="movie poster">\n            <div class="movie-info">\n            <h2 class="movie-title">').concat(r,'</h2>\n            <p class="movie-description">').concat(a,'</p>\n              <p class="movie-genres">Genres: ').concat(u||"Sorry, no genres available",'</p>\n                <p class="movie-genres">Release date: ').concat(o,'</p>\n            <span class="movie-rate">Rating: ').concat(s.toFixed(2),'</span> \n                 <span class="movie-rate-count">Total votes: ').concat(i,"</span> \n          </div>     \n          </li>")})).join("");i.moviesList.insertAdjacentHTML("beforeend",n)}o=a("bpxeT"),s=a("2TvXO"),c=a("dIxxU");function p(e,n,t,r){return v.apply(this,arguments)}function v(){return(v=e(o)(e(s).mark((function n(t,r,a,o){var i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.default.get("".concat(r,"?api_key=").concat(t,"&query=").concat(a,"&page=").concat(o));case 3:return i=e.sent,e.abrupt("return",i);case 7:e.prev=7,e.t0=e.catch(0),console.log("Error fetching trending movies:",e.t0.message);case 10:case"end":return e.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}o=a("bpxeT"),s=a("2TvXO"),c=a("dIxxU");function m(e,n,t){return f.apply(this,arguments)}function f(){return(f=e(o)(e(s).mark((function n(t,r,a){var o,i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,!0,e.next=4,c.default.get("".concat(r,"/").concat(a,"?api_key=").concat(t));case 4:return o=e.sent,console.log(o),i=o.data,e.abrupt("return",i);case 10:e.prev=10,e.t0=e.catch(0),console.log("Error fetching a movie:",e.t0.message);case 13:return e.prev=13,!1,e.finish(13);case 16:case"end":return e.stop()}}),n,null,[[0,10,13,16]])})))).apply(this,arguments)}o=a("bpxeT"),s=a("2TvXO");var g,h=a("lG111"),b="https://image.tmdb.org/t/p/w500",y=null!==(g=JSON.parse(localStorage.getItem("favorite_movies")))&&void 0!==g?g:[];function _(e){return L.apply(this,arguments)}function L(){return(L=e(o)(e(s).mark((function n(t){var r,a,o,c,l,u,d,p,v,m,f,g,h,y,_,L,k;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.id,a=t.budget,o=t.genres,c=t.origin_country,l=t.title,u=t.original_title,d=t.release_date,p=t.revenue,v=t.runtime,m=t.spoken_languages,f=t.vote_average,g=t.vote_count,h=t.overview,y=t.poster_path,_=o.map((function(e){return e.name})).join(", "),L=m.map((function(e){return e.english_name})).join(", "),k='<div class="movie-item-detailed" id='.concat(r,'>\n        <img src="').concat(b).concat(y,'" class="movie-poster" alt="movie poster">\n        <h2 class="modal-title">').concat(l,'</h2>\n        <h3 class="modal-original-title"><span class="modal-bold">Original title</span>: ').concat(u,'</h3>\n        <p class="modal-genres"><span class="modal-bold">Genres:</span> ').concat(_,'</p>\n        <p class="orig-country"><span class="modal-bold">Country of origin:</span> ').concat(c,'</p>\n        <p class="modal-release-date"><span class="modal-bold">Release date:</span> ').concat(d,'</p>\n        <p class="modal-movie-description"><span class="modal-bold">Desription:</span> ').concat(h,'</p>\n        <p class="languages"><span class="modal-bold">Spoken languages:</span> ').concat(L,'</p>\n        <span class="budget"><span class="modal-bold">Budget:</span> $').concat((a/1e6).toFixed(),' mln</span>\n        <span class="revenue"><span class="modal-bold">Revenue:</span> $').concat((p/1e6).toFixed(),' mln</span>\n        <p class="runtime"><span class="modal-bold">Time:</span> ').concat(v,' minutes</p>\n\n         <div class="movies-modal-rate">\n        <span class="rating"><span class="modal-bold">Rating:</span> ').concat(f,'</span>\n        <span class="vote-count"><span class="modal-bold">Total votes:</span> ').concat(g,'</span>\n        </div>\n\n        <button type="button" class="movies-fav">Add to favorites</button>\n      </div>'),i.backdrop.classList.remove("is-hidden"),i.modalWrapper.innerHTML=k,i.backdrop.addEventListener("click",S),window.addEventListener("keydown",x),i.closeBtn.addEventListener("click",w),document.querySelector(".movies-fav").addEventListener("click",(function(){return E(t)}));case 11:case"end":return e.stop()}}),n)})))).apply(this,arguments)}function w(){i.modalWrapper.innerHTML="",i.backdrop.classList.add("is-hidden"),i.backdrop.removeEventListener("click",w),i.closeBtn.removeEventListener("click",w),window.removeEventListener("keydown",x)}function x(e){"Escape"===e.code&&w()}function S(e){e.currentTarget===e.target&&w()}function E(e){var n=y.some((function(n){return n.id===e.id})),t={id:e.id,title:e.title,origTitle:e.original_title,budget:e.budget,languages:e.spoken_languages,genres:e.genres,originCountry:e.origin_country,releaseDate:e.release_date,posterPath:e.poster_path,revenue:e.revenue,runtime:e.runtime,overview:e.overview,voteAverage:e.vote_average,voteCount:e.vote_count};n?(0,h.notifyIsInFavorites)(e.title):(y.push(t),localStorage.setItem("favorite_movies",JSON.stringify(y)),(0,h.notifyAddSuccess)(e.title))}h=a("lG111");var k="86bcaf318e232372b2e8e2623c959f88",R="",O=1,T=1;function I(e,n,t){return M.apply(this,arguments)}function M(){return(M=e(o)(e(s).mark((function n(t,r,a){var o,l;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,isLoading=!0,e.next=4,c.default.get("".concat(r,"?api_key=").concat(t,"&page=").concat(a));case 4:return(o=e.sent).data.total_pages===T&&((0,h.notifyEndResults)(),U.unobserve(i.targetObserverMovies)),l=o.data.results,e.abrupt("return",l);case 10:e.prev=10,e.t0=e.catch(0),console.log("Error fetching trending movies:",e.t0.message);case 13:return e.prev=13,isLoading=!1,e.finish(13);case 16:case"end":return e.stop()}}),n,null,[[0,10,13,16]])})))).apply(this,arguments)}var U=new IntersectionObserver((function(e,n){console.log(e),e.forEach((function(e){e.isIntersecting&&(O+=1,I(k,l.URLS.BASE_MOVIES_URL,O).then((function(e){return u(e)})))}))}),{root:null,rootMargin:"400px",threshold:1});function q(){return(q=e(o)(e(s).mark((function n(t){var r,a,o,c;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),U.unobserve(i.targetObserverMovies),C.unobserve(i.targetObserverSearch),i.backdrop.classList.add("is-hidden"),R=i.form.searchQuery.value.trim(),T=1,e.prev=6,i.moviesList.innerHTML="",i.endResultsInfo.classList.add("visually-hidden"),e.next=11,p(k,l.URLS.SEARCH_MOVIE_URL,R,T);case 11:r=e.sent,a=r.data,o=a.results,c=a.total_results,o&&o.length>0?(d(o),C.observe(i.targetObserverSearch)):(i.endResultsInfo.classList.remove("visually-hidden"),(0,h.notifyNoResults)()),c&&c<=20&&r.data.total_pages===T&&((0,h.notifyEndResults)(),C.unobserve(i.targetObserverSearch)),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(6),console.log("Error fetching movies:",e.t0.message);case 20:return e.prev=20,i.form.searchQuery.value="",e.finish(20);case 23:case"end":return e.stop()}}),n,null,[[6,17,20,23]])})))).apply(this,arguments)}I(k,l.URLS.BASE_MOVIES_URL,O).then((function(e){return u(e)})).then((function(){return U.observe(i.targetObserverMovies)})).catch((function(e){return console.log(e)})),i.form.addEventListener("submit",(function(e){return q.apply(this,arguments)}));var C=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&(T+=1,p(k,l.URLS.SEARCH_MOVIE_URL,R,T).then((function(e){d(e.data.results)})))}))}),{root:null,rootMargin:"400px",threshold:1});function j(){return(j=e(o)(e(s).mark((function n(t){var r,a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(r=t.target.closest(".movies-item"))){e.next=8;break}return a=r.getAttribute("data-id"),e.next=6,m(k,l.URLS.SINGLE_MOVIE_URL,a);case 6:_(e.sent);case 8:case"end":return e.stop()}}),n)})))).apply(this,arguments)}i.moviesContainer.addEventListener("click",(function(e){return j.apply(this,arguments)}))}();
//# sourceMappingURL=index.0349a53d.js.map
