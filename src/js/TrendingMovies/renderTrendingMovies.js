import { refs } from '../refs';
import { URLS, genres } from '../constants';
import { getGenres } from '../helpers/getGenres';

export function renderTrendingMovies(movies) {
  const trendingMovies = movies
    .map(
      ({
        id,
        genre_ids,
        original_title,
        overview,
        vote_average,
        poster_path,
      }) => {
        const genreNames = getGenres(genre_ids, genres);
        return `<li class="movies-item" data-id=${id}>
            <img src="${
              URLS.POSTER_URL
            }${poster_path}" class="movie-poster" alt="movie poster">
            <div class="movie-info">
            <h2 class="movie-title">${original_title}</h2>
            <p class="movie-description">${overview}</p>
            <p class="movie-genres">Genres: ${
              genreNames || 'Sorry, no genres available'
            }</p>
            <span class="movie-rate">Rating: ${vote_average.toFixed(2)}</span> 
          </div>
     
          </li>`;
      }
    )
    .join('');

  refs.list.insertAdjacentHTML('beforeend', trendingMovies);
}
