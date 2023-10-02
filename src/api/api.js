import axios from 'axios'

export const api = axios.create({
    baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
    headers: {
        API_KEY: process.env.REACT_APP_API_KEY
    }
})
