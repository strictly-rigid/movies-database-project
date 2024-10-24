import axios from 'axios';
import { refs2 } from '../refs2';
import { URLS } from '../constants';
import { renderTrendingSeries } from './renderTrendingSeries';

import { searchSeries } from './searchSeries';
import { renderFoundSeries } from './renderFoundSeries';

import { fetchSingleSeries } from './fetchSingleSeries';
import { createSeriesModalMarkup } from '../helpers/createSeriesModalMarkup';

const API_KEY = '86bcaf318e232372b2e8e2623c959f88';
// const BASE_SERIES_URL = 'https://api.themoviedb.org/3/trending/tv/week';
// const SEARCH_SERIES_URL = 'https://api.themoviedb.org/3/search/tv';
let currentPage = 1;
let isLoading = false;

// const targetSeries = document.querySelector('.js-guard-series');

export async function fetchTrendingSeries(key, url, currentPage) {
  try {
    isLoading = true;
    const response = await axios.get(
      `${url}?api_key=${key}&page=${currentPage}`
    );
    // console.log(response);
    const dataSeries = response.data.results;
    return dataSeries;
  } catch (error) {
    console.log('Error fetching trending series:', error.message);
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
      fetchTrendingSeries(API_KEY, URLS.BASE_SERIES_URL, currentPage).then(
        data => renderTrendingSeries(data)
      );
    }
  });
}

// if (document.body.id === 'series-page') {
//   fetchTrendingSeries(API_KEY, URLS.BASE_SERIES_URL, currentPage)
//     .then(data => renderTrendingSeries(data))
//     .then(() => observer.observe(refs2.targetObserverSeries))
//     .catch(err => console.log(err));
// }

fetchTrendingSeries(API_KEY, URLS.BASE_SERIES_URL, currentPage)
  .then(data => renderTrendingSeries(data))
  .then(() => observer.observe(refs2.targetObserverSeries))
  .catch(err => console.log(err));

/* ====================== DETAILS ======================  */

refs2.seriesContainer.addEventListener('click', onItemClick);

async function onItemClick(e) {
  e.preventDefault();
  console.log('Hellow from callback');
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

/* ====================== SEARCH ======================  */

refs2.form.addEventListener('submit', e => {
  e.preventDefault();
  refs2.backdrop.classList.add('is-hidden');
  const query = refs2.form.searchQuery.value.trim();
  searchSeries(API_KEY, URLS.SEARCH_SERIES_URL, query, renderFoundSeries);
});
