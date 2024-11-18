import { refs2 } from '../refs2';

const POSTER_URL = `https://image.tmdb.org/t/p/w500`;

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
       <img src="${POSTER_URL}${poster_path}" class="series-poster" alt="series poster">
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
   
      </div>`;

  refs2.backdrop.classList.remove('is-hidden');
  refs2.modalWrapper.innerHTML = markup;

  refs2.backdrop.addEventListener('click', onBackdropClick);
  window.addEventListener('keydown', onEscKeyPress);
  refs2.closeBtn.addEventListener('click', onModalClose);
}

function onModalClose() {
  refs2.modalWrapper.innerHTML = '';

  refs2.backdrop.classList.add('is-hidden');
  // document.body.classList.remove('modal-open');

  refs2.backdrop.removeEventListener('click', onModalClose);
  refs2.closeBtn.removeEventListener('click', onModalClose);
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
