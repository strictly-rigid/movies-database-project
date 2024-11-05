!function(){function e(e){return e&&e.__esModule?e.default:e}function n(e,n,r,t){Object.defineProperty(e,n,{get:r,set:t,enumerable:!0,configurable:!0})}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},s={},a=r.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in s){var n=s[e];delete s[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){s[e]=n},r.parcelRequired7c6=a),a.register("6vEAI",(function(n,r){var t=a("bpxeT"),s=a("2TvXO"),o=a("dIxxU"),c=a("lhMFn"),i=a("4s6iC"),l=a("9DEnF"),u=a("4XNrr"),p=a("iSh4A"),d=a("9ejuF"),f=a("aCpOZ"),v=a("lG111"),g="86bcaf318e232372b2e8e2623c959f88",m="",h=1,b=1;function S(e,n,r){return y.apply(this,arguments)}function y(){return(y=e(t)(e(s).mark((function n(r,t,a){var i,l;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,!0,e.next=4,o.default.get("".concat(t,"?api_key=").concat(r,"&page=").concat(a));case 4:return i=e.sent,console.log(i),i.data.total_pages===b&&((0,v.notifyEndResults)(),_.unobserve(c.refs2.targetObserverSeries)),l=i.data.results,e.abrupt("return",l);case 11:e.prev=11,e.t0=e.catch(0),console.log("Error fetching trending series:",e.t0.message);case 14:return e.prev=14,!1,e.finish(14);case 17:case"end":return e.stop()}}),n,null,[[0,11,14,17]])})))).apply(this,arguments)}var _=new IntersectionObserver((function(e,n){console.log(e),e.forEach((function(e){e.isIntersecting&&(h+=1,S(g,i.URLS.BASE_SERIES_URL,h).then((function(e){return(0,l.renderTrendingSeries)(e)})))}))}),{root:null,rootMargin:"400px",threshold:1});function x(){return(x=e(t)(e(s).mark((function n(r){var t,a,o,l;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),_.unobserve(c.refs2.targetObserverSeries),E.unobserve(c.refs2.targetObserverSearch),c.refs2.backdrop.classList.add("is-hidden"),m=c.refs2.form.searchQuery.value.trim(),b=1,e.prev=6,c.refs2.seriesList.innerHTML="",c.refs2.endResultsInfo.classList.add("visually-hidden"),e.next=11,(0,p.searchSeries)(g,i.URLS.SEARCH_SERIES_URL,m,b);case 11:t=e.sent,a=t.data,o=a.results,l=a.total_results,o&&o.length>0?((0,u.renderFoundSeries)(o),E.observe(c.refs2.targetObserverSearch)):(c.refs2.endResultsInfo.classList.remove("visually-hidden"),(0,v.notifyNoResults)()),l&&l<=20&&t.data.total_pages===b&&((0,v.notifyEndResults)(),E.unobserve(c.refs2.targetObserverSearch)),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(6),console.log("Error fetching person:",e.t0.message);case 20:return e.prev=20,c.refs2.form.searchQuery.value="",e.finish(20);case 23:case"end":return e.stop()}}),n,null,[[6,17,20,23]])})))).apply(this,arguments)}S(g,i.URLS.BASE_SERIES_URL,h).then((function(e){return(0,l.renderTrendingSeries)(e)})).then((function(){return _.observe(c.refs2.targetObserverSeries)})).catch((function(e){return console.log(e)})),c.refs2.form.addEventListener("submit",(function(e){return x.apply(this,arguments)}));var E=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&(b+=1,(0,p.searchSeries)(g,i.URLS.SEARCH_SERIES_URL,m,b).then((function(e){var n=e.data.results;(0,u.renderFoundSeries)(n)})))}))}),{root:null,rootMargin:"400px",threshold:1});function L(){return(L=e(t)(e(s).mark((function n(r){var t,a,o;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),!(t=r.target.closest(".series-item"))){e.next=8;break}return a=t.getAttribute("data-id"),e.next=6,(0,d.fetchSingleSeries)(g,i.URLS.SINGLE_SERIES_URL,a);case 6:o=e.sent,(0,f.createSeriesModalMarkup)(o);case 8:case"end":return e.stop()}}),n)})))).apply(this,arguments)}c.refs2.seriesContainer.addEventListener("click",(function(e){return L.apply(this,arguments)}))})),a.register("lhMFn",(function(e,r){n(e.exports,"refs2",(function(){return t}));var t={form:document.querySelector(".search-form-series"),seriesContainer:document.querySelector(".series-data-container"),seriesList:document.querySelector(".series-list"),targetObserverSeries:document.querySelector(".js-guard-series"),targetObserverSearch:document.querySelector(".js-guard-search"),backdrop:document.querySelector(".series-backdrop"),modalWrapper:document.querySelector(".series-item-wrapper"),endResultsInfo:document.querySelector(".no-results-info-series"),closeBtn:document.querySelector(".modal-close-btn")}})),a.register("9DEnF",(function(e,r){n(e.exports,"renderTrendingSeries",(function(){return s}));var t=a("lhMFn");function s(e){console.log(e);var n=e.map((function(e){var n=e.id,r=e.name,t=e.overview,s=e.vote_average,a=e.poster_path,o=e.first_air_date;return'<li class="series-item" data-id='.concat(n,'>\n            <img src="').concat("https://image.tmdb.org/t/p/w500").concat(a,'" class="series-poster" alt="series poster">\n            <div class="series-info">\n            <h2 class="series-title">').concat(r,'</h2>\n            <p class="series-description">').concat(t,'</p>\n            <p class="series-premiere">Premiere date: ').concat(o,'</p>\n            <span class="series-rate">Rating: ').concat(s.toFixed(2),"</span>\n            </div>\n          </li>")})).join("");t.refs2.seriesList.insertAdjacentHTML("beforeend",n)}})),a.register("4XNrr",(function(e,r){n(e.exports,"renderFoundSeries",(function(){return o}));var t=a("lhMFn"),s=a("4s6iC");function o(e){var n=e.map((function(e){var n=e.id,r=e.genre_ids,t=e.name,a=e.overview,o=e.first_air_date,c=e.vote_average,i=e.vote_count,l=e.poster_path,u=function(e){return e.map((function(e){var n=s.genres.find((function(n){return n.id===e}));return n?n.name:""})).filter(Boolean).join(", ")}(r);return'<li class="movies-item" data-id='.concat(n,'>\n            <img src="').concat("https://image.tmdb.org/t/p/w500").concat(l,'" class="movie-poster" alt="movie poster">\n            <div class="movie-info">\n            <h2 class="movie-title">').concat(t,'</h2>\n            <p class="movie-description">').concat(a,'</p>\n              <p class="movie-genres">Genres: ').concat(u||"Sorry, no genres available",'</p>\n                <p class="series-premiere">Premiere date: ').concat(o,'</p>\n                 <span class="movie-rate">Rating: ').concat(c.toFixed(2),'</span> \n                 <span class="movie-rate-count">Total votes: ').concat(i,"</span> \n          </div>     \n          </li>")})).join("");t.refs2.seriesList.insertAdjacentHTML("beforeend",n)}})),a.register("iSh4A",(function(r,t){n(r.exports,"searchSeries",(function(){return i}));var s=a("bpxeT"),o=a("2TvXO"),c=a("dIxxU");function i(e,n,r,t){return l.apply(this,arguments)}function l(){return(l=e(s)(e(o).mark((function n(r,t,s,a){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.default.get("".concat(t,"?api_key=").concat(r,"&query=").concat(s,"&page=").concat(a));case 3:return i=e.sent,console.log(i),e.abrupt("return",i);case 8:e.prev=8,e.t0=e.catch(0),console.log("Error fetching trending series:",e.t0.message);case 11:case"end":return e.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}a("lhMFn")})),a.register("9ejuF",(function(r,t){n(r.exports,"fetchSingleSeries",(function(){return i}));var s=a("bpxeT"),o=a("2TvXO"),c=a("dIxxU");a("lhMFn"),a("4s6iC"),a("aCpOZ");function i(e,n,r){return l.apply(this,arguments)}function l(){return(l=e(s)(e(o).mark((function n(r,t,s){var a,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,!0,e.next=4,c.default.get("".concat(t,"/").concat(s,"?api_key=").concat(r));case 4:return a=e.sent,console.log(a),i=a.data,e.abrupt("return",i);case 10:e.prev=10,e.t0=e.catch(0),console.log("Error fetching series:",e.t0.message);case 13:return e.prev=13,!1,e.finish(13);case 16:case"end":return e.stop()}}),n,null,[[0,10,13,16]])})))).apply(this,arguments)}})),a.register("aCpOZ",(function(r,t){n(r.exports,"createSeriesModalMarkup",(function(){return l}));var s=a("bpxeT"),o=a("2TvXO"),c=a("lhMFn"),i="https://image.tmdb.org/t/p/w500";function l(e){return u.apply(this,arguments)}function u(){return(u=e(s)(e(o).mark((function n(r){var t,s,a,l,u,v,g,m,h,b,S,y,_,x,E,L,w,k;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=r.id,s=r.created_by,a=r.in_production,l=r.languages,u=r.genres,v=r.origin_country,g=r.name,m=r.first_air_date,h=r.number_of_seasons,b=r.number_of_episodes,S=r.vote_average,y=r.vote_count,_=r.overview,x=r.poster_path,E=u.map((function(e){return e.name})).join(", "),L=l.map((function(e){return e})).join(", "),w=s.map((function(e){return e.name})).join(", "),k='<div class="series-item-detailed" id='.concat(t,'>\n       <img src="').concat(i).concat(x,'" class="movie-poster" alt="movie poster">\n        <h2 class="modal-title">').concat(g,'</h2>\n        <p class="modal-genres"><span class="modal-bold">Genres:</span> ').concat(E,'</p>\n       \n        <p class="orig-country"><span class="modal-bold">Origin country:</span> ').concat(v,'</p>\n        <p class="in-production"><span class="modal-bold">Still in production:</span> ').concat(a,'</p>\n      \n\n     \n        <p class="first-air-date"><span class="modal-bold">First air date:</span> ').concat(m,'</p>\n        <p class="modal-series-description"><span class="modal-bold">Desription:</span> ').concat(_,'</p>\n      \n        <p class="created-by"><span class="modal-bold">Creators:</span> ').concat(w,'</p>\n        <p class="languages"><span class="modal-bold">Spoken languages:</span> ').concat(L,'</p>\n        <div class="series-length">\n        <span class="seasons"><span class="modal-bold">Number of seasons:</span> ').concat(h,'</span>\n        <span class="episodes"><span class="modal-bold">Number of episodes:</span> ').concat(b,'</span>\n        </div>\n\n        <div class="series-modal-rate">\n         <span class="rating"><span class="modal-bold">Rating:</span> ').concat(S,'</span>\n         <span class="vote-count"><span class="modal-bold">Total votes:</span> ').concat(y,"</span>\n         </div>\n   \n      </div>"),c.refs2.backdrop.classList.remove("is-hidden"),c.refs2.modalWrapper.innerHTML=k,c.refs2.backdrop.addEventListener("click",f),window.addEventListener("keydown",d),c.refs2.closeBtn.addEventListener("click",p);case 10:case"end":return e.stop()}}),n)})))).apply(this,arguments)}function p(){c.refs2.modalWrapper.innerHTML="",c.refs2.backdrop.classList.add("is-hidden"),c.refs2.backdrop.removeEventListener("click",p),c.refs2.closeBtn.removeEventListener("click",p),window.removeEventListener("keydown",d)}function d(e){"Escape"===e.code&&p()}function f(e){e.currentTarget===e.target&&p()}})),a("6vEAI")}();
//# sourceMappingURL=trendingseries.7178c061.js.map
