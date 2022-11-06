import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://172.16.31.224:3333'
});