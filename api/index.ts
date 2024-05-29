import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001', // Adjust the base URL as needed
  headers: {
    'Content-Type': 'application/json',
  },
});

// You can also set up request/response interceptors if needed
// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors, like redirecting to login if unauthorized
    // if (error.response.status === 401) {
    //   // Redirect to login or show a modal
    // }
    return Promise.reject(error);
  }
);

export default api;
