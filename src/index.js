import { refs } from './js/refs';
import axios from 'axios';
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

const API_KEY = '86bcaf318e232372b2e8e2623c959f88';
const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/week';

let query = '';
let currentPage = 1;
let currentSearchPage = 1;
let isSearching = false;

/* ====================== TRENDING ======================  */

async function fetchTrendingMovies(key, url, currentPage) {
  try {
    isLoading = true;
    const response = await axios.get(
      `${url}?api_key=${key}&page=${currentPage}`
    );

    if (response.data.total_pages === currentSearchPage) {
      notifyEndResults();
      trendingObserver.unobserve(refs.targetObserverMovies);
    }
    const dataMovies = response.data.results;
    return dataMovies;
  } catch (error) {
    console.log('Error fetching trending movies:', error.message);
  } finally {
    isLoading = false;
  }
}

let trendingObserver = new IntersectionObserver(
  onLoadMoreTrending,
  trendingObserverOptions
);
function onLoadMoreTrending(entries, observer) {
  console.log(entries);
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      currentPage += 1;
      fetchTrendingMovies(API_KEY, URLS.BASE_MOVIES_URL, currentPage).then(
        data => renderTrendingMovies(data)
      );
    }
  });
}

fetchTrendingMovies(API_KEY, URLS.BASE_MOVIES_URL, currentPage)
  .then(data => renderTrendingMovies(data))
  .then(() => trendingObserver.observe(refs.targetObserverMovies))
  .catch(err => console.log(err));

/* ====================== SEARCH ======================  */
refs.form.addEventListener('submit', searchByName);

async function searchByName(e) {
  e.preventDefault();

  trendingObserver.unobserve(refs.targetObserverMovies);
  searchObserver.unobserve(refs.targetObserverSearch);

  refs.backdrop.classList.add('is-hidden');
  query = refs.form.searchQuery.value.trim();
  currentSearchPage = 1;

  try {
    refs.moviesList.innerHTML = '';
    refs.endResultsInfo.classList.add('visually-hidden');

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

let searchObserver = new IntersectionObserver(
  onLoadMoreSearch,
  searchObserverOptions
);

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

refs.moviesContainer.addEventListener('click', onMoviesItemClick);

async function onMoviesItemClick(e) {
  e.preventDefault();

  const targetElement = e.target.closest('.movies-item');
  if (targetElement) {
    const dataId = targetElement.getAttribute('data-id');
    const data = await fetchSingleMovie(API_KEY, URLS.SINGLE_MOVIE_URL, dataId);
    createModalMarkup(data);
  }
}
