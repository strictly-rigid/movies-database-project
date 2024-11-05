import axios from 'axios';
import { refs2 } from '../refs2';
import { URLS } from '../constants';
import { renderTrendingSeries } from './renderTrendingSeries';
import { renderFoundSeries } from './renderFoundSeries';
import { searchSeries } from './searchSeries';
import { fetchSingleSeries } from './fetchSingleSeries';
import { createSeriesModalMarkup } from '../helpers/createSeriesModalMarkup';
import { notifyEndResults, notifyNoResults } from '../helpers/notifyWarnings';

const API_KEY = '86bcaf318e232372b2e8e2623c959f88';
// const BASE_SERIES_URL = 'https://api.themoviedb.org/3/trending/tv/week';
// const SEARCH_SERIES_URL = 'https://api.themoviedb.org/3/search/tv';
let query = '';
let currentPage = 1;
let currentSearchPage = 1;
let isLoading = false;

/* ====================== TRENDING ======================  */

export async function fetchTrendingSeries(key, url, currentPage) {
  try {
    isLoading = true;
    const response = await axios.get(
      `${url}?api_key=${key}&page=${currentPage}`
    );
    console.log(response);
    if (response.data.total_pages === currentSearchPage) {
      notifyEndResults();
      trendingObserver.unobserve(refs2.targetObserverSeries);
    }
    const dataSeries = response.data.results;
    return dataSeries;
  } catch (error) {
    console.log('Error fetching trending series:', error.message);
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
function onLoadMoreTrending(entries, observer) {
  console.log(entries);
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      currentPage += 1;
      fetchTrendingSeries(API_KEY, URLS.BASE_SERIES_URL, currentPage).then(
        data => renderTrendingSeries(data)
      );
    }
  });
}

fetchTrendingSeries(API_KEY, URLS.BASE_SERIES_URL, currentPage)
  .then(data => renderTrendingSeries(data))
  .then(() => trendingObserver.observe(refs2.targetObserverSeries))
  .catch(err => console.log(err));

/* ====================== SEARCH ======================  */

refs2.form.addEventListener('submit', searchByName);

async function searchByName(e) {
  e.preventDefault();

  trendingObserver.unobserve(refs2.targetObserverSeries);
  searchObserver.unobserve(refs2.targetObserverSearch);

  refs2.backdrop.classList.add('is-hidden');
  query = refs2.form.searchQuery.value.trim();
  currentSearchPage = 1;

  try {
    refs2.seriesList.innerHTML = '';
    refs2.endResultsInfo.classList.add('visually-hidden');

    const seriesData = await searchSeries(
      API_KEY,
      URLS.SEARCH_SERIES_URL,
      query,
      currentSearchPage
    );

    const { results, total_results } = seriesData.data;

    if (results && results.length > 0) {
      renderFoundSeries(results);
      searchObserver.observe(refs2.targetObserverSearch);
    } else {
      refs2.endResultsInfo.classList.remove('visually-hidden');
      notifyNoResults();
    }

    if (
      total_results &&
      total_results <= 20 &&
      seriesData.data.total_pages === currentSearchPage
    ) {
      notifyEndResults();
      searchObserver.unobserve(refs2.targetObserverSearch);
    }
  } catch (error) {
    console.log('Error fetching person:', error.message);
  } finally {
    refs2.form.searchQuery.value = '';
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
      searchSeries(
        API_KEY,
        URLS.SEARCH_SERIES_URL,
        query,
        currentSearchPage
      ).then(dataFound => {
        const { results } = dataFound.data;
        renderFoundSeries(results);
      });
    }
  });
}

/* ======================  SERIES' DETAILS ======================  */

refs2.seriesContainer.addEventListener('click', onSeriesItemClick);

async function onSeriesItemClick(e) {
  e.preventDefault();

  const targetElement = e.target.closest('.series-item');
  if (targetElement) {
    const dataId = targetElement.getAttribute('data-id');
    const data = await fetchSingleSeries(
      API_KEY,
      URLS.SINGLE_SERIES_URL,
      dataId
    );
    createSeriesModalMarkup(data);
  }
}
