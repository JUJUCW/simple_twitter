import { apiHelper } from 'utility/helper';

// get tweet replies
export const getTweetReplies = async (TweetId) => {
    try {
        const {data} = await apiHelper.get(`/tweets/${TweetId}/replies`);
        console.log(data)
        return data;
    } catch (error) {
        console.error("[Get tweet replies Failed]:", error);
    return error
    }
};

// post Reply
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
