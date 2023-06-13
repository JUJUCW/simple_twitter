import axios from 'axios';
import { Toast, baseURL, apiHelper } from '../utility/helper.js';

//user login

export const userLogin = async ({ account, password }) => {
    try {
        const { data } = await axios.post(`${baseURL}/signin`, {
            account,
            password,
        });

        const { token, role } = data;

        if (token && role === 'user') {
            return { success: true, ...data };
        }
        if (token && role === 'admin') {
            Toast.fire({
                title: '帳號不存在！',
                icon: 'error',
            });
        }
        return data;
  } catch (error) {
    console.error('[Login Failed]:', error)
    return error
  }
}


// user signup

export const userSignup = async ({
  name,
  account,
  email,
  password,
  checkPassword,
}) => {
  try {
    const { data } = await axios.post(`${baseURL}/users`, {
      name,
      account,
      email,
      password,
      checkPassword,
    });
    return data;
  } catch (error) {
    console.error('[Signup Failed]:', error)
    return error
  }
};


// get user profile

export const getUser = async(userId) => {
  try{
    const{data} = await apiHelper.get(`/users/${userId}`)
    if (data.id) return data
    return data
  } catch (error) {
    console.log('[Get user profile Failed]:', error)
    return error
  }
}

// get user tweets

export const getUserTweets = async(userId) => {
  try{
    const{data} = await apiHelper.get(`/users/${userId}/tweets`)
    console.log(data)
    return data
  } catch (error) {
    console.log('[Get user tweets Failed]:', error)
    return error
  }
}


// get user replies

export const getUserReplies = async(userId) => {
  try{
    const{data} = await apiHelper.get(`/users/${userId}/replied_tweets`)
    console.log(data)
    return data
  } catch (error) {
    console.log('[Get user replies Failed]:', error)
    return error
  }
}

// get user likes

export const getUserLikes = async(userId) => {
  try{
    const{data} = await apiHelper.get(`/users/${userId}/likes`)
    console.log(data)
    return data
  } catch (error) {
    console.log('[Get user likes Failed]:', error)
    return error
  }
}

// get top ten users

export const getTopTenUsers = async() => {
  try{
    const{data} = await apiHelper.get(`/users/topTen`)
    console.log(data)
    return data
  } catch (error) {
    console.error('[Get top ten users Failed]:', error)
    return error
  }
}

// setting user profile

export const setUserProfile = async (formData, userId) => {
  try {
    const {data} = await apiHelper.put(`/users/${userId}`,
      formData ,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return data
  } catch (error) {
    console.log("[Set user profile Failed]:", error);
    return error
  }
};

// get user followers

export const getUserFollowers = async(userId) => {
  try{
    const{data} = await apiHelper.get(`/users/${userId}/followers`)
    console.log(data)
    return data
  } catch (error) {
    console.error('[Get user followers Failed]:', error)
    return error
  }
}

// get user followings

export const getUserFollowings = async(userId) => {
  try{
    const{data} = await apiHelper.get(`/users/${userId}/followings`)
    console.log(data)
    return data
  } catch (error) {
    console.error('[Get user followings Failed]:', error)
    return error
  }
}

// setting user account

export const setUserAccount = async (
      name,
      account,
      email,
      password,
      checkPassword, 
      userId) => {
  try {
    const {data} = await apiHelper.put(`/users/${userId}/account`, {
      name,
      account,
      email,
      password,
      checkPassword,
    });
    console.log(data)
    return data
  } catch (error) {
    console.log("[Set user account Failed]:", error);
    return error
  }
};


