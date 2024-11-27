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
import { fetchData } from '../helpers/fetchers';
import { setNewObserver } from '../helpers/setNewObserver';

const API_KEY = process.env.API_KEY;
let query = '';
let currentPage = 1;
let currentSearchPage = 1;

/* ====================== TRENDING ======================  */

async function fetchTrendingPeople(currentPage) {
  try {
    const response = await fetchData(URLS.BASE_PEOPLE_URL, {
      api_key: API_KEY,
      page: currentPage,
    });

    if (response.total_pages === currentSearchPage) {
      notifyEndResults();
      trendingObserver.unobserve(refs3.targetObserverPeople);
    }
    const dataPeople = response.results;
    return dataPeople;
  } catch (error) {
    console.log('Error fetching trending people:', error.message);
  } finally {
    isLoading = false;
  }
}

const trendingObserver = setNewObserver(
  onLoadMoreTrending,
  trendingObserverOptions
);

function onLoadMoreTrending(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      currentPage += 1;
      fetchTrendingPeople(currentPage).then(data => renderTrendingPeople(data));
    }
  });
}

// Initializing fetch request for trending

fetchTrendingPeople(currentPage)
  .then(data => renderTrendingPeople(data))
  .then(() => trendingObserver.observe(refs3.targetObserverPeople))
  .catch(err => console.log(err));

/* ====================== SEARCH ======================  */

refs3.form.addEventListener('submit', searchByName);

async function searchByName(e) {
  e.preventDefault();

  refs3.backdrop.classList.add('is-hidden');
  query = refs3.form.searchQuery.value.trim();

  resetState();

  try {
    const personData = await searchPerson(
      API_KEY,
      URLS.SEARCH_PERSON_URL,
      query,
      currentSearchPage
    );

    const { results, total_results } = personData.data;

    if (results && results.length > 0) {
      renderFoundPerson(results);
      searchObserver.observe(refs3.targetObserverSearch);
    } else {
      refs3.endResultsInfo.classList.remove('visually-hidden');
      notifyNoResults();
    }

    if (
      total_results &&
      total_results <= 20 &&
      personData.data.total_pages === currentSearchPage
    ) {
      notifyEndResults();
      searchObserver.unobserve(refs3.targetObserverSearch);
    }
  } catch (error) {
    console.log('Error fetching person:', error.message);
  } finally {
    refs3.form.searchQuery.value = '';
  }
}

function resetState() {
  trendingObserver.unobserve(refs3.targetObserverPeople);
  searchObserver.unobserve(refs3.targetObserverSearch);

  refs3.peopleList.innerHTML = '';
  refs3.endResultsInfo.classList.add('visually-hidden');

  currentSearchPage = 1;
}

const searchObserver = setNewObserver(onLoadMoreSearch, searchObserverOptions);

function onLoadMoreSearch(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      currentSearchPage += 1;
      searchPerson(
        API_KEY,
        URLS.SEARCH_PERSON_URL,
        query,
        currentSearchPage
      ).then(dataFound => {
        const { results } = dataFound.data;
        renderFoundPerson(results);
      });
    }
  });
}

/* ====================== PERSON'S DETAILS ======================  */

refs3.peopleContainer.addEventListener('click', onPersonItemClick);

async function onPersonItemClick(e) {
  e.preventDefault();

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
