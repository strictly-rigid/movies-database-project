import { refs3 } from '../refs3';
import { URLS, genders } from '../constants';

export function renderFoundPerson(foundPerson) {
  const foundItems = foundPerson
    .map(({ id, name, gender, profile_path }) => {
      const imageSrc = profile_path
        ? `${URLS.POSTER_URL}${profile_path}`
        : URLS.DEFAULT_IMAGE;

      const personGender = genders[gender] || 'Not specified';

      return `<li class="person-item" data-id=${id}>
            <img
              src="${imageSrc}"
              class="person-image"
              alt="person image"
            />
            <h2 class="person-name">${name}</h2>
            <p class="person-gender">${personGender}</p>
          
          </li>`;
    })
    .join('');

  refs3.peopleList.insertAdjacentHTML('beforeend', foundItems);
}
