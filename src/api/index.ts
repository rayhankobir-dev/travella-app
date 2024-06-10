// src/api/axios.js
import axios from "axios";
export const baseURL = import.meta.env.VITE_API_URL;

// Public Axios instance
export const publicAxios = axios.create({ baseURL });

// Authenticated Axios instance
export const authAxios = axios.create({ baseURL });
