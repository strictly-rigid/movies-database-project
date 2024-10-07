import axios from 'axios';
import { refs } from '../refs';
import { renderTrendingMovies } from './renderTrendingMovies';

const API_KEY = '86bcaf318e232372b2e8e2623c959f88';
const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/week';
let currentPage = 1;
let isLoading = false;
// axios.defaults.headers.common['Authorization'] = API_KEY;

export async function fetchTrendingMovies(key, url, renderMovies, currentPage) {
  try {
    const response = await axios.get(
      `${url}?api_key=${key}&page=${currentPage}`
    );
    console.log(response);
    const dataMovies = response.data.results;
    renderMovies(dataMovies);
  } catch (error) {
    console.log('Error fetching trending movies:', error.message);
  } finally {
    isLoading = false;
  }
}
