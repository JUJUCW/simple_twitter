// import axios from 'axios';
import { apiHelper } from 'utility/helper';

const token_4 =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsIm5hbWUiOiJ1c2VyMSIsImFjY291bnQiOiJ1c2VyMSIsImVtYWlsIjoidXNlcjFAZXhhbXBsZS5jb20iLCJhdmF0YXIiOiJodHRwczovL2ltZ3VyLmNvbS81T0w1d0p0LnBuZyIsImNvdmVyUGhvdG8iOiJodHRwczovL2ltZ3VyLmNvbS9oSjRKOWduLnBuZyIsImludHJvZHVjdGlvbiI6IlF1byB2b2x1cHRhdGVtIHByYWVzZW50aXVtIHNhZXBlIG5lcXVlIHV0IG1vbGVzdGlhZSBtb2xlc3RpYWUuIiwicm9sZSI6InVzZXIiLCJjcmVhdGVkQXQiOiIyMDIzLTA2LTA5VDAwOjM2OjA0LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIzLTA2LTA5VDAwOjM2OjA0LjAwMFoiLCJpYXQiOjE2ODYyNzExNzQsImV4cCI6MTY4ODg2MzE3NH0.O5AraITA6AujdXBbhqs-4JEhNrsxEqgvliJMwupE8Z4';

// token 是否統一集中放在 helper.js
// const getToken = () => localStorage.getItem('token');

export const getATweet = async (TweetId) => {
    console.log('post getATweet');

    // const {  UserId, TweetId, isLiked, description, replyCount, likedCount } = payload;
    try {
        const res = await apiHelper.get(`/tweets/${TweetId}`,
        );
      return {
          isLiked: res.data.isLiked,
          likedCount: res.data.likedCount,
      };
    } catch (error) {
        console.error(error);
    }
};
export const postTweetLike = async (payload) => {
    console.log('post Like');
    const { id, UserId, TweetId } = payload;
    try {
        console.log('postTweetLike');
        const res = await apiHelper.post(
            `/tweets/${TweetId}/like`,
            { id, UserId, TweetId },
        );
        console.log('data', res.data);

        return res.data;
    } catch (error) {
        console.error(error);
    }
};

export const postTweetUnlike = async (playload) => {
    console.log('post Unlike');
    const { id, UserId, TweetId } = playload;
    try {
        const res = await apiHelper.post(
            `/tweets/${TweetId}/unlike`,
            { id, UserId, TweetId },
            {
                headers: { Authorization: `Bearer ${token_4}` },
            }
        );

        return res.data;
    } catch (error) {
        console.error(error);
    }
};
