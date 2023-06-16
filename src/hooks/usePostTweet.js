import { useState } from 'react';
import { postTweet } from '../api/tweet.js'
import { Toast } from '../utility/helper.js'

export default function usePostTweet () {
  const [isUpdating, setIsUpdating] = useState(false)

  const postTweetHook = async (textInput) => {
    try {
      if (isUpdating) return

      setIsUpdating (true)

      const res = await postTweet(textInput);
      if (res.id) {
        Toast.fire({
          title: "推文發送成功",
          icon: "success",
        });
      } else {
        Toast.fire({
          title: "推文發送失敗",
          icon: "error",
        });
      }
      setIsUpdating(false)
      
    } catch (error) {
      console.error(error)
      setIsUpdating(false)
      Toast.fire({
          title: "推文發送失敗",
          icon: "error",
        });
    }
  } 
  return {
    isUpdating,
    postTweetHook
  } 
}