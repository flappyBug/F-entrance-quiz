import Axios from 'axios';

export const BASE_URL = 'http://localhost:8080';

export function get(path) {
  return Axios.get(`${BASE_URL}${path}`);
}

export function post(path, data) {
  return Axios.post(`${BASE_URL}${path}`, data);
}
