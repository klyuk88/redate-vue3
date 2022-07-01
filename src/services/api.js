import axios from 'axios'

const defaultHeaders = {
  'Content-Type': 'application/json',
}

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: defaultHeaders,
})

export default instance
