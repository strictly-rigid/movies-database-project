import axios from 'axios';
import { refs } from '../refs';
import { renderTrendingMovies } from './renderTrendingMovies';
import { fetchSingleMovie } from './fetchSingleMovie';

const API_KEY = '86bcaf318e232372b2e8e2623c959f88';
const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/week';
let currentPage = 1;
let isLoading = false;

export async function fetchTrendingMovies(key, url, currentPage) {
  try {
    isLoading = true;
    const response = await axios.get(
      `${url}?api_key=${key}&page=${currentPage}`
    );
    // console.log(response);
    const dataMovies = response.data.results;
    return dataMovies;
  } catch (error) {
    console.log('Error fetching trending movies:', error.message);
  } finally {
    isLoading = false;
  }
}

let options = {
  root: null,
  rootMargin: '100px',
  threshold: 1.0,
};

let observer = new IntersectionObserver(onLoadMore, options);
async function onLoadMore(entries, observer) {
  console.log(entries);
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      currentPage += 1;
      fetchTrendingMovies(API_KEY, BASE_URL, currentPage).then(data =>
        renderTrendingMovies(data)
      );
    }
  });
}

if (document.body.id === 'movies-page') {
  fetchTrendingMovies(API_KEY, BASE_URL, currentPage)
    .then(data => renderTrendingMovies(data))
    .then(() => observer.observe(refs.targetObserver))
    .catch(err => console.log(err));
}

// import axios from 'axios';
// import { refs } from '../refs';
// import { renderTrendingMovies } from './renderTrendingMovies';

// const API_KEY = '86bcaf318e232372b2e8e2623c959f88';
// const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/week';
// let currentPage = 1;
// let isLoading = false;

// export async function fetchTrendingMovies(key, url, renderMovies, currentPage) {
//   try {
//     const response = await axios.get(
//       `${url}?api_key=${key}&page=${currentPage}`
//     );
//     console.log(response);
//     const dataMovies = response.data.results;
//     renderMovies(dataMovies);
//   } catch (error) {
//     console.log('Error fetching trending movies:', error.message);
//   } finally {
//     isLoading = false;
//   }
// }

// fetchTrendingMovies(API_KEY, BASE_URL, renderTrendingMovies, currentPage)
//   .then(data => observer.observe(refs.targetObserver))
//   .catch(err => console.log(err));

// let options = {
//   root: null,
//   rootMargin: '10px',
//   threshold: 1.0,
// };

// let observer = new IntersectionObserver(onLoadMore, options);
// function onLoadMore(entries, observer) {
//   console.log(entries);
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       currentPage += 1;
//       fetchTrendingMovies(API_KEY, BASE_URL, renderTrendingMovies, currentPage);
//     }
//   });
// }
