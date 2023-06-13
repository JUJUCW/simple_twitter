import { /*Toast,*/ /*baseURL,*/ apiHelper } from '../utility/helper.js';

// get all tweets
export const getAllTweets = async () => {
    try {
        const { data } = await apiHelper.get(`/tweets`);
        return data;
    } catch (error) {
        console.error('[getAllTweets Failed]:', error);
        return error;
    }
};
export const getTweet = async (TweetId) => {
    try {
        const { data } = await apiHelper.get(`/tweets/${TweetId}`);
        return data;
    } catch (error) {
        console.error('[getTweet Failed]:', error);
        return error;
    }
};
export const getTweetReplies = async (TweetId) => {
    try {
        const { data } = await apiHelper.get(`/tweets/${TweetId}/replies`);
        return data;
    } catch (error) {
        console.error('[getTweetReplies Failed]:', error);
        return error;
    }
};

// post tweet
export const postTweet = async (description) => {
    try {
        const { data } = await apiHelper.post(`/tweets`, {
            description,
        });
        return data;
    } catch (error) {
        console.error('[postTweet Failed]:', error);
        return error;
    }
};

// const axiosInstance = axios.create({
//   baseURL: baseURL,
// })

// // add token to every request
// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('authToken');
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     console.error(error);
//   },
// );
