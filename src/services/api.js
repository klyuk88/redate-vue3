import axios from 'axios'

const defaultHeaders = {
  'Content-Type': 'application/json',
}

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: defaultHeaders,
});

export default instance;
