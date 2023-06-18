import { apiHelper } from '../utility/helper.js';

// like user
export const postTweetLike = async (TweetId) => {
    try {
        await apiHelper.post(`/tweets/${TweetId}/like`, {});
    } catch (error) {
        console.error(error);
        return error
    }
};


// unlike user
export const postTweetUnlike = async (TweetId) => {
    try {
        await apiHelper.post(`/tweets/${TweetId}/unlike`, {});
    } catch (error) {
        console.error(error);
        return error;
    }
};
