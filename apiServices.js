import axios from 'axios';

const backendBaseUrl = 'http://localhost:5000'; // Replace with your Flask backend URL

// Function to fetch user data based on user ID
export const getUserData = async (userId) => {
  try {
    const response = await axios.get(`${backendBaseUrl}/campaign/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error; // Propagate the error to the component making the request
  }
};

// Function to fetch user ID from the backend
export const getUserIdFromBackend = async () => {
  try {
    const response = await axios.get(`${backendBaseUrl}/getUserIdFromBackend`);
    return response.data.user_id;
  } catch (error) {
    console.error('Error fetching user ID:', error);
    throw error; // Propagate the error to the component making the request
  }
};
