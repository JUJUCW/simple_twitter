import { apiHelper } from '../utility/helper.js';

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

// get single tweet
export const getTweet = async (TweetId) => {
    try {
        const { data } = await apiHelper.get(`/tweets/${TweetId}`);

        return data;
    } catch (error) {
        console.error('[getTweet Failed]:', error);
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
