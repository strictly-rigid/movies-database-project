var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in i){var o=i[e];delete i[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},e.parcelRequired7c6=o),o("krGWQ");var n=o("2shzp");var r=o("krGWQ");!async function(e,t,i){try{const o=await n.default.get(`${t}?api_key=${e}`);console.log(o);i(o.data.results)}catch(e){console.log("Error fetching trending movies:",e.message)}}("86bcaf318e232372b2e8e2623c959f88","https://api.themoviedb.org/3/trending/movie/week",(function(e){const t=e.map((({original_title:e,overview:t,vote_average:i,poster_path:o})=>`<li class="movies-item">\n            <img src="https://image.tmdb.org/t/p/w500${o}" class="movie-poster" alt="movie poster">\n            <h2 class="movie-title">${e}</h2>\n            <p class="movie-description">${t}</p>\n            <span class="movie-rate">Rating: ${i.toFixed(2)}</span>\n          </li>`)).join("");r.refs.trendingMoviesList.insertAdjacentHTML("beforeend",t)}));
//# sourceMappingURL=index.f4402f6c.js.map