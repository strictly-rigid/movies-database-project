!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){r[e]=n},n.parcelRequired7c6=o);var a=o("bpxeT"),s=o("2TvXO"),c=o("dIxxU"),i={form:document.querySelector(".search-form-people"),peopleContainer:document.querySelector(".people-data-container"),peopleList:document.querySelector(".people-list"),targetObserverPeople:document.querySelector(".js-guard-people"),targetObserverSearch:document.querySelector(".js-guard-search"),backdrop:document.querySelector(".person-backdrop"),modalWrapper:document.querySelector(".person-item-wrapper"),endResultsInfo:document.querySelector(".no-results-info-people"),closeBtn:document.querySelector(".modal-people-close-icon")},p=o("4s6iC");p=o("4s6iC");function l(e){console.log(e);var n=e.map((function(e){var n=e.id,t=e.name,r=e.gender,o=e.known_for_department,a=e.profile_path,s=a?"".concat("https://image.tmdb.org/t/p/w500").concat(a):"https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg",c=p.genders[r]||"Not specified";return'<li class="person-item" data-id='.concat(n,'>\n            <img\n              src="').concat(s,'"\n              class="person-image"\n              alt="person image"\n            />\n          <div class="person-info">\n            <h2 class="person-name">').concat(t,'</h2>\n            <p class="person-gender">').concat(c,'</p>\n            <p class="popular-movies">Known for: ').concat(o||"No data"," </p>\n          </div>\n          </li>")})).join("");i.peopleList.insertAdjacentHTML("beforeend",n)}p=o("4s6iC");function u(e){var n=e.map((function(e){var n=e.id,t=(e.known_for_department,e.name),r=e.gender,o=e.profile_path,a=o?"".concat("https://image.tmdb.org/t/p/w500").concat(o):"https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg",s=p.genders[r]||"Not specified";return'<li class="person-item" data-id='.concat(n,'>\n            <img\n              src="').concat(a,'"\n              class="person-image"\n              alt="person image"\n            />\n            <h2 class="person-name">').concat(t,'</h2>\n            <p class="person-gender">').concat(s,"</p>\n          \n          </li>")})).join("");i.peopleList.insertAdjacentHTML("beforeend",n)}a=o("bpxeT"),s=o("2TvXO"),c=o("dIxxU");function d(e,n,t,r){return f.apply(this,arguments)}function f(){return(f=e(a)(e(s).mark((function n(t,r,o,a){var i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.default.get("".concat(r,"?api_key=").concat(t,"&query=").concat(o,"&page=").concat(a));case 3:return i=e.sent,console.log(i),e.abrupt("return",i);case 8:e.prev=8,e.t0=e.catch(0),console.log("Error fetching person:",e.t0.message);case 11:case"end":return e.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}a=o("bpxeT"),s=o("2TvXO"),c=o("dIxxU");function h(e,n,t){return g.apply(this,arguments)}function g(){return(g=e(a)(e(s).mark((function n(t,r,o){var a,i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,!0,e.next=4,c.default.get("".concat(r,"/").concat(o,"?api_key=").concat(t));case 4:return a=e.sent,i=a.data,e.abrupt("return",i);case 9:e.prev=9,e.t0=e.catch(0),console.log('Error fetching person"s data:',e.t0.message);case 12:return e.prev=12,!1,e.finish(12);case 15:case"end":return e.stop()}}),n,null,[[0,9,12,15]])})))).apply(this,arguments)}a=o("bpxeT"),s=o("2TvXO");o("ejkSG");p=o("4s6iC");var v,m=o("lG111"),b="https://image.tmdb.org/t/p/w500",y="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg",_=null!==(v=JSON.parse(localStorage.getItem("favorites")))&&void 0!==v?v:[];function w(e){return L.apply(this,arguments)}function L(){return(L=e(a)(e(s).mark((function n(t){var r,o,a,c,l,u,d,f,h,g,v,m;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.id,o=t.birthday,a=t.biography,c=t.place_of_birth,l=t.gender,u=t.name,d=t.known_for_department,f=t.profile_path,h=t.popularity,console.log(t),g=f?"".concat(b).concat(f):y,v=p.genders[l]||"Not specified",m='<div class="person-item-detailed" id='.concat(r,'>\n           <img src="').concat(g,'" class="person-image" alt="person image">\n            <h2 class="modal-name modal-title">').concat(u,'</h2>\n            <p class="gender"> <span class="modal-bold"> Gender:</span> ').concat(v,'</p>\n            <p class="birthday"> <span class="modal-bold"> Born:</span> ').concat(o||"unknown",'</p>\n            <p class="place_of_birth"> <span class="modal-bold"> Place of birth:</span> ').concat(c||"unknown",'</span>\n            <p class="known_for"> <span class="modal-bold"> Known for:</span> ').concat(d||"No data",'</p>\n            <p class="biography"> <span class="modal-bold">Bio:</span> ').concat(a||"no info",'</p>\n            <p class="popularity"> <span class="modal-bold"> Popularity:</span> ').concat(h,'</p>\n            <button type="button" class="person-fav">Add to favorites</button>\n          </div>'),i.backdrop.classList.remove("is-hidden"),i.modalWrapper.innerHTML=m,i.backdrop.addEventListener("click",E),window.addEventListener("keydown",S),i.closeBtn.addEventListener("click",k),document.querySelector(".person-fav").addEventListener("click",(function(){return x(t)}));case 12:case"end":return e.stop()}}),n)})))).apply(this,arguments)}function k(){i.modalWrapper.innerHTML="",i.backdrop.classList.add("is-hidden"),i.backdrop.removeEventListener("click",k),i.closeBtn.removeEventListener("click",k),window.removeEventListener("keydown",S)}function S(e){"Escape"===e.code&&k()}function E(e){e.currentTarget===e.target&&k()}function x(e){var n=_.some((function(n){return n.id===e.id})),t={id:e.id,name:e.name,gender:e.gender,birthday:e.birthday,biography:e.biography,knownFor:e.known_for_department,place_of_birth:e.place_of_birth,profile_path:e.profile_path,popularity:e.popularity};n?(0,m.notifyIsInFavorites)(e.name):(_.push(t),localStorage.setItem("favorites",JSON.stringify(_)),(0,m.notifyAddSuccess)(e.name))}m=o("lG111");var O="86bcaf318e232372b2e8e2623c959f88",R="",P=1,N=1;function T(e,n,t){return I.apply(this,arguments)}function I(){return(I=e(a)(e(s).mark((function n(t,r,o){var a,p;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,!0,e.next=4,c.default.get("".concat(r,"?api_key=").concat(t,"&page=").concat(o));case 4:return a=e.sent,console.log(a),a.data.total_pages===N&&((0,m.notifyEndResults)(),M.unobserve(i.targetObserverPeople)),p=a.data.results,e.abrupt("return",p);case 11:e.prev=11,e.t0=e.catch(0),console.log("Error fetching trending people:",e.t0.message);case 14:return e.prev=14,!1,e.finish(14);case 17:case"end":return e.stop()}}),n,null,[[0,11,14,17]])})))).apply(this,arguments)}var M=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&(P+=1,T(O,p.URLS.BASE_PEOPLE_URL,P).then((function(e){return l(e)})))}))}),{root:null,rootMargin:"400px",threshold:1});function U(){return(U=e(a)(e(s).mark((function n(t){var r,o,a,c;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),M.unobserve(i.targetObserverPeople),j.unobserve(i.targetObserverSearch),i.backdrop.classList.add("is-hidden"),R=i.form.searchQuery.value.trim(),N=1,e.prev=6,i.peopleList.innerHTML="",i.endResultsInfo.classList.add("visually-hidden"),e.next=11,d(O,p.URLS.SEARCH_PERSON_URL,R,N);case 11:r=e.sent,o=r.data,a=o.results,c=o.total_results,a&&a.length>0?(u(a),j.observe(i.targetObserverSearch)):(i.endResultsInfo.classList.remove("visually-hidden"),(0,m.notifyNoResults)()),c&&c<=20&&r.data.total_pages===N&&((0,m.notifyEndResults)(),j.unobserve(i.targetObserverSearch)),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(6),console.log("Error fetching person:",e.t0.message);case 20:return e.prev=20,i.form.searchQuery.value="",e.finish(20);case 23:case"end":return e.stop()}}),n,null,[[6,17,20,23]])})))).apply(this,arguments)}T(O,p.URLS.BASE_PEOPLE_URL,P).then((function(e){return l(e)})).then((function(){return M.observe(i.targetObserverPeople)})).catch((function(e){return console.log(e)})),i.form.addEventListener("submit",(function(e){return U.apply(this,arguments)}));var j=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&(N+=1,d(O,p.URLS.SEARCH_PERSON_URL,R,N).then((function(e){u(e.data.results)})))}))}),{root:null,rootMargin:"400px",threshold:1});function q(){return(q=e(a)(e(s).mark((function n(t){var r,o;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(r=t.target.closest(".person-item"))){e.next=8;break}return o=r.getAttribute("data-id"),e.next=6,h(O,p.URLS.SINGLE_PERSON_URL,o);case 6:w(e.sent);case 8:case"end":return e.stop()}}),n)})))).apply(this,arguments)}i.peopleContainer.addEventListener("click",(function(e){return q.apply(this,arguments)}))}();
//# sourceMappingURL=trendingpeople.77d69af8.js.map
