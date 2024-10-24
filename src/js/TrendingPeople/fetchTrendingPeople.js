import axios from 'axios';
import { refs3 } from '../refs3';
import { URLS } from '../constants';
import { renderTrendingPeople } from './renderTrendingPeople';
import { renderFoundPerson } from './renderFoundPerson';

import { searchPerson } from './searchPerson';

import { fetchSinglePerson } from './fetchSinglePerson';
import { createPersonModalMarkup } from '../helpers/createPersonModalMarkup';

const API_KEY = '86bcaf318e232372b2e8e2623c959f88';
let query = '';

let currentPage = 1;
let isLoading = false;

export async function fetchTrendingPeople(key, url, currentPage) {
  try {
    isLoading = true;
    const response = await axios.get(
      `${url}?api_key=${key}&page=${currentPage}`
    );
    // console.log(response);
    const dataPeople = response.data.results;
    return dataPeople;
  } catch (error) {
    console.log('Error fetching trending people:', error.message);
  } finally {
    isLoading = false;
  }
}

let options = {
  root: null,
  rootMargin: '400px',
  threshold: 1.0,
};

let observer = new IntersectionObserver(onLoadMore, options);
function onLoadMore(entries, observer) {
  console.log(entries);
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      currentPage += 1;
      if (!query) {
        fetchTrendingPeople(API_KEY, URLS.BASE_PEOPLE_URL, currentPage).then(
          data => renderTrendingPeople(data)
        );
      } else {
        fetchPerson();
      }
    }
  });
}

// if (document.body.id === 'people-page') {
//   fetchTrendingPeople(API_KEY, URLS.BASE_PEOPLE_URL, currentPage)
//     .then(data => renderTrendingPeople(data))
//     .then(() => observer.observe(refs3.targetObserverPeople))
//     .catch(err => console.log(err));
// }

fetchTrendingPeople(API_KEY, URLS.BASE_PEOPLE_URL, currentPage)
  .then(data => renderTrendingPeople(data))
  .then(() => observer.observe(refs3.targetObserverPeople))
  .catch(err => console.log(err));

/* ====================== DETAILS ======================  */

refs3.peopleContainer.addEventListener('click', onPersonItemClick);

async function onPersonItemClick(e) {
  e.preventDefault();
  console.log('Hellow from callback');
  const targetElement = e.target.closest('.person-item');
  if (targetElement) {
    const dataId = targetElement.getAttribute('data-id');
    const data = await fetchSinglePerson(
      API_KEY,
      URLS.SINGLE_PERSON_URL,
      dataId
    );
    createPersonModalMarkup(data);
  }
}

/* ====================== SEARCH ======================  */

refs3.form.addEventListener('submit', fetchPerson);

async function fetchPerson(e) {
  // e.preventDefault();
  if (e) {
    e.preventDefault();
  }
  observer.unobserve(refs3.targetObserverPeople);
  refs3.backdrop.classList.add('is-hidden');
  query = refs3.form.searchQuery.value.trim();
  try {
    const personData = await searchPerson(
      API_KEY,
      URLS.SEARCH_PERSON_URL,
      query
    );
    renderFoundPerson(personData);
  } catch (error) {
    console.log('Error fetching person:', error.message);
  } finally {
    observer.observe(refs3.targetObserverPeople);
  }
}
