import axios from "axios"

export const apiBase = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

export const apiUser = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/user`
})

export const apiFile = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/files`
})