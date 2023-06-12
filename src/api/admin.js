import { apiHelper } from '../utility/helper.js'

// get admin all tweets 
export const adminGetAllTweets = async () => {
  try{
    const {data} = await apiHelper.get(`/admin/tweets`)
    console.log(data)
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
    console.log(data)
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
    console.log(data)
    return data
  } catch (error) {
    console.error("[Delete tweet failed]:", error);
    return error
  }
};
