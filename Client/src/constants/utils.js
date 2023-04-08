import axios from 'axios';

// axios instance 
export const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {'Access-Control-Allow-Origin': '*'},
})
