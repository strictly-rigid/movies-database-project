import axios from 'axios';
import { refs3 } from '../refs3';
import { renderTrendingPeople } from './renderTrendingPeople';

const API_KEY = '86bcaf318e232372b2e8e2623c959f88';
const BASE_PEOPLE_URL = 'https://api.themoviedb.org/3/trending/person/week';
let currentPage = 1;
let isLoading = false;

export async function fetchTrendingPeople(key, url, currentPage) {
  try {
    isLoading = true;
    const response = await axios.get(
      `${url}?api_key=${key}&page=${currentPage}`
    );
    // console.log(response);
    const dataPeople = response.data.results;
    return dataPeople;
  } catch (error) {
    console.log('Error fetching trending people:', error.message);
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
      fetchTrendingPeople(API_KEY, BASE_PEOPLE_URL, currentPage).then(data =>
        renderTrendingPeople(data)
      );
    }
  });
}

if (document.body.id === 'people-page') {
  fetchTrendingPeople(API_KEY, BASE_PEOPLE_URL, currentPage)
    .then(data => renderTrendingPeople(data))
    .then(() => observer.observe(refs3.targetObserverPeople))
    .catch(err => console.log(err));
}

// import axios from 'axios';

// export async function fetchTrendingPeople(key, url, renderPeople) {
//   try {
//     const response = await axios.get(`${url}?api_key=${key}`);
//     console.log(response);

//     const dataPeople = response.data.results;
//     renderPeople(dataPeople);
//   } catch (error) {
//     console.log('Error fetching trending people:', error.message);
//   }
// }
