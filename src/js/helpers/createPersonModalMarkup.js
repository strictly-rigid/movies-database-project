import { refs3 } from '../refs3';

const POSTER_URL = `https://image.tmdb.org/t/p/w500`;

export async function createPersonModalMarkup(data) {
  const {
    id,
    birthday,
    biography,
    place_of_birth,
    gender,
    name,
    known_for_department,
    profile_path,
    popularity,
  } = data;
  console.log(data);

  let markup = `<div class="person-item-detailed" id=${id}>
           <img src="${POSTER_URL}${profile_path}" class="person-img" alt="person image">
            <h2 class="modal-name">${name}</h2>
            <span class="gender">Gender: ${gender}</span>
            <span class="birthday">Born: ${birthday}</span>
            <span class="place_of_birth">Place of birth:${place_of_birth}</span>
            <p class="known_for">Known for:${known_for_department}</p>
            <p class="biography">Bio: ${biography}</p>
            <span class="popularity">Popularity: ${popularity}</span>
          </div>`;

  refs3.backdrop.classList.remove('is-hidden');
  refs3.modalWrapper.innerHTML = markup;

  //   refs.closeBtn = document.querySelector('.modal-close-btn');
  //   refs.closeBtn.addEventListener('click', onModalClose);
  //   window.addEventListener('keydown', onEscKeyPress);
  //   console.log(refs.closeBtn);
}
