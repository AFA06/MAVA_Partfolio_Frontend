// src/utils/api.js
import axios from 'axios';

export const API_BASE_URL = 'http://localhost:5050';

export const api = axios.create({
  baseURL: API_BASE_URL + '/api',
  // add headers, credentials etc if needed
});
