import { refs2 } from '../refs2';
import {
  URLS,
  trendingObserverOptions,
  searchObserverOptions,
} from '../constants';
import { renderTrendingSeries } from './renderTrendingSeries';
import { renderFoundSeries } from './renderFoundSeries';
import { searchSeries } from './searchSeries';
import { fetchSingleSeries } from './fetchSingleSeries';
import { createSeriesModalMarkup } from '../helpers/createSeriesModalMarkup';
import { notifyEndResults, notifyNoResults } from '../helpers/notifyWarnings';
import { fetchData } from '../helpers/fetchers';
import { setNewObserver } from '../helpers/setNewObserver';

const API_KEY = process.env.API_KEY;
let query = '';
let currentPage = 1;
let currentSearchPage = 1;

/* ====================== TRENDING ======================  */

async function fetchTrendingSeries(currentPage) {
  try {
    const response = await fetchData(URLS.BASE_SERIES_URL, {
      api_key: API_KEY,
      page: currentPage,
    });

    if (response.total_pages === currentSearchPage) {
      notifyEndResults();
      trendingObserver.unobserve(refs2.targetObserverSeries);
    }
    const dataSeries = response.results;
    return dataSeries;
  } catch (error) {
    console.log('Error fetching trending series:', error.message);
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
      fetchTrendingSeries(currentPage).then(data => renderTrendingSeries(data));
    }
  });
}

// Initializing fetch request for trending

fetchTrendingSeries(currentPage)
  .then(data => renderTrendingSeries(data))
  .then(() => trendingObserver.observe(refs2.targetObserverSeries))
  .catch(err => console.log(err));

/* ====================== SEARCH ======================  */

refs2.form.addEventListener('submit', searchByName);

async function searchByName(e) {
  e.preventDefault();

  refs2.backdrop.classList.add('is-hidden');
  query = refs2.form.searchQuery.value.trim();

  resetState();

  try {
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
    console.log('Error fetching series:', error.message);
  } finally {
    refs2.form.searchQuery.value = '';
  }
}

function resetState() {
  trendingObserver.unobserve(refs2.targetObserverSeries);
  searchObserver.unobserve(refs2.targetObserverSearch);

  refs2.seriesList.innerHTML = '';
  refs2.endResultsInfo.classList.add('visually-hidden');

  currentSearchPage = 1;
}

const searchObserver = setNewObserver(onLoadMoreSearch, searchObserverOptions);

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
