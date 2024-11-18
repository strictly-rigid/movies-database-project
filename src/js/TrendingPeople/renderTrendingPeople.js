import { refs3 } from '../refs3';
import { genders } from '../constants';

const POSTER_URL = `https://image.tmdb.org/t/p/w500`;
const DEFAULT_IMAGE =
  'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg';

export function renderTrendingPeople(people) {
  console.log(people);
  const trendingPeople = people
    .map(({ id, name, gender, known_for_department, profile_path }) => {
      // const titles = known_for.map(item => item.title || item.name).join(', ');

      const imageSrc = profile_path
        ? `${POSTER_URL}${profile_path}`
        : DEFAULT_IMAGE;

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
