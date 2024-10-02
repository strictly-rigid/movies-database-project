import axios from 'axios';

export async function fetchTrendingSeries(key, url, renderSeries) {
  try {
    const response = await axios.get(`${url}?api_key=${key}`);
    console.log(response);

    const dataSeries = response.data.results;
    renderSeries(dataSeries);
  } catch (error) {
    console.log('Error fetching trending series:', error.message);
  }
}
