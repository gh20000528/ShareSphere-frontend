import axios from 'axios'

export const makeRequest = axios.create({
    baseURL:"http://localhost:8808/api/",
    withCredentials: true,
})