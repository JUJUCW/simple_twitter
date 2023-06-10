import { apiHelper } from 'utility/helper';

export const getReplies = async (TweetId) => {
    try {
        await apiHelper.get(`/tweets/${TweetId}/replies`, {});
    } catch (error) {
        console.error(error);
        return error;
    }
};

export const postReply = async (TweetId) => {
    try {
        await apiHelper.post(`/tweets/${TweetId}/replies`, {});
    } catch (error) {
        console.error(error);
        return error;
    }
};
