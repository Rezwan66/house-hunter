import axios from 'axios';

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL || import.meta.env.VITE_API_URL_VERCEL,
  withCredentials: true,
});
export default axiosSecure;
