import axios from 'axios';
import { Toast, baseURL, apiHelper } from '../utility/helper.js';

//admin login

export const adminLogin = async ({ account, password }) => {
  try {
    const {data} = await axios.post(`${baseURL}/admin/signin`, {
      account, password
    })

    const { token, role } = data;

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
    console.error('[Login Failed]:', error)
    return error
  }
}


// get admin all tweets 
export const adminGetAllTweets = async () => {
  try{
    const {data} = await apiHelper.get(`/admin/tweets`)
    return data
  } catch (error) {
    console.error('[Admin get all tweets Failed]:', error)
    return error
  }
} 

// get admin all users

export const adminGetAllUsers = async() => {
  try{
    const{data} = await apiHelper.get(`/admin/users`)
    return data
  } catch (error) {
    console.error('[Get user tweets Failed]:', error)
    return error
  }
}

// delete tweet

export const deleteTweet = async (tweetId) => {
  try {
    const { data } = await apiHelper.delete(
      `/admin/tweets/${tweetId}`
    );
    return data
  } catch (error) {
    console.error("[Delete tweet failed]:", error);
    return error
  }
};
