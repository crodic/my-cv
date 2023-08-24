import axios from 'axios';

const authAxios = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 10000,
})

authAxios.interceptors.request.use((config) => {
    return config;
}, function (error) {
    return Promise.reject(error);
});

authAxios.interceptors.response.use((response) => {
    return response;
}, function (error) {
    return Promise.reject(error);
});

export default authAxios;