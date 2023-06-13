import { apiHelper } from '../utility/helper.js';

export const postTweetLike = async (TweetId) => {
    try {
        await apiHelper.post(`/tweets/${TweetId}/like`, {});
    } catch (error) {
        console.error(error);
        return error
    }
};

export const postTweetUnlike = async (TweetId) => {
    try {
        await apiHelper.post(`/tweets/${TweetId}/unlike`, {});
    } catch (error) {
        console.error(error);
        return error;
    }
};
