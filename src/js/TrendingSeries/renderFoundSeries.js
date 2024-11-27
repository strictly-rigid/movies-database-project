import { refs2 } from '../refs2';
import { URLS, genres } from '../constants';
import { getGenres } from '../helpers/getGenres';

export function renderFoundSeries(foundSeries) {
  const foundItems = foundSeries
    .map(
      ({
        id,
        genre_ids,
        name,
        overview,
        first_air_date,
        vote_average,
        vote_count,
        poster_path,
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
                 <span class="series-rate">Rating: ${vote_average.toFixed(
                   2
                 )}</span> 
                 <span class="series-rate-count">Total votes: ${vote_count}</span> 
          </div>     
          </li>`;
      }
    )
    .join('');

  refs2.list.insertAdjacentHTML('beforeend', foundItems);
}
