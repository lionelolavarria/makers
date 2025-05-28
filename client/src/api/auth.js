import axios from 'axios'

const BASE = 'http://localhost:5000/api/auth'

export const register = (data) => axios.post(`${BASE}/register`, data)
export const login = (data) => axios.post(`${BASE}/login`, data)
