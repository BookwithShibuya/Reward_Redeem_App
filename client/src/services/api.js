import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const login = (username, password) => axios.post(`${API_URL}/auth/login`, { username, password });

export const fetchRewards = (token) => axios.get(`${API_URL}/rewards`, { headers: { Authorization: token } });
