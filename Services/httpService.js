import Axios from 'axios';
import Constants from '../assets/Constants';

export const Http = Axios.create({
    baseURL: Constants.API_BASE_URL,
  });

  // Request Interceptor
Http.interceptors.request.use(
  (config) => {
    return config;
  },
);

Http.interceptors.response.use(
    (response) => response,
    (error) => {
      // Return error
      return Promise.reject(error);
    },
  );

  // Exports
export default Http;
  