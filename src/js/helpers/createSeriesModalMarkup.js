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
       <img src="${POSTER_URL}${poster_path}" class="movie-poster" alt="movie poster">
        <h2 class="modal-title">${name}</h2>
        <span class="in-production">Still in production: ${in_production}</span>
        <span class="orig-country">Origin country:${origin_country}</span>
        <p class="fitst-air-date">First air date${first_air_date}</p>
        <p class="modal-series-description">Desription: ${overview}</p>
        <p class="modal-genres">Genres: ${genreNames}</p>
        <p class="created-by">Creators: ${creators}</p>
        <p class="languages">Spoken languages: ${languagesSpoken}</p>
        <span class="seasons">Number of seasons: ${number_of_seasons}</span>
        <span class="episodes">Number of episodes: ${number_of_episodes}</span>
        <span class="rating">Rating: ${vote_average}</span>
        <span class="vote-count">Total votes: ${vote_count}</span>
      </div>`;

  refs2.backdrop.classList.remove('is-hidden');
  refs2.modalWrapper.innerHTML = markup;

  //   refs.closeBtn = document.querySelector('.modal-close-btn');
  //   refs.closeBtn.addEventListener('click', onModalClose);
  //   window.addEventListener('keydown', onEscKeyPress);
  //   console.log(refs.closeBtn);
}
