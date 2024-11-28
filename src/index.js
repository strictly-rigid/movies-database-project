import dotenv from 'dotenv';

import { refs } from './js/refs';
import {
  URLS,
  trendingObserverOptions,
  searchObserverOptions,
} from './js/constants.js';

import { renderTrendingMovies } from './js/TrendingMovies/renderTrendingMovies.js';
import { renderFoundMovies } from './js/TrendingMovies/renderFoundMovies.js';

import { searchMovie } from './js/TrendingMovies/searchMovie.js';
import { fetchSingleMovie } from './js/TrendingMovies/fetchSingleMovie.js';
import { createModalMarkup } from './js/helpers/createModalMarkup.js';
import {
  notifyEndResults,
  notifyNoResults,
} from './js/helpers/notifyWarnings.js';
import { fetchData } from './js/helpers/fetchers.js';
import { setNewObserver } from './js/helpers/setNewObserver.js';

dotenv.config();

// const API_KEY = '86bcaf318e232372b2e8e2623c959f88';
const API_KEY = process.env.API_KEY;

let query = '';
let currentPage = 1;
let currentSearchPage = 1;

/* ====================== TRENDING ======================  */

async function fetchTrendingMovies(currentPage) {
  try {
    const response = await fetchData(URLS.BASE_MOVIES_URL, {
      api_key: API_KEY,
      page: currentPage,
    });

    if (response.total_pages === currentSearchPage) {
      notifyEndResults();
      trendingObserver.unobserve(refs.targetObserver);
    }
    const dataMovies = response.results;
    return dataMovies;
  } catch (error) {
    console.log('Error fetching trending movies:', error.message);
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
      fetchTrendingMovies(currentPage).then(data => renderTrendingMovies(data));
    }
  });
}

// Initializing fetch request for trending

fetchTrendingMovies(currentPage)
  .then(data => renderTrendingMovies(data))
  .then(() => trendingObserver.observe(refs.targetObserver))
  .catch(err => console.log(err));

/* ====================== SEARCH ======================  */
refs.form.addEventListener('submit', searchByName);

async function searchByName(e) {
  e.preventDefault();

  refs.backdrop.classList.add('is-hidden');
  query = refs.form.searchQuery.value.trim();

  resetState();

  try {
    const moviesData = await searchMovie(
      API_KEY,
      URLS.SEARCH_MOVIE_URL,
      query,
      currentSearchPage
    );

    const { results, total_results } = moviesData.data;

    if (results && results.length > 0) {
      renderFoundMovies(results);
      searchObserver.observe(refs.targetObserverSearch);
    } else {
      refs.endResultsInfo.classList.remove('visually-hidden');
      notifyNoResults();
    }

    if (
      total_results &&
      total_results <= 20 &&
      moviesData.data.total_pages === currentSearchPage
    ) {
      notifyEndResults();
      searchObserver.unobserve(refs.targetObserverSearch);
    }
  } catch (error) {
    console.log('Error fetching movies:', error.message);
  } finally {
    refs.form.searchQuery.value = '';
  }
}

function resetState() {
  trendingObserver.unobserve(refs.targetObserver);
  searchObserver.unobserve(refs.targetObserverSearch);

  refs.list.innerHTML = '';
  refs.endResultsInfo.classList.add('visually-hidden');

  currentSearchPage = 1;
}

const searchObserver = setNewObserver(onLoadMoreSearch, searchObserverOptions);

function onLoadMoreSearch(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      currentSearchPage += 1;
      searchMovie(
        API_KEY,
        URLS.SEARCH_MOVIE_URL,
        query,
        currentSearchPage
      ).then(dataFound => {
        const { results } = dataFound.data;
        renderFoundMovies(results);
      });
    }
  });
}

/* ======================  MOVIE'S DETAILS ======================  */

refs.dataContainer.addEventListener('click', onMoviesItemClick);

async function onMoviesItemClick(e) {
  e.preventDefault();

  const targetElement = e.target.closest('.movies-item');
  if (targetElement) {
    const dataId = targetElement.getAttribute('data-id');
    const data = await fetchSingleMovie(API_KEY, URLS.SINGLE_MOVIE_URL, dataId);
    createModalMarkup(data);
  }
}
