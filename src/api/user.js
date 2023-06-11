import axios from 'axios';
import { Toast, baseURL, apiHelper } from '../utility/helper.js';

//user login

export const userLogin = async ({ account, password }) => {
    try {
        const { data } = await axios.post(`${baseURL}/signin`, {
            account,
            password,
        });

        const { token, role } = data.data;

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
    console.log('[Login Failed]:', error)
    return error
  }
}

//admin login

export const adminLogin = async ({ account, password }) => {
  try {
    const {data} = await axios.post(`${baseURL}/signin`, {
      account, password
    })

    const { token, role } = data.data;

    if ( token && role === "admin") {
      return { success: true, ...data }
    }
    if ( token && role === "user") {
      Toast.fire({
      title: "帳號不存在！",
      icon: "error"
      })
    }
    
    return data

  } catch (error) {
    console.log('[Login Failed]:', error)
    return error
  }
}

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


