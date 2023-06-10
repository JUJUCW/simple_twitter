import axios from 'axios'
import {/*Toast,*/ baseURL /*,apiHelper*/} from '../utility/helper.js'

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
    console.log(data)
    return data
  } catch (error) {
    console.error('[getAllTweets Failed]:', error)
    return error
  }
} 

// post tweet
export const  postTweet = async (description) => {
  try {
    const { data } = await axiosInstance.post(`${baseURL}/tweets`, {
      description,
    });
    return data;
  } catch (error) {
    console.error('[postTweet Failed]:', error)
    return error
  }
}