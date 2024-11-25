import { refs2 } from '../refs2.js';
import { URLS } from '../constants.js';

export function renderTrendingSeries(series) {
  console.log(series);
  const trendingSeries = series
    .map(
      ({
        id,
        name,
        overview,
        vote_average,
        poster_path,
        first_air_date,
      }) => `<li class="series-item" data-id=${id}>
            <img src="${
              URLS.POSTER_URL
            }${poster_path}" class="series-poster" alt="series poster">
            <div class="series-info">
            <h2 class="series-title">${name}</h2>
            <p class="series-description">${overview}</p>
            <p class="series-premiere">Premiere date: ${first_air_date}</p>
            <span class="series-rate">Rating: ${vote_average.toFixed(2)}</span>
            </div>
          </li>`
    )
    .join('');

  refs2.seriesList.insertAdjacentHTML('beforeend', trendingSeries);
}
