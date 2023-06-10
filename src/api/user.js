import axios from 'axios';
import { Toast, baseURL } from '../utility/helper.js';

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
        console.log('[Login Failed]:', error);
        return error;
    }
};
