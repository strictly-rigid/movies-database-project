import { refs } from '../refs';
import { URLS, genres } from '../constants';

function getGenres(genre_ids) {
  return genre_ids
    .map(id => {
      const genre = genres.find(g => g.id === id);
      return genre ? genre.name : '';
    })
    .filter(Boolean)
    .join(', ');
}

export function renderFoundMovies(foundMovies) {
  const foundItems = foundMovies
    .map(
      ({
        id,
        genre_ids,
        original_title,
        overview,
        release_date,
        vote_average,
        vote_count,
        poster_path,
      }) => {
        const genreNames = getGenres(genre_ids);

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
                <p class="movie-genres">Release date: ${release_date}</p>
            <span class="movie-rate">Rating: ${vote_average.toFixed(2)}</span> 
                 <span class="movie-rate-count">Total votes: ${vote_count}</span> 
          </div>     
          </li>`;
      }
    )
    .join('');

  refs.moviesList.insertAdjacentHTML('beforeend', foundItems);
}
