import axios from 'axios';
import { renderTrendingSeries } from './renderTrendingSeries';

const API_KEY = '86bcaf318e232372b2e8e2623c959f88';
const BASE_URL = 'https://api.themoviedb.org/3/trending/tv/week';

export async function fetchTrendingSeries() {
  try {
    const response = await axios.get(`${BASE_URL}?api_key=${API_KEY}`);
    console.log(response);

    const dataSeries = response.data.results;
    renderTrendingSeries(dataSeries);
  } catch (error) {
    console.log(error);
  }
}

fetchTrendingSeries();
