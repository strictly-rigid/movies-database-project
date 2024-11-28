var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},a={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in s)return s[e].exports;if(e in a){var n=a[e];delete a[e];var o={id:e,exports:{}};return s[e]=o,n.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,s){a[e]=s},e.parcelRequired7c6=n);const o={favWrapper:document.querySelector(".favorite-data-container"),favMovies:document.querySelector(".favorite-movies"),favMoviesTitle:document.querySelector(".fav-movies-title"),favSeries:document.querySelector(".favorite-series"),favSeriesTitle:document.querySelector(".fav-series-title"),favPeople:document.querySelector(".favorite-people"),favPeopleTitle:document.querySelector(".fav-people-title"),noResultsMovies:document.querySelector(".no-results-info-movies"),noResultsSeries:document.querySelector(".no-results-info-series"),noResultsPeople:document.querySelector(".no-results-info-people")};var l,t=n("8G1wF"),i=n("kj8Rd");let r=null!==(l=JSON.parse(localStorage.getItem("favorite_movies")))&&void 0!==l?l:[];var d;t=n("8G1wF"),i=n("kj8Rd");let p=null!==(d=JSON.parse(localStorage.getItem("favorite_series")))&&void 0!==d?d:[];var c;t=n("8G1wF"),i=n("kj8Rd");let v=null!==(c=JSON.parse(localStorage.getItem("favorite_people")))&&void 0!==c?c:[];var m;let u=null!==(m=JSON.parse(localStorage.getItem("favorite_movies")))&&void 0!==m?m:[];var f;u.length&&(o.noResultsMovies.classList.add("visually-hidden"),o.favMoviesTitle.classList.remove("visually-hidden")),function(e){const s=e.map((({id:e,title:s,origTitle:a,budget:n,languages:o,genres:l,originCountry:i,releaseDate:r,posterPath:d,revenue:p,runtime:c,overview:v,voteAverage:m,voteCount:u})=>{console.log(o);const f=l.map((e=>e.name)).join(", "),g=o.map((e=>e.english_name)).join(", ");return`<div class="movie-item-detailed-fav" id=${e}>\n        <img src="${t.URLS.POSTER_URL}${d}" class="movie-poster" alt="movie poster">\n        <h2 class="modal-title" id="movieName">${s}</h2>\n        <h3 class="modal-original-title"><span class="modal-bold">Original title</span>: ${a}</h3>\n        <p class="modal-genres"><span class="modal-bold">Genres:</span> ${f}</p>\n        <p class="orig-country"><span class="modal-bold">Country of origin:</span> ${i}</p>\n        <p class="modal-release-date"><span class="modal-bold">Release date:</span> ${r}</p>\n        <p class="modal-movie-description"><span class="modal-bold">Desription:</span> ${v}</p>\n        <p class="languages"><span class="modal-bold">Spoken languages:</span> ${g}</p>\n        <span class="budget"><span class="modal-bold">Budget:</span> $${(n/1e6).toFixed()} mln</span>\n        <span class="revenue"><span class="modal-bold">Revenue:</span> $${(p/1e6).toFixed()} mln</span>\n        <p class="runtime"><span class="modal-bold">Time:</span> ${c} minutes</p>\n\n         <div class="movies-modal-rate">\n        <span class="rating"><span class="modal-bold">Rating:</span> ${m}</span>\n        <span class="vote-count"><span class="modal-bold">Total votes:</span> ${u}</span>\n        </div>\n\n          <button type="button" class="delete-btn-movies">Delete from favorites</button>\n   \n      </div>`})).join("");o.favMovies.insertAdjacentHTML("beforeend",s),document.querySelectorAll(".delete-btn-movies").forEach((e=>{e.addEventListener("click",(e=>{const s=e.target.closest(".movie-item-detailed-fav");!function(e,s){const a=e.target.closest(".movie-item-detailed-fav").id;r=r.filter((e=>e.id!=a)),localStorage.setItem("favorite_movies",JSON.stringify(r)),e.target.closest(".movie-item-detailed-fav").remove(),(0,i.notifyDeleteSuccess)(s),0===r.length&&(o.noResultsMovies.classList.remove("visually-hidden"),o.favMoviesTitle.classList.add("visually-hidden"))}(e,s.querySelector("#movieName").innerText)}))}))}(u);let g=null!==(f=JSON.parse(localStorage.getItem("favorite_series")))&&void 0!==f?f:[];var b;g.length&&(o.noResultsSeries.classList.add("visually-hidden"),o.favSeriesTitle.classList.remove("visually-hidden")),function(e){const s=e.map((({id:e,createdBy:s,inProduction:a,languages:n,genres:o,originCountry:l,name:i,firstAir:r,numberSeasons:d,numberEpisodes:p,voteAverage:c,voteCount:v,overview:m,posterPath:u})=>{const f=o.map((e=>e.name)).join(", "),g=n.map((e=>e)).join(", "),b=s.map((e=>e.name)).join(", ");return`<div class="series-item-detailed-fav" id=${e}>\n       <img src="${t.URLS.POSTER_URL}${u}" class="series-poster" alt="series poster">\n        <h2 class="modal-title" id="seriesName">${i}</h2>\n        <p class="modal-genres"><span class="modal-bold">Genres:</span> ${f}</p>\n       \n        <p class="orig-country"><span class="modal-bold">Origin country:</span> ${l}</p>\n        <p class="in-production"><span class="modal-bold">Still in production:</span> ${a}</p>\n      \n\n     \n        <p class="first-air-date"><span class="modal-bold">First air date:</span> ${r}</p>\n        <p class="modal-series-description"><span class="modal-bold">Desription:</span> ${m}</p>\n      \n        <p class="created-by"><span class="modal-bold">Creators:</span> ${b}</p>\n        <p class="languages"><span class="modal-bold">Spoken languages:</span> ${g}</p>\n        <div class="series-length">\n        <span class="seasons"><span class="modal-bold">Number of seasons:</span> ${d}</span>\n        <span class="episodes"><span class="modal-bold">Number of episodes:</span> ${p}</span>\n        </div>\n\n        <div class="series-modal-rate">\n         <span class="rating"><span class="modal-bold">Rating:</span> ${c}</span>\n         <span class="vote-count"><span class="modal-bold">Total votes:</span> ${v}</span>\n         </div>\n\n          <button type="button" class="delete-btn-series">Delete from favorites</button>\n   \n      </div>`})).join("");o.favSeries.insertAdjacentHTML("beforeend",s),document.querySelectorAll(".delete-btn-series").forEach((e=>{e.addEventListener("click",(e=>{const s=e.target.closest(".series-item-detailed-fav");!function(e,s){const a=e.target.closest(".series-item-detailed-fav").id;p=p.filter((e=>e.id!=a)),localStorage.setItem("favorite_series",JSON.stringify(p)),e.target.closest(".series-item-detailed-fav").remove(),(0,i.notifyDeleteSuccess)(s),0===p.length&&(o.noResultsSeries.classList.remove("visually-hidden"),o.favSeriesTitle.classList.add("visually-hidden"))}(e,s.querySelector("#seriesName").innerText)}))}))}(g);let y=null!==(b=JSON.parse(localStorage.getItem("favorite_people")))&&void 0!==b?b:[];y.length&&(o.noResultsPeople.classList.add("visually-hidden"),o.favPeopleTitle.classList.remove("visually-hidden")),function(e){const s=e.map((({id:e,name:s,gender:a,birthday:n,biography:o,knownFor:l,placeOfBirth:i,profile_path:r,popularity:d})=>{const p=t.genders[a]||"Not specified";return`<div class="person-item-detailed-fav" id=${e}>\n           <img src="${r?`${t.URLS.POSTER_URL}${r}`:t.URLS.DEFAULT_IMAGE}" class="person-image" alt="person image">\n            <h2 class="modal-name modal-title" id="personName">${s}</h2>\n            <p class="gender"> <span class="modal-bold"> Gender:</span> ${p}</p>\n            <p class="birthday"> <span class="modal-bold"> Born:</span> ${n||"unknown"}</p>\n            <p class="place_of_birth"> <span class="modal-bold"> Place of birth:</span> ${i||"unknown"}</span>\n            <p class="known_for"> <span class="modal-bold"> Known for:</span> ${l||"No data"}</p>\n            <p class="biography"> <span class="modal-bold"> Bio:</span> ${o||"no info"}</p>\n            <p class="popularity"> <span class="modal-bold"> Popularity:</span> ${d}</p>\n            <button type="button" class="delete-btn-people">Delete from favorites</button>\n          </div>`})).join("");o.favPeople.insertAdjacentHTML("beforeend",s),document.querySelectorAll(".delete-btn-people").forEach((e=>{e.addEventListener("click",(e=>{const s=e.target.closest(".person-item-detailed-fav");!function(e,s){const a=e.target.closest(".person-item-detailed-fav").id;v=v.filter((e=>e.id!=a)),localStorage.setItem("favorite_people",JSON.stringify(v)),e.target.closest(".person-item-detailed-fav").remove(),(0,i.notifyDeleteSuccess)(s),0===v.length&&(o.noResultsPeople.classList.remove("visually-hidden"),o.favPeopleTitle.classList.add("visually-hidden"))}(e,s.querySelector("#personName").innerText)}))}))}(y);
//# sourceMappingURL=favorite.5f2ec206.js.map
