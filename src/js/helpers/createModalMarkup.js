import { refs } from '../refs';
import { URLS } from '../constants';
import { notifyAddSuccess, notifyIsInFavorites } from './notifyWarnings';

let favoriteMoviesList =
  JSON.parse(localStorage.getItem('favorite_movies')) ?? [];

export async function createModalMarkup(data) {
  const {
    id,
    budget,
    genres,
    origin_country,
    title,
    original_title,
    release_date,
    revenue,
    runtime,
    spoken_languages,
    vote_average,
    vote_count,
    overview,
    poster_path,
  } = data;

  const genreNames = genres.map(genre => genre.name).join(', ');
  const languages = spoken_languages
    .map(language => language.english_name)
    .join(', ');

  let markup = `<div class="movie-item-detailed" id=${id}>
        <img src="${
          URLS.POSTER_URL
        }${poster_path}" class="movie-poster" alt="movie poster">
        <h2 class="modal-title">${title}</h2>
        <h3 class="modal-original-title"><span class="modal-bold">Original title</span>: ${original_title}</h3>
        <p class="modal-genres"><span class="modal-bold">Genres:</span> ${genreNames}</p>
        <p class="orig-country"><span class="modal-bold">Country of origin:</span> ${origin_country}</p>
        <p class="modal-release-date"><span class="modal-bold">Release date:</span> ${release_date}</p>
        <p class="modal-movie-description"><span class="modal-bold">Desription:</span> ${overview}</p>
        <p class="languages"><span class="modal-bold">Spoken languages:</span> ${languages}</p>
        <span class="budget"><span class="modal-bold">Budget:</span> $${(
          budget / 1000000
        ).toFixed()} mln</span>
        <span class="revenue"><span class="modal-bold">Revenue:</span> $${(
          revenue / 1000000
        ).toFixed()} mln</span>
        <p class="runtime"><span class="modal-bold">Time:</span> ${runtime} minutes</p>

         <div class="movies-modal-rate">
        <span class="rating"><span class="modal-bold">Rating:</span> ${vote_average}</span>
        <span class="vote-count"><span class="modal-bold">Total votes:</span> ${vote_count}</span>
        </div>

        <button type="button" class="movies-fav">Add to favorites</button>
      </div>`;

  refs.backdrop.classList.remove('is-hidden');
  refs.modalWrapper.innerHTML = markup;

  refs.backdrop.addEventListener('click', onBackdropClick);
  window.addEventListener('keydown', onEscKeyPress);
  refs.closeBtn.addEventListener('click', onModalClose);

  /* ======================  ADD TO FAVORITES ======================  */
  const addFavBtn = document.querySelector('.movies-fav');
  addFavBtn.addEventListener('click', () => addToFavorites(data));
}

function onModalClose() {
  refs.modalWrapper.innerHTML = '';

  refs.backdrop.classList.add('is-hidden');

  refs.backdrop.removeEventListener('click', onModalClose);
  refs.closeBtn.removeEventListener('click', onModalClose);
  window.removeEventListener('keydown', onEscKeyPress);
}

function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    onModalClose();
  }
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onModalClose();
  }
}

function addToFavorites(movie) {
  const inStorage = favoriteMoviesList.some(fav => fav.id === movie.id);
  const movieItem = {
    id: movie.id,
    title: movie.title,
    origTitle: movie.original_title,
    budget: movie.budget,
    languages: movie.spoken_languages,
    genres: movie.genres,
    originCountry: movie.origin_country,
    releaseDate: movie.release_date,
    posterPath: movie.poster_path,
    revenue: movie.revenue,
    runtime: movie.runtime,
    overview: movie.overview,
    voteAverage: movie.vote_average,
    voteCount: movie.vote_count,
  };

  if (!inStorage) {
    favoriteMoviesList.push(movieItem);
    localStorage.setItem('favorite_movies', JSON.stringify(favoriteMoviesList));
    notifyAddSuccess(movie.title);
  } else {
    notifyIsInFavorites(movie.title);
  }
}
