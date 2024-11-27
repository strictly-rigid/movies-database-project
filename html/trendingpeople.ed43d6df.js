var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,r.call(o.exports,o,o.exports),o.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,n){t[e]=n},e.parcelRequired7c6=r);const o={form:document.querySelector(".search-form-people"),dataContainer:document.querySelector(".people-data-container"),list:document.querySelector(".people-list"),targetObserver:document.querySelector(".js-guard-people"),targetObserverSearch:document.querySelector(".js-guard-search"),backdrop:document.querySelector(".person-backdrop"),modalWrapper:document.querySelector(".person-item-wrapper"),endResultsInfo:document.querySelector(".no-results-info-people"),closeBtn:document.querySelector(".modal-people-close-icon")};var s=r("8G1wF");s=r("8G1wF");function a(e){const n=e.map((({id:e,name:n,gender:t,known_for_department:r,profile_path:o})=>`<li class="person-item" data-id=${e}>\n            <img\n              src="${o?`${s.URLS.POSTER_URL}${o}`:s.URLS.DEFAULT_IMAGE}"\n              class="person-image"\n              alt="person image"\n            />\n          <div class="person-info">\n            <h2 class="person-name">${n}</h2>\n            <p class="person-gender">${s.genders[t]||"Not specified"}</p>\n            <p class="popular-movies">Known for: ${r||"No data"} </p>\n          </div>\n          </li>`)).join("");o.list.insertAdjacentHTML("beforeend",n)}s=r("8G1wF");function i(e){const n=e.map((({id:e,name:n,gender:t,profile_path:r})=>`<li class="person-item" data-id=${e}>\n            <img\n              src="${r?`${s.URLS.POSTER_URL}${r}`:s.URLS.DEFAULT_IMAGE}"\n              class="person-image"\n              alt="person image"\n            />\n            <h2 class="person-name">${n}</h2>\n            <p class="person-gender">Gender: ${s.genders[t]||"Not specified"}</p>\n          \n          </li>`)).join("");o.list.insertAdjacentHTML("beforeend",n)}var l=r("2shzp");async function c(e,n,t,r){try{const o=await l.default.get(`${n}?api_key=${e}&query=${t}&page=${r}`);return console.log(o),o}catch(e){console.log("Error fetching person:",e.message)}}l=r("2shzp");async function d(e,n,t){try{const r=await l.default.get(`${n}/${t}?api_key=${e}`);return r.data}catch(e){console.log('Error fetching person"s data:',e.message)}}s=r("8G1wF");var p,u=r("6Ipdt"),f=r("kj8Rd");const m=null!==(p=JSON.parse(localStorage.getItem("favorite_people")))&&void 0!==p?p:[];async function g(e){const{id:n,birthday:t,biography:r,place_of_birth:a,gender:i,name:l,known_for_department:c,profile_path:d,popularity:p}=e;let g=`<div class="person-item-detailed" id=${n}>\n           <img src="${d?`${s.URLS.POSTER_URL}${d}`:s.URLS.DEFAULT_IMAGE}" class="person-image" alt="person image">\n            <h2 class="modal-name modal-title">${l}</h2>\n            <p class="gender"> <span class="modal-bold"> Gender:</span> ${s.genders[i]||"Not specified"}</p>\n            <p class="birthday"> <span class="modal-bold"> Born:</span> ${t||"unknown"}</p>\n            <p class="place_of_birth"> <span class="modal-bold"> Place of birth:</span> ${a||"unknown"}</span>\n            <p class="known_for"> <span class="modal-bold"> Known for:</span> ${c||"No data"}</p>\n            <p class="biography"> <span class="modal-bold">Bio:</span> ${r||"no info"}</p>\n            <p class="popularity"> <span class="modal-bold"> Popularity:</span> ${p}</p>\n            <button type="button" class="person-fav">Add to favorites</button>\n          </div>`;o.backdrop.classList.remove("is-hidden"),o.modalWrapper.innerHTML=g,o.backdrop.addEventListener("click",(e=>(0,u.onBackdropClick)(e,h))),window.addEventListener("keydown",(e=>(0,u.onEscKeyPress)(e,h))),o.closeBtn.addEventListener("click",h);document.querySelector(".person-fav").addEventListener("click",(()=>function(e){const n=m.some((n=>n.id===e.id)),t={id:e.id,name:e.name,gender:e.gender,birthday:e.birthday,biography:e.biography,knownFor:e.known_for_department,placeOfBirth:e.place_of_birth,profile_path:e.profile_path,popularity:e.popularity};n?(0,f.notifyIsInFavorites)(e.name):(m.push(t),localStorage.setItem("favorite_people",JSON.stringify(m)),(0,f.notifyAddSuccess)(e.name))}(e)))}function h(){o.modalWrapper.innerHTML="",o.backdrop.classList.add("is-hidden"),o.backdrop.removeEventListener("click",h),o.closeBtn.removeEventListener("click",h),window.removeEventListener("keydown",u.onEscKeyPress)}f=r("kj8Rd");var v=r("dB5GG"),y=r("hlWSz");let b="",L=1,_=1;async function S(e){try{const n=await(0,v.fetchData)(s.URLS.BASE_PEOPLE_URL,{api_key:undefined,page:e});n.total_pages===_&&((0,f.notifyEndResults)(),E.unobserve(o.targetObserver));return n.results}catch(e){console.log("Error fetching trending people:",e.message)}}const E=(0,y.setNewObserver)((function(e){e.forEach((e=>{e.isIntersecting&&(L+=1,S(L).then((e=>a(e))))}))}),s.trendingObserverOptions);S(L).then((e=>a(e))).then((()=>E.observe(o.targetObserver))).catch((e=>console.log(e))),o.form.addEventListener("submit",(async function(e){e.preventDefault(),o.backdrop.classList.add("is-hidden"),b=o.form.searchQuery.value.trim(),E.unobserve(o.targetObserver),R.unobserve(o.targetObserverSearch),o.list.innerHTML="",o.endResultsInfo.classList.add("visually-hidden"),_=1;try{const e=await c(undefined,s.URLS.SEARCH_PERSON_URL,b,_),{results:n,total_results:t}=e.data;n&&n.length>0?(i(n),R.observe(o.targetObserverSearch)):(o.endResultsInfo.classList.remove("visually-hidden"),(0,f.notifyNoResults)()),t&&t<=20&&e.data.total_pages===_&&((0,f.notifyEndResults)(),R.unobserve(o.targetObserverSearch))}catch(e){console.log("Error fetching person:",e.message)}finally{o.form.searchQuery.value=""}}));const R=(0,y.setNewObserver)((function(e){e.forEach((e=>{e.isIntersecting&&(_+=1,c(undefined,s.URLS.SEARCH_PERSON_URL,b,_).then((e=>{const{results:n}=e.data;i(n)})))}))}),s.searchObserverOptions);o.dataContainer.addEventListener("click",(async function(e){e.preventDefault();const n=e.target.closest(".person-item");if(n){const e=n.getAttribute("data-id");g(await d(undefined,s.URLS.SINGLE_PERSON_URL,e))}}));
//# sourceMappingURL=trendingpeople.ed43d6df.js.map
