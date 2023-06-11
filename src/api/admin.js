import { apiHelper } from '../utility/helper.js'

export const getAllTweets = async () => {
  try{
    const {data} = await apiHelper.get(`/tweets`)
    console.log(data)
    return data
  } catch (error) {
    console.error('[getAllTweets Failed]:', error)
    return error
  }
} 
