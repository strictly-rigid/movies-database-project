import axios from 'axios';

export async function fetchSingleMovie(key, url, id) {
  try {
    const response = await axios.get(`${url}/${id}?api_key=${key}`);
    console.log(response);
    const dataMovies = response.data;
    return dataMovies;
  } catch (error) {
    console.log('Error fetching a movie:', error.message);
  }
}
