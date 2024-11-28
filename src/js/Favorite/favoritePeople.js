import { refs4 } from '../refs4';
import { genders, URLS } from '../constants';

import { notifyDeleteSuccess } from '../helpers/notifyWarnings';

let favoritePeopleList =
  JSON.parse(localStorage.getItem('favorite_people')) ?? [];

export function renderFavoritePeople(people) {
  const favoritePeople = people
    .map(
      ({
        id,
        name: personName,
        gender,
        birthday,
        biography,
        knownFor,
        placeOfBirth,
        profile_path,
        popularity,
      }) => {
        const personGender = genders[gender] || 'Not specified';
        const personImg = profile_path
          ? `${URLS.POSTER_URL}${profile_path}`
          : URLS.DEFAULT_IMAGE;

        return `<div class="person-item-detailed-fav" id=${id}>
           <img src="${personImg}" class="person-image" alt="person image">
            <h2 class="modal-name modal-title" id="personName">${personName}</h2>
            <p class="gender"> <span class="modal-bold"> Gender:</span> ${personGender}</p>
            <p class="birthday"> <span class="modal-bold"> Born:</span> ${
              birthday || 'unknown'
            }</p>
            <p class="place_of_birth"> <span class="modal-bold"> Place of birth:</span> ${
              placeOfBirth || 'unknown'
            }</span>
            <p class="known_for"> <span class="modal-bold"> Known for:</span> ${
              knownFor || 'No data'
            }</p>
            <p class="biography-fav"> <span class="modal-bold"> Bio:</span> ${
              biography || 'no info'
            }</p>
            <p class="popularity"> <span class="modal-bold"> Popularity:</span> ${popularity}</p>
            <button type="button" class="delete-btn-people">Delete from favorites</button>
          </div>`;
      }
    )
    .join('');

  refs4.favPeople.insertAdjacentHTML('beforeend', favoritePeople);

  const deleteBtns = document.querySelectorAll('.delete-btn-people');
  deleteBtns.forEach(btn => {
    btn.addEventListener('click', event => {
      const personItem = event.target.closest('.person-item-detailed-fav');
      const deletedName = personItem.querySelector('#personName').innerText;
      deleteFromFavoritePeople(event, deletedName);
    });
  });
}

function deleteFromFavoritePeople(event, personName) {
  const personId = event.target.closest('.person-item-detailed-fav').id;

  favoritePeopleList = favoritePeopleList.filter(
    person => person.id != personId
  );

  localStorage.setItem('favorite_people', JSON.stringify(favoritePeopleList));

  event.target.closest('.person-item-detailed-fav').remove();

  notifyDeleteSuccess(personName);

  if (favoritePeopleList.length === 0) {
    refs4.noResultsPeople.classList.remove('visually-hidden');
    refs4.favPeopleTitle.classList.add('visually-hidden');
  }
}
