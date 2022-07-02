import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_URL

const HEADERS = {
  'Content-Type': 'application/json; charset=utf-8',
}

const TIMEOUT = 10 * 1000

class ApiService {
  constructor() {
    this.client = this.initClient()
  }

  initClient() {
    return axios.create({
      baseURL: BASE_URL,
      headers: HEADERS,
      timeout: TIMEOUT,
    })
  }

  getToken() {
    return localStorage.getItem('token') || null
  }

  async get(url) {
    const config = { url, method: 'GET' }

    const response = await this.request(config)

    return response
  }

  async post(url, data) {
    const config = { url, method: 'POST', data }

    const response = await this.request(config)

    return response
  }

  async request(requestConfig) {
    try {
      const token = this.getToken()

      this.client.interceptors.request.use(
        (config) => {
          if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
          }

          return config
        },
        (error) => {
          return Promise.reject(error)
        }
      )

      const response = await this.client(requestConfig)

      return { status: true, data: response.data }
    } catch (error) {
      return this.handleError(error)
    }
  }

  handleError(error) {
    return {
      status: false,
      message:
        error.response?.data?.message || error.message || 'Неизвестная ошибка',
    }
  }
}

export const API = new ApiService()
