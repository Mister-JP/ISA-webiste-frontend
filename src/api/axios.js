import axios from 'axios';
const BASE_URL = 'https://isa-vt-backend.herokuapp.com/';//this is the address of the hosted backend

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});