import axios from 'axios'
import {/*Toast,*/ baseURL} from '../utility/helper.js'

const axiosInstance = axios.create({
  baseURL: baseURL,
}) 

// add token to every request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error(error);
  },
);

// get all tweets
export const getAllTweets = async () => {
  try{
    const {data} = await axiosInstance.get(`${baseURL}/tweets`)
    // console.log(data)
    return data
  } catch (error) {
    console.error('[getAllTweets Failed]:', error)
    return error
  }
} 