import { refs4 } from '../refs4';
import { genders } from '../constants';
import { notifyDeleteSuccess } from '../helpers/notifyWarnings';

let favoriteList = JSON.parse(localStorage.getItem('favorites')) ?? [];

const POSTER_URL = `https://image.tmdb.org/t/p/w500`;
const DEFAULT_IMAGE =
  'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg';

console.log(favoriteList);

if (favoriteList.length) {
  refs4.noResultsPeople.classList.add('visually-hidden');
}

function renderFavoritePeople(people) {
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
          ? `${POSTER_URL}${profile_path}`
          : DEFAULT_IMAGE;

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
            <p class="biography"> <span class="modal-bold"> Bio:</span> ${
              biography || 'no info'
            }</p>
            <p class="popularity"> <span class="modal-bold"> Popularity:</span> ${popularity}</p>
            <button type="button" class="delete-btn">Delete from favorites</button>
          </div>`;
      }
    )
    .join('');

  refs4.favPeople.insertAdjacentHTML('beforeend', favoritePeople);

  const deleteBtns = document.querySelectorAll('.delete-btn');
  deleteBtns.forEach(btn => {
    btn.addEventListener('click', event => {
      const personItem = event.target.closest('.person-item-detailed-fav');
      const deletedName = personItem.querySelector('#personName').innerText;
      deleteFromFavorite(event, deletedName);
    });
  });
}

renderFavoritePeople(favoriteList);

function deleteFromFavorite(event, personName) {
  const personId = event.target.closest('.person-item-detailed-fav').id;

  favoriteList = favoriteList.filter(person => person.id != personId);

  localStorage.setItem('favorites', JSON.stringify(favoriteList));

  event.target.closest('.person-item-detailed-fav').remove();

  notifyDeleteSuccess(personName);

  if (favoriteList.length === 0) {
    refs4.noResultsPeople.classList.remove('visually-hidden');
  }
}
