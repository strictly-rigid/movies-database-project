import { refs2 } from '../refs2';
import { genres } from '../constants';

const POSTER_URL = `https://image.tmdb.org/t/p/w500`;

function getGenres(genre_ids) {
  return genre_ids
    .map(id => {
      const genre = genres.find(g => g.id === id);
      return genre ? genre.name : '';
    })
    .filter(Boolean)
    .join(', ');
}

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
        const genreNames = getGenres(genre_ids);

        return `<li class="series-item" data-id=${id}>
            <img src="${POSTER_URL}${poster_path}" class="series-poster" alt="series poster">
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

  refs2.seriesList.insertAdjacentHTML('beforeend', foundItems);
}
