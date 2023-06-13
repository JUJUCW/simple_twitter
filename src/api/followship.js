import { apiHelper, Toast } from '../utility/helper.js';

// follow user

export const followUser = async (UserId) => {
    try {
        const { data } = await apiHelper.post(`/followships`, {
          id: UserId,
        });
        return data
    } catch (error) {
        console.error(error);
        Toast.fire({
            title: error.response.data.message,
            icon: "error",
        });
        return error;
    }
};


//unFollow user 

export const unFollowUser = async (UserId) => {
    try {
        const { data } = await apiHelper.delete(`/followships/${UserId}`);
        return data
    } catch (error) {
        console.error(error);
        Toast.fire({
            title: error.response.data.message,
            icon: "error",
        });
        return error;
    }
};