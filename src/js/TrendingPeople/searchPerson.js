import axios from 'axios';
import { refs3 } from '../refs3.js';

export async function searchPerson(key, url, searchQuery, renderFoundPerson) {
  try {
    const response = await axios.get(
      `${url}?api_key=${key}&query=${searchQuery}`
    );

    console.log(response);
    const queryFoundPerson = response.data.results;
    if (queryFoundPerson) {
      refs3.peopleList.innerHTML = '';
    }

    renderFoundPerson(queryFoundPerson);
  } catch (error) {
    console.log('Error fetching person:', error.message);
  }
}
