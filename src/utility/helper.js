import axios from 'axios';
import Swal from 'sweetalert2';
export const baseURL = 'https://fast-taiga-04604.herokuapp.com/api';

const axiosInstance = axios.create({ baseURL });

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        // const token =
        //     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsIm5hbWUiOiJ1c2VyMSIsImFjY291bnQiOiJ1c2VyMSIsImVtYWlsIjoidXNlcjFAZXhhbXBsZS5jb20iLCJhdmF0YXIiOiJodHRwczovL2ltZ3VyLmNvbS81T0w1d0p0LnBuZyIsImNvdmVyUGhvdG8iOiJodHRwczovL2ltZ3VyLmNvbS9oSjRKOWduLnBuZyIsImludHJvZHVjdGlvbiI6IkVuaW0gZXggZXN0IGNvbnNlcXV1bnR1ciBpdXN0byBhcGVyaWFtIGVzc2Ugdm9sdXB0YXRlbSB2b2x1cHRhdGVtLiIsInJvbGUiOiJ1c2VyIiwiY3JlYXRlZEF0IjoiMjAyMy0wNi0wOVQwMDo0NjowNy4wMDBaIiwidXBkYXRlZEF0IjoiMjAyMy0wNi0wOVQwMDo0NjowNy4wMDBaIiwiaWF0IjoxNjg2MjcxNTgwLCJleHAiOjE2ODg4NjM1ODB9.k1xCPXRv0fGIu4B0nEbYYzNJ6drGRn6D6dRR8AFn1yw';

        // If the token exists, bring in headers.
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (err) => Promise.reject(err)
);

export const apiHelper = axiosInstance;

// pop up notification
export const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
});

// Toast.fire({
//   icon: 'success',
//   title: 'Signed in successfully'
// })

// get relative time
export const getRelativeTime = (createdAt) => {
    if (!createdAt) return;

    const createdTime = new Date(createdAt).getTime();
    const currentTime = new Date().getTime();
    const relativeTime = currentTime - createdTime;

    if (relativeTime < 0) {
        console.log('推文創建時間有誤');
        return;
    }

    const seconds = Math.floor(relativeTime / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    let formattedTimeDiff = '';
    if (years > 0) {
        return (formattedTimeDiff += years + '年前');
    } else if (months > 0) {
        return (formattedTimeDiff += months + '月前');
    } else if (days > 0) {
        return (formattedTimeDiff += days + '天前');
    } else if (hours > 0) {
        return (formattedTimeDiff += hours + '小時前');
    } else if (minutes > 0) {
        return (formattedTimeDiff += minutes + '分鐘前');
    } else {
        return (formattedTimeDiff += seconds + '秒前');
    }
};

export const getFullTime = (createdAt) => {
    if (!createdAt) return;
    const dateObj = new Date(createdAt);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();
    const hour = dateObj.getHours();
    const minute = dateObj.getMinutes();

     return (
      <div>
        {hour}:{minute}&#xb7;{year}年{month}月{day}日
      </div>
    );
}