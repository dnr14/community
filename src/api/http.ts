import axios, { AxiosError } from 'axios';
import { HTTPMethod } from 'types/http';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000,
});

axiosInstance.interceptors.response.use(
  response => response,
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

const http: HTTPMethod = {
  get: async (url, config) => {
    try {
      const res = await axiosInstance.get(url, config);
      return res.data;
    } catch (e) {
      throw errorHandler(e);
    }
  },
  delete: async (url, config) => {
    try {
      const res = await axiosInstance.delete(url, config);
      return res.data;
    } catch (e) {
      throw errorHandler(e);
    }
  },
  post: async (url, body, config) => {
    try {
      const res = await axiosInstance.post(url, body, config);
      return res.data;
    } catch (e) {
      throw errorHandler(e);
    }
  },
  patch: async (url, body, config) => {
    try {
      const res = await axiosInstance.patch(url, body, config);
      return res.data;
    } catch (e) {
      throw errorHandler(e);
    }
  },
};
export const errorHandler = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    return new Error(error.message);
  }
  return error;
};

export default http;
