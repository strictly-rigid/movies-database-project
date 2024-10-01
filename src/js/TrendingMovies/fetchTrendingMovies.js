import axios from 'axios';

const API_KEY = '86bcaf318e232372b2e8e2623c959f88';
const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/week';
// axios.defaults.headers.common['Authorization'] = API_KEY;

export async function fetchTrendingMovies(key, url, renderMovies) {
  try {
    const response = await axios.get(`${url}?api_key=${key}`);
    console.log(response);
    const dataMovies = response.data.results;
    renderMovies(dataMovies);
  } catch (error) {
    console.log('Error fetching trending movies:', error.message);
  }
}
