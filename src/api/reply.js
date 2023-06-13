import { apiHelper } from 'utility/helper';

export const getReplies = async (TweetId) => {
    try {
        const res = await apiHelper.get(`/tweets/${TweetId}/replies`, {});
        return res;
    } catch (error) {
        console.error(error);
        return error;
    }
};
// todo add params about payload  to postReply
export const postReply = async (comment, TweetId) => {
    try {
        const { data } = await apiHelper.post(`/tweets/${TweetId}/replies`, {
            comment,
        });

        return data;
    } catch (error) {
        console.error(error);
        return error;
    }
};
