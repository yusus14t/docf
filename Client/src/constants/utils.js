import axios from 'axios';

// axios instance 
const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {'Access-Control-Allow-Origin': '*'},
})

export { 
    axiosInstance,
}