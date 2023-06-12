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
export const postReply = async (comment, TweedId) => {
    try {
        const { data } = await apiHelper.post(`/tweets/${TweedId}/replies`, {
            // TweetId,
            comment,
            // UserId,
        });

        console.log('TweetId',TweedId)
        console.log('postReply_api');
        console.log('data', data);
        return data;
    } catch (error) {
        console.error(error);
        return error;
    }
};
