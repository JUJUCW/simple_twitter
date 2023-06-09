import { apiHelper } from 'utility/helper';

// token 是否統一集中放在 helper.js
const getToken = () => localStorage.getItem('token');

// export const getUserLiked() =async.get(`${baseURL}/tweets/${userId}/like`)

// }
const like = {
    // getUserLiked(userId) {
    //     return apiHelper.get(`/users/${userId}/likes`, {
    //         headers: { Authorization: `Bearer ${getToken()}` },
    //     });
    // },
    tweetLike(tweetId) {
        return apiHelper.post(
            `/tweets/${tweetId}/like`,
            {},
            {
                headers: { Authorization: `Bearer ${getToken()}` },
            }
        );
    },
    tweetUnlike(tweetId) {
        return apiHelper.post(
            `/tweets/${tweetId}/unlike`,
            {},
            {
                headers: { Authorization: `Bearer ${getToken()}` },
            }
        );
    },
};

export default like;
