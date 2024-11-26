import axios from 'axios';

export async function fetchData(url, params = {}) {
  try {
    isLoading = true;
    const response = await axios.get(url, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  } finally {
    isLoading = false;
  }
}
