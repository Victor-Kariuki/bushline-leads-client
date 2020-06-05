import axios from 'axios';

const $http = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  header: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

const token = localStorage.getItem('access_token');
if (token) {
  $http.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export default $http;
