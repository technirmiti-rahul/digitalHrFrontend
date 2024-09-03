import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://hrmanagementbackend-o7tt.onrender.com/',
  //baseURL: 'http://localhost:5001/',
});
// Add a request interceptor to set the Authorization header before each request
axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosClient;
