import { refs2 } from '../refs2';
import { URLS } from '../constants';

import { onBackdropClick, onEscKeyPress } from './onCloseFunctions';
import { notifyAddSuccess, notifyIsInFavorites } from './notifyWarnings';

let favoriteSeriesList =
  JSON.parse(localStorage.getItem('favorite_series')) ?? [];

export async function createSeriesModalMarkup(data) {
  const {
    id,
    created_by,
    in_production,
    languages,
    genres,
    origin_country,
    name,
    first_air_date,
    number_of_seasons,
    number_of_episodes,
    vote_average,
    vote_count,
    overview,
    poster_path,
  } = data;

  const genreNames = genres.map(genre => genre.name).join(', ');
  const languagesSpoken = languages.map(language => language).join(', ');
  const creators = created_by.map(creator => creator.name).join(', ');

  let markup = `<div class="series-item-detailed" id=${id}>
       <img src="${URLS.POSTER_URL}${poster_path}" class="series-poster" alt="series poster">
        <h2 class="modal-title">${name}</h2>
        <p class="modal-genres"><span class="modal-bold">Genres:</span> ${genreNames}</p>
       
        <p class="orig-country"><span class="modal-bold">Origin country:</span> ${origin_country}</p>
        <p class="in-production"><span class="modal-bold">Still in production:</span> ${in_production}</p>
      

     
        <p class="first-air-date"><span class="modal-bold">First air date:</span> ${first_air_date}</p>
        <p class="modal-series-description"><span class="modal-bold">Desription:</span> ${overview}</p>
      
        <p class="created-by"><span class="modal-bold">Creators:</span> ${creators}</p>
        <p class="languages"><span class="modal-bold">Spoken languages:</span> ${languagesSpoken}</p>
        <div class="series-length">
        <span class="seasons"><span class="modal-bold">Number of seasons:</span> ${number_of_seasons}</span>
        <span class="episodes"><span class="modal-bold">Number of episodes:</span> ${number_of_episodes}</span>
        </div>

        <div class="series-modal-rate">
         <span class="rating"><span class="modal-bold">Rating:</span> ${vote_average}</span>
         <span class="vote-count"><span class="modal-bold">Total votes:</span> ${vote_count}</span>
         </div>

         <button type="button" class="series-fav">Add to favorites</button>
   
      </div>`;

  refs2.backdrop.classList.remove('is-hidden');
  refs2.modalWrapper.innerHTML = markup;

  refs2.backdrop.addEventListener('click', event =>
    onBackdropClick(event, onModalClose)
  );
  window.addEventListener('keydown', event =>
    onEscKeyPress(event, onModalClose)
  );
  refs2.closeBtn.addEventListener('click', onModalClose);

  /* ======================  ADD TO FAVORITES ======================  */
  const addFavBtn = document.querySelector('.series-fav');
  addFavBtn.addEventListener('click', () => addToFavorites(data));
}

function onModalClose() {
  refs2.modalWrapper.innerHTML = '';

  refs2.backdrop.classList.add('is-hidden');

  refs2.backdrop.removeEventListener('click', onModalClose);
  refs2.closeBtn.removeEventListener('click', onModalClose);
  window.removeEventListener('keydown', onEscKeyPress);
}

function addToFavorites(series) {
  const inStorage = favoriteSeriesList.some(fav => fav.id === series.id);
  const seriesItem = {
    id: series.id,
    name: series.name,
    createdBy: series.created_by,
    inProduction: series.in_production,
    languages: series.languages,
    genres: series.genres,
    originCountry: series.origin_country,
    posterPath: series.poster_path,
    firstAir: series.first_air_date,
    numberSeasons: series.number_of_seasons,
    numberEpisodes: series.number_of_episodes,
    overview: series.overview,
    voteAverage: series.vote_average,
    voteCount: series.vote_count,
  };

  if (!inStorage) {
    favoriteSeriesList.push(seriesItem);
    localStorage.setItem('favorite_series', JSON.stringify(favoriteSeriesList));
    notifyAddSuccess(series.name);
  } else {
    notifyIsInFavorites(series.name);
  }
}
