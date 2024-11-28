import { refs4 } from '../refs4';
import { URLS } from '../constants';

import { notifyDeleteSuccess } from '../helpers/notifyWarnings';

let favoriteMoviesList =
  JSON.parse(localStorage.getItem('favorite_movies')) ?? [];

export function renderFavoriteMovies(movies) {
  const favoriteMovies = movies
    .map(
      ({
        id,
        title,
        origTitle,
        budget,
        languages,
        genres,
        originCountry,
        releaseDate,
        posterPath,
        revenue,
        runtime,
        overview,
        voteAverage,
        voteCount,
      }) => {
        console.log(languages);
        const genreNames = genres.map(genre => genre.name).join(', ');

        const spokenLanguages = languages
          .map(language => language.english_name)
          .join(', ');

        return `<div class="movie-item-detailed-fav" id=${id}>
        <img src="${
          URLS.POSTER_URL
        }${posterPath}" class="movie-poster" alt="movie poster">
        <h2 class="modal-title" id="movieName">${title}</h2>
        <h3 class="modal-original-title"><span class="modal-bold">Original title</span>: ${origTitle}</h3>
        <p class="modal-genres"><span class="modal-bold">Genres:</span> ${genreNames}</p>
        <p class="orig-country"><span class="modal-bold">Country of origin:</span> ${originCountry}</p>
        <p class="modal-release-date"><span class="modal-bold">Release date:</span> ${releaseDate}</p>
        <p class="movie-description-fav"><span class="modal-bold">Desription:</span> ${overview}</p>
        <p class="languages"><span class="modal-bold">Spoken languages:</span> ${spokenLanguages}</p>
        <span class="budget"><span class="modal-bold">Budget:</span> $${(
          budget / 1000000
        ).toFixed()} mln</span>
        <span class="revenue"><span class="modal-bold">Revenue:</span> $${(
          revenue / 1000000
        ).toFixed()} mln</span>
        <p class="runtime"><span class="modal-bold">Time:</span> ${runtime} minutes</p>

         <div class="movies-modal-rate">
        <span class="rating"><span class="modal-bold">Rating:</span> ${voteAverage}</span>
        <span class="vote-count"><span class="modal-bold">Total votes:</span> ${voteCount}</span>
        </div>

          <button type="button" class="delete-btn-movies">Delete from favorites</button>
   
      </div>`;
      }
    )
    .join('');

  refs4.favMovies.insertAdjacentHTML('beforeend', favoriteMovies);

  const deleteBtns = document.querySelectorAll('.delete-btn-movies');
  deleteBtns.forEach(btn => {
    btn.addEventListener('click', event => {
      const movieItem = event.target.closest('.movie-item-detailed-fav');
      const deletedName = movieItem.querySelector('#movieName').innerText;
      deleteFromFavoriteMovies(event, deletedName);
    });
  });
}

function deleteFromFavoriteMovies(event, movieName) {
  const movieId = event.target.closest('.movie-item-detailed-fav').id;

  favoriteMoviesList = favoriteMoviesList.filter(movie => movie.id != movieId);

  localStorage.setItem('favorite_movies', JSON.stringify(favoriteMoviesList));

  event.target.closest('.movie-item-detailed-fav').remove();

  notifyDeleteSuccess(movieName);

  if (favoriteMoviesList.length === 0) {
    refs4.noResultsMovies.classList.remove('visually-hidden');
    refs4.favMoviesTitle.classList.add('visually-hidden');
  }
}
