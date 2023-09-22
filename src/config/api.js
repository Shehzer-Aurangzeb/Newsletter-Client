import axios from "axios";
/**
 * axios instance
 */
export const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_BASE_URL,
});
// request header
api.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

// response parse
api.interceptors.response.use(
  (response) => response,
  (error) => {
    throw error;
  }
);
