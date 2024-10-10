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

        return `<li class="movies-item" data-id=${id}>
            <img src="${POSTER_URL}${poster_path}" class="movie-poster" alt="movie poster">
            <div class="movie-info">
            <h2 class="movie-title">${name}</h2>
            <p class="movie-description">${overview}</p>
              <p class="movie-genres">Genres: ${
                genreNames || 'Sorry, no genres available'
              }</p>
                <p class="series-premiere">Premiere date: ${first_air_date}</p>
                 <span class="movie-rate">Rating: ${vote_average.toFixed(
                   2
                 )}</span> 
                 <span class="movie-rate-count">Total votes: ${vote_count}</span> 
          </div>     
          </li>`;
      }
    )
    .join('');

  refs2.seriesList.insertAdjacentHTML('beforeend', foundItems);
}
