import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
});

const http = {
  get(endpoint) {
    return axiosInstance.get(endpoint);
  },
};

export default http;
