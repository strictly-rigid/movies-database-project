var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var r=t("2shzp");const a={form:document.querySelector(".search-form-people"),peopleContainer:document.querySelector(".people-data-container"),peopleList:document.querySelector(".people-list"),targetObserverPeople:document.querySelector(".js-guard-people"),targetObserverSearch:document.querySelector(".js-guard-search"),backdrop:document.querySelector(".person-backdrop"),modalWrapper:document.querySelector(".person-item-wrapper"),endResultsInfo:document.querySelector(".no-results-info-people"),closeBtn:document.querySelector(".modal-people-close-icon")};var s=t("8G1wF");s=t("8G1wF");function l(e){const n=e.map((({id:e,name:n,gender:o,known_for_department:t,profile_path:r})=>`<li class="person-item" data-id=${e}>\n            <img\n              src="${r?`${s.URLS.POSTER_URL}${r}`:s.URLS.DEFAULT_IMAGE}"\n              class="person-image"\n              alt="person image"\n            />\n          <div class="person-info">\n            <h2 class="person-name">${n}</h2>\n            <p class="person-gender">${s.genders[o]||"Not specified"}</p>\n            <p class="popular-movies">Known for: ${t||"No data"} </p>\n          </div>\n          </li>`)).join("");a.peopleList.insertAdjacentHTML("beforeend",n)}s=t("8G1wF");function i(e){const n=e.map((({id:e,known_for_department:n,name:o,gender:t,profile_path:r})=>`<li class="person-item" data-id=${e}>\n            <img\n              src="${r?`${s.URLS.POSTER_URL}${r}`:s.URLS.DEFAULT_IMAGE}"\n              class="person-image"\n              alt="person image"\n            />\n            <h2 class="person-name">${o}</h2>\n            <p class="person-gender">${s.genders[t]||"Not specified"}</p>\n          \n          </li>`)).join("");a.peopleList.insertAdjacentHTML("beforeend",n)}r=t("2shzp");async function c(e,n,o,t){try{const a=await r.default.get(`${n}?api_key=${e}&query=${o}&page=${t}`);return console.log(a),a}catch(e){console.log("Error fetching person:",e.message)}}r=t("2shzp");let p=!1;async function d(e,n,o){try{p=!0;const t=await r.default.get(`${n}/${o}?api_key=${e}`);return t.data}catch(e){console.log('Error fetching person"s data:',e.message)}finally{p=!1}}s=t("8G1wF");var f,u=t("kj8Rd");const g=null!==(f=JSON.parse(localStorage.getItem("favorite_people")))&&void 0!==f?f:[];async function m(e){const{id:n,birthday:o,biography:t,place_of_birth:r,gender:l,name:i,known_for_department:c,profile_path:p,popularity:d}=e;console.log(e);let f=`<div class="person-item-detailed" id=${n}>\n           <img src="${p?`${s.URLS.POSTER_URL}${p}`:s.URLS.DEFAULT_IMAGE}" class="person-image" alt="person image">\n            <h2 class="modal-name modal-title">${i}</h2>\n            <p class="gender"> <span class="modal-bold"> Gender:</span> ${s.genders[l]||"Not specified"}</p>\n            <p class="birthday"> <span class="modal-bold"> Born:</span> ${o||"unknown"}</p>\n            <p class="place_of_birth"> <span class="modal-bold"> Place of birth:</span> ${r||"unknown"}</span>\n            <p class="known_for"> <span class="modal-bold"> Known for:</span> ${c||"No data"}</p>\n            <p class="biography"> <span class="modal-bold">Bio:</span> ${t||"no info"}</p>\n            <p class="popularity"> <span class="modal-bold"> Popularity:</span> ${d}</p>\n            <button type="button" class="person-fav">Add to favorites</button>\n          </div>`;a.backdrop.classList.remove("is-hidden"),a.modalWrapper.innerHTML=f,a.backdrop.addEventListener("click",v),window.addEventListener("keydown",h),a.closeBtn.addEventListener("click",b);document.querySelector(".person-fav").addEventListener("click",(()=>function(e){const n=g.some((n=>n.id===e.id)),o={id:e.id,name:e.name,gender:e.gender,birthday:e.birthday,biography:e.biography,knownFor:e.known_for_department,placeOfBirth:e.place_of_birth,profile_path:e.profile_path,popularity:e.popularity};n?(0,u.notifyIsInFavorites)(e.name):(g.push(o),localStorage.setItem("favorite_people",JSON.stringify(g)),(0,u.notifyAddSuccess)(e.name))}(e)))}function b(){a.modalWrapper.innerHTML="",a.backdrop.classList.add("is-hidden"),a.backdrop.removeEventListener("click",b),a.closeBtn.removeEventListener("click",b),window.removeEventListener("keydown",h)}function h(e){"Escape"===e.code&&b()}function v(e){e.currentTarget===e.target&&b()}u=t("kj8Rd");let y="",L=1,_=1,E=!1;async function S(e,n,o){try{E=!0;const t=await r.default.get(`${n}?api_key=${e}&page=${o}`);console.log(t),t.data.total_pages===_&&((0,u.notifyEndResults)(),R.unobserve(a.targetObserverPeople));return t.data.results}catch(e){console.log("Error fetching trending people:",e.message)}finally{E=!1}}let R=new IntersectionObserver((function(e){e.forEach((e=>{e.isIntersecting&&(L+=1,S("86bcaf318e232372b2e8e2623c959f88",s.URLS.BASE_PEOPLE_URL,L).then((e=>l(e))))}))}),s.trendingObserverOptions);S("86bcaf318e232372b2e8e2623c959f88",s.URLS.BASE_PEOPLE_URL,L).then((e=>l(e))).then((()=>R.observe(a.targetObserverPeople))).catch((e=>console.log(e))),a.form.addEventListener("submit",(async function(e){e.preventDefault(),R.unobserve(a.targetObserverPeople),w.unobserve(a.targetObserverSearch),a.backdrop.classList.add("is-hidden"),y=a.form.searchQuery.value.trim(),_=1;try{a.peopleList.innerHTML="",a.endResultsInfo.classList.add("visually-hidden");const e=await c("86bcaf318e232372b2e8e2623c959f88",s.URLS.SEARCH_PERSON_URL,y,_),{results:n,total_results:o}=e.data;n&&n.length>0?(i(n),w.observe(a.targetObserverSearch)):(a.endResultsInfo.classList.remove("visually-hidden"),(0,u.notifyNoResults)()),o&&o<=20&&e.data.total_pages===_&&((0,u.notifyEndResults)(),w.unobserve(a.targetObserverSearch))}catch(e){console.log("Error fetching person:",e.message)}finally{a.form.searchQuery.value=""}}));let w=new IntersectionObserver((function(e){e.forEach((e=>{e.isIntersecting&&(_+=1,c("86bcaf318e232372b2e8e2623c959f88",s.URLS.SEARCH_PERSON_URL,y,_).then((e=>{const{results:n}=e.data;i(n)})))}))}),s.searchObserverOptions);a.peopleContainer.addEventListener("click",(async function(e){e.preventDefault();const n=e.target.closest(".person-item");if(n){const e=n.getAttribute("data-id");m(await d("86bcaf318e232372b2e8e2623c959f88",s.URLS.SINGLE_PERSON_URL,e))}}));
//# sourceMappingURL=trendingpeople.378a8b24.js.map
