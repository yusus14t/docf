import axios from 'axios';

// axios instance 
export const axiosInstance = axios.create({
    baseURL: `http://${window.location.hostname}:5000/api`,
    headers: {'Access-Control-Allow-Origin': '*'},
})

export const emailPattern = {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,63}$/i,
    message: "Invalid email address.",
};

export const numberValidator = (value) => {
    if(value.target.value.length <= 11 ) return value.target.value = value.target.value.slice(0,10)
}

export const getAuthHeader = () => {
    let token = JSON.parse(localStorage.getItem('session'))
    return { headers: {'auth-token': token} }
}

export const formatDate = ( value ) => {
    let date = new Date(value)
    return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
}
 
