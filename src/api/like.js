// import axios from 'axios';
import { apiHelper } from 'utility/helper';

// token 是否統一集中放在 helper.js
// const getToken = () => localStorage.getItem('token');

export const postTweetLike = async (TweetId) => {
    try {
        await apiHelper.post(`/tweets/${TweetId}/like`, {});
    } catch (error) {
        console.error(error);
    }
};

export const postTweetUnlike = async (TweetId) => {
    try {
        await apiHelper.post(`/tweets/${TweetId}/unlike`, {});
    } catch (error) {
        console.error(error);
    }
};
