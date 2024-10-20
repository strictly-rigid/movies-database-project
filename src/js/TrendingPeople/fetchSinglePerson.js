import axios from 'axios';
import { refs3 } from '../refs3';
import { URLS } from '../constants';
// import { createSeriesModalMarkup } from '../helpers/createSeriesModalMarkup';
const API_KEY = '86bcaf318e232372b2e8e2623c959f88';

let isLoading = false;

export async function fetchSinglePerson(key, url, id) {
  try {
    isLoading = true;
    const response = await axios.get(`${url}/${id}?api_key=${key}`);
    // console.log(response);
    const personDetails = response.data;
    return personDetails;
  } catch (error) {
    console.log('Error fetching person"s data:', error.message);
  } finally {
    isLoading = false;
  }
}
