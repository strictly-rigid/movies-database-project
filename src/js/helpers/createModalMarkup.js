import { refs } from '../refs';

const POSTER_URL = `https://image.tmdb.org/t/p/w500`;

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
        <img src="${POSTER_URL}${poster_path}" class="movie-poster" alt="movie poster">
        <h2 class="modal-title">${title}</h2>
        <h3 class="modal-original-title">Original title: ${original_title}</h3>
        <p class="orig-country">Country of origin: ${origin_country}</p>
        <p class="modal-release-date">Release date: ${release_date}</p>
        <p class="modal-movie-description">Desription: ${overview}</p>
        <p class="modal-genres">Genres: ${genreNames}</p>
        <p class="languages">Spoken languages: ${languages}</p>
        <span class="budget">Budget: $${(budget / 1000000).toFixed()} mln</span>
        <span class="revenue">Revenue: $${(
          revenue / 1000000
        ).toFixed()} mln</span>
        <p class="runtime">Time: ${runtime} minutes</p>
        <span class="rating">Rating: ${vote_average}</span>
        <span class="vote-count">Total votes: ${vote_count}</span>
      </div>`;

  refs.backdrop.classList.remove('is-hidden');
  refs.modalWrapper.innerHTML = markup;

  //   refs.closeBtn = document.querySelector('.modal-close-btn');
  //   refs.closeBtn.addEventListener('click', onModalClose);
  //   window.addEventListener('keydown', onEscKeyPress);
  //   console.log(refs.closeBtn);
}

if (refs?.closeBtn) {
  refs.closeBtn.addEventListener('click', onModalClose);
}

function onModalClose() {
  refs.modalWrapper.innerHTML = '';

  refs.backdrop.classList.toggle('is-hidden');
  // document.body.classList.remove('modal-open');

  // refs.backdrop.removeEventListener('click', onModalClose);
  // refs.closeBtn.removeEventListener('click', onModalClose);
  // window.removeEventListener('keydown', onEscKeyPress);
}
