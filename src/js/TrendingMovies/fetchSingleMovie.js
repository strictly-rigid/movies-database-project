import axios from 'axios';
// const SINGLE_MOVIE_URL = 'https://api.themoviedb.org/3/movie';
import { URLS } from '../constants';
const API_KEY = '86bcaf318e232372b2e8e2623c959f88';

export async function fetchSingleMovie(key, url, id) {
  try {
    isLoading = true;
    const response = await axios.get(`${url}/${id}?api_key=${key}`);
    console.log(response);
    const dataMovies = response.data;
    return dataMovies;
  } catch (error) {
    console.log('Error fetching a movie:', error.message);
  } finally {
    isLoading = false;
  }
}

fetchSingleMovie(API_KEY, URLS.SINGLE_MOVIE_URL, 533535);
