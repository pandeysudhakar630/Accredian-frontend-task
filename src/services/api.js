import axios from 'axios';

// Backend URL from environment variable
const BASE_URL = process.env.REACT_APP_BACKEND_URL;

// Example API call — GET request
export const fetchData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/data`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// Example API call — POST request
export const postData = async (payload) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/data`, payload);
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};
