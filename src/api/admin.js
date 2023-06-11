import { apiHelper } from '../utility/helper.js'

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
