import { refs3 } from '../refs3';

// const trendingPeopleList = document.querySelector('.series-list');
// console.log(trendingPeopleList);

const POSTER_URL = `https://image.tmdb.org/t/p/w500`;

export function renderTrendingPeople(people) {
  const trendingPeople = people
    .map(({ name, gender, known_for, profile_path }) => {
      const titles = known_for.map(item => item.title || item.name).join(', ');
      return `<li class="movies-item">
            <img
              src="${POSTER_URL}${profile_path}"
              class="person image"
              alt="person image"
            />
            <h2 class="person-name">${name}</h2>
            <p class="person-gender">${gender}</p>
            <p class="popular-movies">${titles}</p>
          </li>`;
    })
    .join('');

  refs3.trendingPeopleList.insertAdjacentHTML('beforeend', trendingPeople);
}
