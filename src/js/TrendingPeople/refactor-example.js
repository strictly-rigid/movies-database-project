import axios from 'axios';
import { refs3 } from '../refs3';
import {
  URLS,
  trendingObserverOptions,
  searchObserverOptions,
} from '../constants';
import { renderTrendingPeople } from './renderTrendingPeople';
import { renderFoundPerson } from './renderFoundPerson';
import { searchPerson } from './searchPerson';
import { fetchSinglePerson } from './fetchSinglePerson';
import { createPersonModalMarkup } from '../helpers/createPersonModalMarkup';
import { notifyEndResults, notifyNoResults } from '../helpers/notifyWarnings';

const API_KEY = '86bcaf318e232372b2e8e2623c959f88';

let query = '';
let currentPage = 1;
let currentSearchPage = 1;
let isLoading = false;

/* ====================== TRENDING PEOPLE ====================== */

async function fetchData(url, params = {}) {
  try {
    isLoading = true;
    const response = await axios.get(url, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  } finally {
    isLoading = false;
  }
}

async function fetchTrendingPeople(page = 1) {
  const data = await fetchData(URLS.BASE_PEOPLE_URL, {
    api_key: API_KEY,
    page,
  });

  if (data.total_pages === currentPage) {
    notifyEndResults();
    trendingObserver.disconnect();
  }

  return data.results;
}

function setupObserver(callback, options) {
  return new IntersectionObserver(callback, options);
}

const trendingObserver = setupObserver(
  handleTrendingLoad,
  trendingObserverOptions
);

function handleTrendingLoad(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting && !isLoading) {
      currentPage += 1;
      fetchTrendingPeople(currentPage).then(renderTrendingPeople);
    }
  });
}

function initTrendingPeople() {
  fetchTrendingPeople(currentPage)
    .then(renderTrendingPeople)
    .then(() => trendingObserver.observe(refs3.targetObserverPeople))
    .catch(error =>
      console.error('Error initializing trending people:', error.message)
    );
}

/* ====================== SEARCH PEOPLE ====================== */

async function performSearch(page = 1) {
  const data = await searchPerson(API_KEY, URLS.SEARCH_PERSON_URL, query, page);

  if (data.data.total_pages === page || data.data.total_results <= 20) {
    notifyEndResults();
    searchObserver.disconnect();
  }

  return data.data.results;
}

function handleSearchSubmit(event) {
  event.preventDefault();

  query = refs3.form.searchQuery.value.trim();
  if (!query) return;

  resetSearchState();

  performSearch(currentSearchPage)
    .then(results => {
      if (results.length > 0) {
        renderFoundPerson(results);
        searchObserver.observe(refs3.targetObserverSearch);
      } else {
        notifyNoResults();
        refs3.endResultsInfo.classList.remove('visually-hidden');
      }
    })
    .catch(error => console.error('Error searching for people:', error.message))
    .finally(() => {
      refs3.form.searchQuery.value = '';
    });
}

function resetSearchState() {
  trendingObserver.disconnect();
  searchObserver.disconnect();
  refs3.peopleList.innerHTML = '';
  refs3.endResultsInfo.classList.add('visually-hidden');
  currentSearchPage = 1;
}

const searchObserver = setupObserver(handleSearchLoad, searchObserverOptions);

function handleSearchLoad(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting && !isLoading) {
      currentSearchPage += 1;
      performSearch(currentSearchPage).then(renderFoundPerson);
    }
  });
}

/* ====================== PERSON DETAILS ====================== */

async function showPersonDetails(event) {
  event.preventDefault();

  const target = event.target.closest('.person-item');
  if (!target) return;

  const personId = target.getAttribute('data-id');
  try {
    const personData = await fetchSinglePerson(
      API_KEY,
      URLS.SINGLE_PERSON_URL,
      personId
    );
    createPersonModalMarkup(personData);
  } catch (error) {
    console.error('Error fetching person details:', error.message);
  }
}

/* ====================== EVENT LISTENERS ====================== */

function initializeEventListeners() {
  refs3.form.addEventListener('submit', handleSearchSubmit);
  refs3.peopleContainer.addEventListener('click', showPersonDetails);
}

/* ====================== INIT ====================== */

function init() {
  initializeEventListeners();
  initTrendingPeople();
}

init();
