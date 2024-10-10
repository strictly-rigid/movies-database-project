import axios from 'axios';
import { refs2 } from '../refs2';
import { renderTrendingSeries } from './renderTrendingSeries';

const API_KEY = '86bcaf318e232372b2e8e2623c959f88';
const BASE_SERIES_URL = 'https://api.themoviedb.org/3/trending/tv/week';
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
      fetchTrendingSeries(API_KEY, BASE_SERIES_URL, currentPage).then(data =>
        renderTrendingSeries(data)
      );
    }
  });
}

if (document.body.id === 'series-page') {
  fetchTrendingSeries(API_KEY, BASE_SERIES_URL, currentPage)
    .then(data => renderTrendingSeries(data))
    .then(() => observer.observe(refs2.targetObserverSeries))
    .catch(err => console.log(err));
}

// import axios from 'axios';

// export async function fetchTrendingSeries(key, url, renderSeries) {
//   try {
//     const response = await axios.get(`${url}?api_key=${key}`);
//     console.log(response);

//     const dataSeries = response.data.results;
//     renderSeries(dataSeries);
//   } catch (error) {
//     console.log('Error fetching trending series:', error.message);
//   }
// }
