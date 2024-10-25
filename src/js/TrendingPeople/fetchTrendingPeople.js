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
let currentSearchPage = 1;
let isLoading = false;

/* ====================== TRENDING ======================  */

async function fetchTrendingPeople(key, url, currentPage) {
  try {
    isLoading = true;
    const response = await axios.get(
      `${url}?api_key=${key}&page=${currentPage}`
    );
    console.log(response);
    const dataPeople = response.data.results;
    return dataPeople;
  } catch (error) {
    console.log('Error fetching trending people:', error.message);
  } finally {
    isLoading = false;
  }
}

const trendingObserverOptions = {
  root: null,
  rootMargin: '400px',
  threshold: 1.0,
};

let trendingObserver = new IntersectionObserver(
  onLoadMoreTrending,
  trendingObserverOptions
);
function onLoadMoreTrending(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      currentPage += 1;
      fetchTrendingPeople(API_KEY, URLS.BASE_PEOPLE_URL, currentPage).then(
        data => renderTrendingPeople(data)
      );
    }
  });
}

fetchTrendingPeople(API_KEY, URLS.BASE_PEOPLE_URL, currentPage)
  .then(data => renderTrendingPeople(data))
  .then(() => trendingObserver.observe(refs3.targetObserverPeople))
  .catch(err => console.log(err));

/* ====================== SEARCH ======================  */

refs3.form.addEventListener('submit', searchByName);

async function searchByName(e) {
  e.preventDefault();

  trendingObserver.unobserve(refs3.targetObserverPeople);
  refs3.backdrop.classList.add('is-hidden');
  query = refs3.form.searchQuery.value.trim();

  try {
    refs3.peopleList.innerHTML = '';

    const personData = await searchPerson(
      API_KEY,
      URLS.SEARCH_PERSON_URL,
      query,
      currentSearchPage
    );

    if (personData && personData.length > 0) {
      renderFoundPerson(personData);
    }
  } catch (error) {
    console.log('Error fetching person:', error.message);
  } finally {
    searchObserver.observe(refs3.targetObserverSearch);
    refs3.form.searchQuery.value = '';
  }
}

const searchObserverOptions = {
  root: null,
  rootMargin: '400px',
  threshold: 1.0,
};

let searchObserver = new IntersectionObserver(
  onLoadMoreSearch,
  searchObserverOptions
);

function onLoadMoreSearch(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      currentSearchPage += 1;
      searchPerson(
        API_KEY,
        URLS.SEARCH_PERSON_URL,
        query,
        currentSearchPage
      ).then(dataFound => renderFoundPerson(dataFound));
    }
  });
}

/* ====================== PERSON'S DETAILS ======================  */

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
