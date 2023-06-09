import axios from 'axios'
import {Toast, baseURL} from '../utility/helper.js'




//user login

export const userLogin = async ({ account, password }) => {
  try {
    const {data} = await axios.post(`${baseURL}/signin`, {
      account, password
    })

    const { token } = data.data;
    const { role } = data.data;

    if ( token && role === "user") {
      return {success: true, ...data}
    }
    return data

  } catch (error) {
    console.error('[Login Failed]:', error)
    Toast.fire({
      title: error.response.data.message,
      icon: "error"
    })
  }
}