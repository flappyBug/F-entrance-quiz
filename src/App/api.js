import Axios from 'axios';

export const BASE_URL = 'http://localhost:8080';

export function get(path) {
  return Axios.get(`${BASE_URL}${path}`);
}

export function post(path, data) {
  return Axios.post(`${BASE_URL}${path}`, data);
}
// TODO GTB-工程实践: + 有把数据请求提取到单独的service，并且提取URL常量
