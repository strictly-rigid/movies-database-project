!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){r[e]=n},n.parcelRequired7c6=a);var o=a("bpxeT"),s=a("2TvXO"),c={form:document.querySelector(".search-form-people"),dataContainer:document.querySelector(".people-data-container"),list:document.querySelector(".people-list"),targetObserver:document.querySelector(".js-guard-people"),targetObserverSearch:document.querySelector(".js-guard-search"),backdrop:document.querySelector(".person-backdrop"),modalWrapper:document.querySelector(".person-item-wrapper"),endResultsInfo:document.querySelector(".no-results-info-people"),closeBtn:document.querySelector(".modal-people-close-icon")},i=a("4s6iC");i=a("4s6iC");function p(e){var n=e.map((function(e){var n=e.id,t=e.name,r=e.gender,a=e.known_for_department,o=e.profile_path,s=o?"".concat(i.URLS.POSTER_URL).concat(o):i.URLS.DEFAULT_IMAGE,c=i.genders[r]||"Not specified";return'<li class="person-item" data-id='.concat(n,'>\n            <img\n              src="').concat(s,'"\n              class="person-image"\n              alt="person image"\n            />\n          <div class="person-info">\n            <h2 class="person-name">').concat(t,'</h2>\n            <p class="person-gender">').concat(c,'</p>\n            <p class="popular-movies">Known for: ').concat(a||"No data"," </p>\n          </div>\n          </li>")})).join("");c.list.insertAdjacentHTML("beforeend",n)}i=a("4s6iC");function l(e){var n=e.map((function(e){var n=e.id,t=e.name,r=e.gender,a=e.profile_path,o=a?"".concat(i.URLS.POSTER_URL).concat(a):i.URLS.DEFAULT_IMAGE,s=i.genders[r]||"Not specified";return'<li class="person-item" data-id='.concat(n,'>\n            <img\n              src="').concat(o,'"\n              class="person-image"\n              alt="person image"\n            />\n            <h2 class="person-name">').concat(t,'</h2>\n            <p class="person-gender">Gender: ').concat(s,"</p>\n          \n          </li>")})).join("");c.list.insertAdjacentHTML("beforeend",n)}o=a("bpxeT"),s=a("2TvXO");var u=a("dIxxU");function d(e,n,t,r){return f.apply(this,arguments)}function f(){return(f=e(o)(e(s).mark((function n(t,r,a,o){var c;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.default.get("".concat(r,"?api_key=").concat(t,"&query=").concat(a,"&page=").concat(o));case 3:return c=e.sent,console.log(c),e.abrupt("return",c);case 8:e.prev=8,e.t0=e.catch(0),console.log("Error fetching person:",e.t0.message);case 11:case"end":return e.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}o=a("bpxeT"),s=a("2TvXO"),u=a("dIxxU");function v(e,n,t){return h.apply(this,arguments)}function h(){return(h=e(o)(e(s).mark((function n(t,r,a){var o,c;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.default.get("".concat(r,"/").concat(a,"?api_key=").concat(t));case 3:return o=e.sent,c=o.data,e.abrupt("return",c);case 8:e.prev=8,e.t0=e.catch(0),console.log('Error fetching person"s data:',e.t0.message);case 11:case"end":return e.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}o=a("bpxeT"),s=a("2TvXO"),i=a("4s6iC");var m,g=a("gOfal"),b=a("lG111"),y=null!==(m=JSON.parse(localStorage.getItem("favorite_people")))&&void 0!==m?m:[];function _(e){return L.apply(this,arguments)}function L(){return(L=e(o)(e(s).mark((function n(t){var r,a,o,p,l,u,d,f,v,h,m,b;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.id,a=t.birthday,o=t.biography,p=t.place_of_birth,l=t.gender,u=t.name,d=t.known_for_department,f=t.profile_path,v=t.popularity,h=f?"".concat(i.URLS.POSTER_URL).concat(f):i.URLS.DEFAULT_IMAGE,m=i.genders[l]||"Not specified",b='<div class="person-item-detailed" id='.concat(r,'>\n           <img src="').concat(h,'" class="person-image" alt="person image">\n            <h2 class="modal-name modal-title">').concat(u,'</h2>\n            <p class="gender"> <span class="modal-bold"> Gender:</span> ').concat(m,'</p>\n            <p class="birthday"> <span class="modal-bold"> Born:</span> ').concat(a||"unknown",'</p>\n            <p class="place_of_birth"> <span class="modal-bold"> Place of birth:</span> ').concat(p||"unknown",'</span>\n            <p class="known_for"> <span class="modal-bold"> Known for:</span> ').concat(d||"No data",'</p>\n            <p class="biography"> <span class="modal-bold">Bio:</span> ').concat(o||"no info",'</p>\n            <p class="popularity"> <span class="modal-bold"> Popularity:</span> ').concat(v,'</p>\n            <button type="button" class="person-fav">Add to favorites</button>\n          </div>'),c.backdrop.classList.remove("is-hidden"),c.modalWrapper.innerHTML=b,c.backdrop.addEventListener("click",(function(e){return(0,g.onBackdropClick)(e,E)})),window.addEventListener("keydown",(function(e){return(0,g.onEscKeyPress)(e,E)})),c.closeBtn.addEventListener("click",E),document.querySelector(".person-fav").addEventListener("click",(function(){return S(t)}));case 11:case"end":return e.stop()}}),n)})))).apply(this,arguments)}function E(){c.modalWrapper.innerHTML="",c.backdrop.classList.add("is-hidden"),c.backdrop.removeEventListener("click",E),c.closeBtn.removeEventListener("click",E),window.removeEventListener("keydown",g.onEscKeyPress)}function S(e){var n=y.some((function(n){return n.id===e.id})),t={id:e.id,name:e.name,gender:e.gender,birthday:e.birthday,biography:e.biography,knownFor:e.known_for_department,placeOfBirth:e.place_of_birth,profile_path:e.profile_path,popularity:e.popularity};n?(0,b.notifyIsInFavorites)(e.name):(y.push(t),localStorage.setItem("favorite_people",JSON.stringify(y)),(0,b.notifyAddSuccess)(e.name))}b=a("lG111");var w=a("ghquj"),k=a("7t6Gw"),R=void 0,O="",x=1,U=1;function T(e){return N.apply(this,arguments)}function N(){return(N=e(o)(e(s).mark((function n(t){var r,a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,w.fetchData)(i.URLS.BASE_PEOPLE_URL,{api_key:R,page:t});case 3:return(r=e.sent).total_pages===U&&((0,b.notifyEndResults)(),I.unobserve(c.targetObserver)),a=r.results,e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(0),console.log("Error fetching trending people:",e.t0.message);case 12:case"end":return e.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}var I=(0,k.setNewObserver)((function(e){e.forEach((function(e){e.isIntersecting&&T(x+=1).then((function(e){return p(e)}))}))}),i.trendingObserverOptions);function q(){return(q=e(o)(e(s).mark((function n(t){var r,a,o,p;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c.backdrop.classList.add("is-hidden"),O=c.form.searchQuery.value.trim(),A(),e.prev=4,e.next=7,d(R,i.URLS.SEARCH_PERSON_URL,O,U);case 7:r=e.sent,a=r.data,o=a.results,p=a.total_results,o&&o.length>0?(l(o),P.observe(c.targetObserverSearch)):(c.endResultsInfo.classList.remove("visually-hidden"),(0,b.notifyNoResults)()),p&&p<=20&&r.data.total_pages===U&&((0,b.notifyEndResults)(),P.unobserve(c.targetObserverSearch)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.log("Error fetching person:",e.t0.message);case 16:return e.prev=16,c.form.searchQuery.value="",e.finish(16);case 19:case"end":return e.stop()}}),n,null,[[4,13,16,19]])})))).apply(this,arguments)}function A(){I.unobserve(c.targetObserver),P.unobserve(c.targetObserverSearch),c.list.innerHTML="",c.endResultsInfo.classList.add("visually-hidden"),U=1}T(x).then((function(e){return p(e)})).then((function(){return I.observe(c.targetObserver)})).catch((function(e){return console.log(e)})),c.form.addEventListener("submit",(function(e){return q.apply(this,arguments)}));var P=(0,k.setNewObserver)((function(e){e.forEach((function(e){e.isIntersecting&&(U+=1,d(R,i.URLS.SEARCH_PERSON_URL,O,U).then((function(e){l(e.data.results)})))}))}),i.searchObserverOptions);function C(){return(C=e(o)(e(s).mark((function n(t){var r,a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(r=t.target.closest(".person-item"))){e.next=8;break}return a=r.getAttribute("data-id"),e.next=6,v(R,i.URLS.SINGLE_PERSON_URL,a);case 6:_(e.sent);case 8:case"end":return e.stop()}}),n)})))).apply(this,arguments)}c.dataContainer.addEventListener("click",(function(e){return C.apply(this,arguments)}))}();
//# sourceMappingURL=trendingpeople.e4e77494.js.map
