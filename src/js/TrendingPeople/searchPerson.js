import axios from 'axios';

export async function searchPerson(key, url, searchQuery, page) {
  try {
    const response = await axios.get(
      `${url}?api_key=${key}&query=${searchQuery}&page=${page}`
    );

    console.log(response);

    return response;
  } catch (error) {
    console.log('Error fetching person:', error.message);
  }
}
