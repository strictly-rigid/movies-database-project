import { refs2 } from '../refs2.js';
import { URLS, genres } from '../constants.js';
import { getGenres } from '../helpers/getGenres';

export function renderTrendingSeries(series) {
  const trendingSeries = series
    .map(
      ({
        id,
        name,
        overview,
        vote_average,
        poster_path,
        first_air_date,
        genre_ids,
      }) => {
        const genreNames = getGenres(genre_ids, genres);

        return `<li class="series-item" data-id=${id}>
            <img src="${
              URLS.POSTER_URL
            }${poster_path}" class="series-poster" alt="series poster">
            <div class="series-info">
            <h2 class="series-title">${name}</h2>
            <p class="series-description">${overview}</p>
            <p class="series-genres">Genres: ${genreNames || 'No data'}</p>
            <p class="series-premiere">Premiere date: ${first_air_date}</p>
            <span class="series-rate">Rating: ${vote_average.toFixed(2)}</span>
            </div>
          </li>`;
      }
    )
    .join('');

  refs2.list.insertAdjacentHTML('beforeend', trendingSeries);
}
