import axios from 'axios';
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
