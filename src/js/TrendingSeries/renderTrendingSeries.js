import { refs2 } from '../refs2';
// const refs2 = {
//   trendingSeriesContainer: document.querySelector('.series-data-container'),
//   trendingSeriesList: document.querySelector('.series-list'),
// };

const trendingSeriesList = document.querySelector('.series-list');
console.log(trendingSeriesList);

const POSTER_URL = `https://image.tmdb.org/t/p/w500`;

export function renderTrendingSeries(series) {
  const trendingSeries = series
    .map(
      ({
        original_name,
        overview,
        vote_average,
        poster_path,
      }) => `<li class="movies-item">
            <img src="${POSTER_URL}${poster_path}" class="movie-poster" alt="movie poster">
            <h2 class="movie-title">${original_name}</h2>
            <p class="movie-description">${overview}</p>
            <span class="movie-rate">Rating: ${vote_average.toFixed(2)}</span>
          </li>`
    )
    .join('');

  trendingSeriesList.insertAdjacentHTML('beforeend', trendingSeries);
  console.log(trendingSeriesList);
}
