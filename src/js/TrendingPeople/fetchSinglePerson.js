import axios from 'axios';

export async function fetchSinglePerson(key, url, id) {
  try {
    const response = await axios.get(`${url}/${id}?api_key=${key}`);
    const personDetails = response.data;

    return personDetails;
  } catch (error) {
    console.log('Error fetching person"s data:', error.message);
  }
}
