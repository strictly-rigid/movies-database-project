import axios from 'axios';

export async function fetchTrendingPeople(key, url, renderPeople) {
  try {
    const response = await axios.get(`${url}?api_key=${key}`);
    console.log(response);

    const dataPeople = response.data.results;
    renderPeople(dataPeople);
  } catch (error) {
    console.log('Error fetching trending people:', error.message);
  }
}
