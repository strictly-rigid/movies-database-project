import axios from 'axios';
import { refs2 } from '../refs2.js';

export async function searchSeries(key, url, searchQuery, page) {
  try {
    const response = await axios.get(
      `${url}?api_key=${key}&query=${searchQuery}&page=${page}`
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log('Error fetching trending series:', error.message);
  }
}

// import axios from 'axios';
// import { refs2 } from '../refs2.js';

// export async function searchSeries(key, url, searchQuery, renderFoundItems) {
//   try {
//     const response = await axios.get(
//       `${url}?api_key=${key}&query=${searchQuery}`
//     );
//     console.log(response);
//     const queryFoundSeries = response.data.results;
//     if (queryFoundSeries) {
//       refs2.seriesList.innerHTML = '';
//     }

//     renderFoundItems(queryFoundSeries);
//   } catch (error) {
//     console.log('Error fetching trending series:', error.message);
//   }
// }
