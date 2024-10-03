import axios from 'axios';
import { refs } from '../refs.js';

export async function searchMovie(key, url, searchQuery, renderFoundItems) {
  try {
    const response = await axios.get(
      `${url}?api_key=${key}&query=${searchQuery}`
    );
    console.log(response);
    const queryFoundMovies = response.data.results;
    if (queryFoundMovies) {
      refs.moviesList.innerHTML = '';
    }

    renderFoundItems(queryFoundMovies);
  } catch (error) {
    console.log('Error fetching trending movies:', error.message);
  }
}
