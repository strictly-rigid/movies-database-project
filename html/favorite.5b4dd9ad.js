!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},s={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in a)return a[e].exports;if(e in s){var n=s[e];delete s[e];var o={id:e,exports:{}};return a[e]=o,n.call(o.exports,o,o.exports),o.exports}var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}).register=function(e,a){s[e]=a},e.parcelRequired7c6=n);var o,t={favWrapper:document.querySelector(".favorite-data-container"),favMovies:document.querySelector(".favorite-movies"),favMoviesTitle:document.querySelector(".fav-movies-title"),favSeries:document.querySelector(".favorite-series"),favSeriesTitle:document.querySelector(".fav-series-title"),favPeople:document.querySelector(".favorite-people"),favPeopleTitle:document.querySelector(".fav-people-title"),noResultsMovies:document.querySelector(".no-results-info-movies"),noResultsSeries:document.querySelector(".no-results-info-series"),noResultsPeople:document.querySelector(".no-results-info-people")},l=n("4s6iC"),i=n("lG111"),r=null!==(o=JSON.parse(localStorage.getItem("favorite_movies")))&&void 0!==o?o:[];l=n("4s6iC"),i=n("lG111");var c,d=null!==(c=JSON.parse(localStorage.getItem("favorite_series")))&&void 0!==c?c:[];l=n("4s6iC"),i=n("lG111");var p,v,u=null!==(p=JSON.parse(localStorage.getItem("favorite_people")))&&void 0!==p?p:[];var m,f,g=null!==(v=JSON.parse(localStorage.getItem("favorite_movies")))&&void 0!==v?v:[];g.length&&(t.noResultsMovies.classList.add("visually-hidden"),t.favMoviesTitle.classList.remove("visually-hidden")),m=g.map((function(e){var a=e.id,s=e.title,n=e.origTitle,o=e.budget,t=e.languages,i=e.genres,r=e.originCountry,c=e.releaseDate,d=e.posterPath,p=e.revenue,v=e.runtime,u=e.overview,m=e.voteAverage,f=e.voteCount;console.log(t);var g=i.map((function(e){return e.name})).join(", "),b=t.map((function(e){return e.english_name})).join(", ");return'<div class="movie-item-detailed-fav" id='.concat(a,'>\n        <img src="').concat(l.URLS.POSTER_URL).concat(d,'" class="movie-poster" alt="movie poster">\n        <h2 class="modal-title" id="movieName">').concat(s,'</h2>\n        <h3 class="modal-original-title"><span class="modal-bold">Original title</span>: ').concat(n,'</h3>\n        <p class="modal-genres"><span class="modal-bold">Genres:</span> ').concat(g,'</p>\n        <p class="orig-country"><span class="modal-bold">Country of origin:</span> ').concat(r,'</p>\n        <p class="modal-release-date"><span class="modal-bold">Release date:</span> ').concat(c,'</p>\n        <p class="movie-description-fav"><span class="modal-bold">Desription:</span> ').concat(u,'</p>\n        <p class="languages"><span class="modal-bold">Spoken languages:</span> ').concat(b,'</p>\n        <span class="budget"><span class="modal-bold">Budget:</span> $').concat((o/1e6).toFixed(),' mln</span>\n        <span class="revenue"><span class="modal-bold">Revenue:</span> $').concat((p/1e6).toFixed(),' mln</span>\n        <p class="runtime"><span class="modal-bold">Time:</span> ').concat(v,' minutes</p>\n\n         <div class="movies-modal-rate">\n        <span class="rating"><span class="modal-bold">Rating:</span> ').concat(m,'</span>\n        <span class="vote-count"><span class="modal-bold">Total votes:</span> ').concat(f,'</span>\n        </div>\n\n          <button type="button" class="delete-btn-movies">Delete from favorites</button>\n   \n      </div>')})).join(""),t.favMovies.insertAdjacentHTML("beforeend",m),document.querySelectorAll(".delete-btn-movies").forEach((function(e){e.addEventListener("click",(function(e){var a=e.target.closest(".movie-item-detailed-fav");!function(e,a){var s=e.target.closest(".movie-item-detailed-fav").id;r=r.filter((function(e){return e.id!=s})),localStorage.setItem("favorite_movies",JSON.stringify(r)),e.target.closest(".movie-item-detailed-fav").remove(),(0,i.notifyDeleteSuccess)(a),0===r.length&&(t.noResultsMovies.classList.remove("visually-hidden"),t.favMoviesTitle.classList.add("visually-hidden"))}(e,a.querySelector("#movieName").innerText)}))}));var b,y,S=null!==(f=JSON.parse(localStorage.getItem("favorite_series")))&&void 0!==f?f:[];S.length&&(t.noResultsSeries.classList.add("visually-hidden"),t.favSeriesTitle.classList.remove("visually-hidden")),b=S.map((function(e){var a=e.id,s=e.createdBy,n=e.inProduction,o=e.languages,t=e.genres,i=e.originCountry,r=e.name,c=e.firstAir,d=e.numberSeasons,p=e.numberEpisodes,v=e.voteAverage,u=e.voteCount,m=e.overview,f=e.posterPath,g=t.map((function(e){return e.name})).join(", "),b=o.map((function(e){return e})).join(", "),y=s.map((function(e){return e.name})).join(", ");return'<div class="series-item-detailed-fav" id='.concat(a,'>\n       <img src="').concat(l.URLS.POSTER_URL).concat(f,'" class="series-poster" alt="series poster">\n        <h2 class="modal-title" id="seriesName">').concat(r,'</h2>\n        <p class="modal-genres"><span class="modal-bold">Genres:</span> ').concat(g,'</p>\n       \n        <p class="orig-country"><span class="modal-bold">Origin country:</span> ').concat(i,'</p>\n        <p class="in-production"><span class="modal-bold">Still in production:</span> ').concat(n,'</p>\n      \n\n     \n        <p class="first-air-date"><span class="modal-bold">First air date:</span> ').concat(c,'</p>\n        <p class="series-description-fav"><span class="modal-bold">Desription:</span> ').concat(m,'</p>\n      \n        <p class="created-by"><span class="modal-bold">Creators:</span> ').concat(y,'</p>\n        <p class="languages"><span class="modal-bold">Spoken languages:</span> ').concat(b,'</p>\n        <div class="series-length">\n        <span class="seasons"><span class="modal-bold">Number of seasons:</span> ').concat(d,'</span>\n        <span class="episodes"><span class="modal-bold">Number of episodes:</span> ').concat(p,'</span>\n        </div>\n\n        <div class="series-modal-rate">\n         <span class="rating"><span class="modal-bold">Rating:</span> ').concat(v,'</span>\n         <span class="vote-count"><span class="modal-bold">Total votes:</span> ').concat(u,'</span>\n         </div>\n\n          <button type="button" class="delete-btn-series">Delete from favorites</button>\n   \n      </div>')})).join(""),t.favSeries.insertAdjacentHTML("beforeend",b),document.querySelectorAll(".delete-btn-series").forEach((function(e){e.addEventListener("click",(function(e){var a=e.target.closest(".series-item-detailed-fav");!function(e,a){var s=e.target.closest(".series-item-detailed-fav").id;d=d.filter((function(e){return e.id!=s})),localStorage.setItem("favorite_series",JSON.stringify(d)),e.target.closest(".series-item-detailed-fav").remove(),(0,i.notifyDeleteSuccess)(a),0===d.length&&(t.noResultsSeries.classList.remove("visually-hidden"),t.favSeriesTitle.classList.add("visually-hidden"))}(e,a.querySelector("#seriesName").innerText)}))}));var h,L=null!==(y=JSON.parse(localStorage.getItem("favorite_people")))&&void 0!==y?y:[];L.length&&(t.noResultsPeople.classList.add("visually-hidden"),t.favPeopleTitle.classList.remove("visually-hidden")),h=L.map((function(e){var a=e.id,s=e.name,n=e.gender,o=e.birthday,t=e.biography,i=e.knownFor,r=e.placeOfBirth,c=e.profile_path,d=e.popularity,p=l.genders[n]||"Not specified",v=c?"".concat(l.URLS.POSTER_URL).concat(c):l.URLS.DEFAULT_IMAGE;return'<div class="person-item-detailed-fav" id='.concat(a,'>\n           <img src="').concat(v,'" class="person-image" alt="person image">\n            <h2 class="modal-name modal-title" id="personName">').concat(s,'</h2>\n            <p class="gender"> <span class="modal-bold"> Gender:</span> ').concat(p,'</p>\n            <p class="birthday"> <span class="modal-bold"> Born:</span> ').concat(o||"unknown",'</p>\n            <p class="place_of_birth"> <span class="modal-bold"> Place of birth:</span> ').concat(r||"unknown",'</span>\n            <p class="known_for"> <span class="modal-bold"> Known for:</span> ').concat(i||"No data",'</p>\n            <p class="biography-fav"> <span class="modal-bold"> Bio:</span> ').concat(t||"no info",'</p>\n            <p class="popularity"> <span class="modal-bold"> Popularity:</span> ').concat(d,'</p>\n            <button type="button" class="delete-btn-people">Delete from favorites</button>\n          </div>')})).join(""),t.favPeople.insertAdjacentHTML("beforeend",h),document.querySelectorAll(".delete-btn-people").forEach((function(e){e.addEventListener("click",(function(e){var a=e.target.closest(".person-item-detailed-fav");!function(e,a){var s=e.target.closest(".person-item-detailed-fav").id;u=u.filter((function(e){return e.id!=s})),localStorage.setItem("favorite_people",JSON.stringify(u)),e.target.closest(".person-item-detailed-fav").remove(),(0,i.notifyDeleteSuccess)(a),0===u.length&&(t.noResultsPeople.classList.remove("visually-hidden"),t.favPeopleTitle.classList.add("visually-hidden"))}(e,a.querySelector("#personName").innerText)}))}))}();
//# sourceMappingURL=favorite.5b4dd9ad.js.map