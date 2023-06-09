import axios from 'axios';
import Swal from 'sweetalert2';
const baseURL = 'https://fast-taiga-04604.herokuapp.com/api';

const axiosInstance = axios.create({ baseURL });

// axiosInstance.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem('token');

//         // If the token exists, bring in headers.
//         if (token) {
//             config.headers['Authorization'] = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (err) => Promise.reject(err)
// );

export const apiHelper = axiosInstance

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
