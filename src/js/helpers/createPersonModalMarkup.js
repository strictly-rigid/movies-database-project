import { refs3 } from '../refs3';
import { URLS, genders } from '../constants';
import { onBackdropClick, onEscKeyPress } from './onCloseFunctions';

import { notifyAddSuccess, notifyIsInFavorites } from './notifyWarnings';

const favoritePeopleList =
  JSON.parse(localStorage.getItem('favorite_people')) ?? [];

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
    ? `${URLS.POSTER_URL}${profile_path}`
    : URLS.DEFAULT_IMAGE;
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
            <p class="known_for"> <span class="modal-bold"> Known for:</span> ${
              known_for_department || 'No data'
            }</p>
            <p class="biography"> <span class="modal-bold">Bio:</span> ${
              biography || 'no info'
            }</p>
            <p class="popularity"> <span class="modal-bold"> Popularity:</span> ${popularity}</p>
            <button type="button" class="person-fav">Add to favorites</button>
          </div>`;

  refs3.backdrop.classList.remove('is-hidden');
  refs3.modalWrapper.innerHTML = markup;

  refs3.backdrop.addEventListener('click', event =>
    onBackdropClick(event, onModalClose)
  );
  window.addEventListener('keydown', event =>
    onEscKeyPress(event, onModalClose)
  );
  refs3.closeBtn.addEventListener('click', onModalClose);

  /* ======================  ADD TO FAVORITES ======================  */
  const addFavBtn = document.querySelector('.person-fav');
  addFavBtn.addEventListener('click', () => addToFavorites(data));
}

function onModalClose() {
  refs3.modalWrapper.innerHTML = '';

  refs3.backdrop.classList.add('is-hidden');
  // document.body.classList.remove('modal-open');

  refs3.backdrop.removeEventListener('click', onModalClose);
  refs3.closeBtn.removeEventListener('click', onModalClose);
  window.removeEventListener('keydown', onEscKeyPress);
}

function addToFavorites(person) {
  const inStorage = favoritePeopleList.some(fav => fav.id === person.id);
  const personItem = {
    id: person.id,
    name: person.name,
    gender: person.gender,
    birthday: person.birthday,
    biography: person.biography,
    knownFor: person.known_for_department,
    placeOfBirth: person.place_of_birth,
    profile_path: person.profile_path,
    popularity: person.popularity,
  };

  if (!inStorage) {
    favoritePeopleList.push(personItem);
    localStorage.setItem('favorite_people', JSON.stringify(favoritePeopleList));
    notifyAddSuccess(person.name);
  } else {
    notifyIsInFavorites(person.name);
  }
}
