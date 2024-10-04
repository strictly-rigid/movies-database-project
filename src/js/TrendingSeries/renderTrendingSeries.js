import { refs2 } from '../refs2';

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
      }) => `<li class="series-item">
            <img src="${POSTER_URL}${poster_path}" class="series-poster" alt="series poster">
            <h2 class="series-title">${original_name}</h2>
            <p class="series-description">${overview}</p>
            <span class="series-rate">Rating: ${vote_average.toFixed(2)}</span>
          </li>`
    )
    .join('');

  seriesList.insertAdjacentHTML('beforeend', trendingSeries);
  console.log(seriesList);
}
