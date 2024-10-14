import axios from 'axios';
import { refs2 } from '../refs2';
import { URLS } from '../constants';
import { createSeriesModalMarkup } from '../helpers/createSeriesModalMarkup';
const API_KEY = '86bcaf318e232372b2e8e2623c959f88';

let isLoading = false;

export async function fetchSingleSeries(key, url, id) {
  try {
    isLoading = true;
    const response = await axios.get(`${url}/${id}?api_key=${key}`);
    console.log(response);
    const seriesMovies = response.data;
    return seriesMovies;
  } catch (error) {
    console.log('Error fetching series:', error.message);
  } finally {
    isLoading = false;
  }
}

// if (refs2?.seriesContainer) {
//   refs2.seriesContainer.addEventListener('click', onItemClick);
// }

// async function onItemClick(e) {
//   e.preventDefault();
//   console.log('Hellow from callback');
//   const targetElement = e.target.closest('.series-item');
//   if (targetElement) {
//     const dataId = targetElement.getAttribute('data-id');
//     const data = await fetchSingleSeries(
//       API_KEY,
//       URLS.SINGLE_SERIES_URL,
//       dataId
//     );
//     createSeriesModalMarkup(data);
//   }
// }
