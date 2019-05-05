import axios from 'axios';
import { Message } from 'element-ui';


const serviceConfig = {
  baseURL: process.env.BASE_API,
  timeout: 5000,
  headers: {
    'Content-Type': ' application/json',
    Accept: ' application/json',
  },

};

const service = axios.create(serviceConfig);
service.interceptors.request.use(
  config =>
    config
  ,
  (error) => {
    console.log(error);
    Promise.reject(error);
  },
);

// response interceptor
service.interceptors.response.use(
  response => response,

  (error) => {
    console.log(`err${error}`);
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  },
);
export default service;
