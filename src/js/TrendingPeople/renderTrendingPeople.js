import { refs3 } from '../refs3';
import { URLS, genders } from '../constants';

export function renderTrendingPeople(people) {
  const trendingPeople = people
    .map(({ id, name, gender, known_for_department, profile_path }) => {
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
          <div class="person-info">
            <h2 class="person-name">${name}</h2>
            <p class="person-gender">${personGender}</p>
            <p class="popular-movies">Known for: ${
              known_for_department || 'No data'
            } </p>
          </div>
          </li>`;
    })
    .join('');

  refs3.peopleList.insertAdjacentHTML('beforeend', trendingPeople);
}
