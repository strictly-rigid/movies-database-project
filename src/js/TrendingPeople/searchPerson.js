import axios from 'axios';
import { refs3 } from '../refs3.js';

export async function searchPerson(key, url, searchQuery, page) {
  try {
    const response = await axios.get(
      `${url}?api_key=${key}&query=${searchQuery}&page=${page}`
    );

    console.log(response);
    const dataFoundPerson = response.data.results;
    return dataFoundPerson;
  } catch (error) {
    console.log('Error fetching person:', error.message);
  }
}
