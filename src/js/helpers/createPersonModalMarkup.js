import { refs3 } from '../refs3';
import { genders } from '../constants';

const POSTER_URL = `https://image.tmdb.org/t/p/w500`;
const DEFAULT_IMAGE =
  'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg';

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

  const personImg = profile_path
    ? `${POSTER_URL}${profile_path}`
    : DEFAULT_IMAGE;
  const personGender = genders[gender] || 'Not specified';

  let markup = `<div class="person-item-detailed" id=${id}>
           <img src="${personImg}" class="person-image" alt="person image">
            <h2 class="modal-name modal-title">${name}</h2>
            <p class="gender"> <span class="modal-bold"> Gender:</span> ${personGender}</p>
            <p class="birthday"> <span class="modal-bold"> Born:</span> ${
              birthday || 'unknown'
            }</p>
            <p class="place_of_birth"> <span class="modal-bold"> Place of birth:</span> ${
              place_of_birth || 'unknown'
            }</span>
            <p class="known_for"> <span class="modal-bold"> Known for:</span> ${known_for_department}</p>
            <p class="biography"> <span class="modal-bold">Bio:</span> ${
              biography || 'no info'
            }</p>
            <p class="popularity"> <span class="modal-bold"> Popularity:</span> ${popularity}</span>
          </div>`;

  refs3.backdrop.classList.remove('is-hidden');
  refs3.modalWrapper.innerHTML = markup;

  refs3.backdrop.addEventListener('click', onBackdropClick);
  window.addEventListener('keydown', onEscKeyPress);
  refs3.closeBtn.addEventListener('click', onModalClose);
}

function onModalClose() {
  refs3.modalWrapper.innerHTML = '';

  refs3.backdrop.classList.add('is-hidden');
  // document.body.classList.remove('modal-open');

  refs3.backdrop.removeEventListener('click', onModalClose);
  refs3.closeBtn.removeEventListener('click', onModalClose);
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
