import { useState } from 'react';
import { setUserProfile } from '../api/user.js'
import { Toast } from '../utility/helper.js'

export default function useChangeProfile () {
  const [isUpdating, setIsUpdating] = useState(false)

  const updateUser = async (user) => {
    try {
      if (isUpdating) return

      setIsUpdating (true)

      const formData = new FormData();
            formData.append("coverPhoto", user.upCoverPhoto);
            formData.append("avatar", user.upAvatar);
            formData.append("name", user.name);
            formData.append("introduction", user.introduction);
      const data = await setUserProfile (formData, user.id)
      
      if (data.status==="error") {
        Toast.fire({
            title: "修改個人資料失敗",
            icon: "error",
          });
          return
      }
      
      Toast.fire({
        title: "修改個人資料成功",
        icon: "success",
      });
      setIsUpdating(false)

    } catch (error) {
    console.error(error)
    setIsUpdating(false)
    }
  } 
  return {
    isUpdating,
    updateUser
  } 
}