var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);const r={form:document.querySelector(".search-form-people"),peopleContainer:document.querySelector(".people-data-container"),peopleList:document.querySelector(".people-list"),targetObserverPeople:document.querySelector(".js-guard-people"),targetObserverSearch:document.querySelector(".js-guard-search"),backdrop:document.querySelector(".person-backdrop"),modalWrapper:document.querySelector(".person-item-wrapper"),endResultsInfo:document.querySelector(".no-results-info-people"),closeBtn:document.querySelector(".modal-people-close-icon")};var s=t("8G1wF");s=t("8G1wF");function a(e){const n=e.map((({id:e,name:n,gender:o,known_for_department:t,profile_path:r})=>`<li class="person-item" data-id=${e}>\n            <img\n              src="${r?`${s.URLS.POSTER_URL}${r}`:s.URLS.DEFAULT_IMAGE}"\n              class="person-image"\n              alt="person image"\n            />\n          <div class="person-info">\n            <h2 class="person-name">${n}</h2>\n            <p class="person-gender">${s.genders[o]||"Not specified"}</p>\n            <p class="popular-movies">Known for: ${t||"No data"} </p>\n          </div>\n          </li>`)).join("");r.peopleList.insertAdjacentHTML("beforeend",n)}s=t("8G1wF");function i(e){const n=e.map((({id:e,name:n,gender:o,profile_path:t})=>`<li class="person-item" data-id=${e}>\n            <img\n              src="${t?`${s.URLS.POSTER_URL}${t}`:s.URLS.DEFAULT_IMAGE}"\n              class="person-image"\n              alt="person image"\n            />\n            <h2 class="person-name">${n}</h2>\n            <p class="person-gender">Gender: ${s.genders[o]||"Not specified"}</p>\n          \n          </li>`)).join("");r.peopleList.insertAdjacentHTML("beforeend",n)}var l=t("2shzp");async function c(e,n,o,t){try{const r=await l.default.get(`${n}?api_key=${e}&query=${o}&page=${t}`);return console.log(r),r}catch(e){console.log("Error fetching person:",e.message)}}l=t("2shzp");let d=!1;async function p(e,n,o){try{d=!0;const t=await l.default.get(`${n}/${o}?api_key=${e}`);return t.data}catch(e){console.log('Error fetching person"s data:',e.message)}finally{d=!1}}s=t("8G1wF");var u,f=t("6Ipdt"),m=t("kj8Rd");const g=null!==(u=JSON.parse(localStorage.getItem("favorite_people")))&&void 0!==u?u:[];async function h(e){const{id:n,birthday:o,biography:t,place_of_birth:a,gender:i,name:l,known_for_department:c,profile_path:d,popularity:p}=e;let u=`<div class="person-item-detailed" id=${n}>\n           <img src="${d?`${s.URLS.POSTER_URL}${d}`:s.URLS.DEFAULT_IMAGE}" class="person-image" alt="person image">\n            <h2 class="modal-name modal-title">${l}</h2>\n            <p class="gender"> <span class="modal-bold"> Gender:</span> ${s.genders[i]||"Not specified"}</p>\n            <p class="birthday"> <span class="modal-bold"> Born:</span> ${o||"unknown"}</p>\n            <p class="place_of_birth"> <span class="modal-bold"> Place of birth:</span> ${a||"unknown"}</span>\n            <p class="known_for"> <span class="modal-bold"> Known for:</span> ${c||"No data"}</p>\n            <p class="biography"> <span class="modal-bold">Bio:</span> ${t||"no info"}</p>\n            <p class="popularity"> <span class="modal-bold"> Popularity:</span> ${p}</p>\n            <button type="button" class="person-fav">Add to favorites</button>\n          </div>`;r.backdrop.classList.remove("is-hidden"),r.modalWrapper.innerHTML=u,r.backdrop.addEventListener("click",(e=>(0,f.onBackdropClick)(e,y))),window.addEventListener("keydown",(e=>(0,f.onEscKeyPress)(e,y))),r.closeBtn.addEventListener("click",y);document.querySelector(".person-fav").addEventListener("click",(()=>function(e){const n=g.some((n=>n.id===e.id)),o={id:e.id,name:e.name,gender:e.gender,birthday:e.birthday,biography:e.biography,knownFor:e.known_for_department,placeOfBirth:e.place_of_birth,profile_path:e.profile_path,popularity:e.popularity};n?(0,m.notifyIsInFavorites)(e.name):(g.push(o),localStorage.setItem("favorite_people",JSON.stringify(g)),(0,m.notifyAddSuccess)(e.name))}(e)))}function y(){r.modalWrapper.innerHTML="",r.backdrop.classList.add("is-hidden"),r.backdrop.removeEventListener("click",y),r.closeBtn.removeEventListener("click",y),window.removeEventListener("keydown",f.onEscKeyPress)}m=t("kj8Rd");var v=t("dB5GG"),b=t("hlWSz");let L="",_=1,S=1;async function E(e){try{const n=await(0,v.fetchData)(s.URLS.BASE_PEOPLE_URL,{api_key:undefined,page:e});n.total_pages===S&&((0,m.notifyEndResults)(),R.unobserve(r.targetObserverPeople));return n.results}catch(e){console.log("Error fetching trending people:",e.message)}finally{isLoading=!1}}const R=(0,b.setNewObserver)((function(e){e.forEach((e=>{e.isIntersecting&&(_+=1,E(_).then((e=>a(e))))}))}),s.trendingObserverOptions);E(_).then((e=>a(e))).then((()=>R.observe(r.targetObserverPeople))).catch((e=>console.log(e))),r.form.addEventListener("submit",(async function(e){e.preventDefault(),r.backdrop.classList.add("is-hidden"),L=r.form.searchQuery.value.trim(),R.unobserve(r.targetObserverPeople),w.unobserve(r.targetObserverSearch),r.peopleList.innerHTML="",r.endResultsInfo.classList.add("visually-hidden"),S=1;try{const e=await c(undefined,s.URLS.SEARCH_PERSON_URL,L,S),{results:n,total_results:o}=e.data;n&&n.length>0?(i(n),w.observe(r.targetObserverSearch)):(r.endResultsInfo.classList.remove("visually-hidden"),(0,m.notifyNoResults)()),o&&o<=20&&e.data.total_pages===S&&((0,m.notifyEndResults)(),w.unobserve(r.targetObserverSearch))}catch(e){console.log("Error fetching person:",e.message)}finally{r.form.searchQuery.value=""}}));const w=(0,b.setNewObserver)((function(e){e.forEach((e=>{e.isIntersecting&&(S+=1,c(undefined,s.URLS.SEARCH_PERSON_URL,L,S).then((e=>{const{results:n}=e.data;i(n)})))}))}),s.searchObserverOptions);r.peopleContainer.addEventListener("click",(async function(e){e.preventDefault();const n=e.target.closest(".person-item");if(n){const e=n.getAttribute("data-id");h(await p(undefined,s.URLS.SINGLE_PERSON_URL,e))}}));
//# sourceMappingURL=trendingpeople.43dd3551.js.map