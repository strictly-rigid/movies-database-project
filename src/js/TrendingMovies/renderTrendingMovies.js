import { refs } from '../refs';
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
        const genreNames = getGenres(genre_ids);
        return `<li class="movies-item" data-id=${id}>
            <img src="${POSTER_URL}${poster_path}" class="movie-poster" alt="movie poster">
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

  refs.moviesList.insertAdjacentHTML('beforeend', trendingMovies);
}
