import axios from 'axios';

// axios instance 
export const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {'Access-Control-Allow-Origin': '*'},
})

export const emailPattern = () => "/\S+@\S+\.\S+/"

export const numberValidator = (value) => {
    if(value.target.value.length <= 11 ) return value.target.value = value.target.value.slice(0,10)
}
 
