import axios from 'axios';

export async function searchMovie(key, url, searchQuery, page) {
  try {
    const response = await axios.get(
      `${url}?api_key=${key}&query=${searchQuery}&page=${page}`
    );

    return response;
  } catch (error) {
    console.log('Error fetching trending movies:', error.message);
  }
}
