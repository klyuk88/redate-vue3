import { API } from '@/api/apiService.js'

class ApiService {
  constructor() {
    this.API = API
  }

  async auth(email, encryptedPassword) {
    try {
      const authRequestData = {
        email,
        password: encryptedPassword,
      }

      const authResponse = await API.post('/auth', authRequestData, null, true)

      if (!authResponse.status) {
        throw new Error(authResponse.message)
      }

      return { data: authResponse.data, error: { status: false, message: '' } }
    } catch (error) {
      return { data: null, error: { status: true, message: error.message } }
    }
  }

  async updateTokensPair(refreshToken) {
    try {
      const updateTokensPairRequestData = {
        token: refreshToken,
      }

      const updateTokensPairResponse = await API.post(
        '/auth/token/update',
        updateTokensPairRequestData
      )

      if (!updateTokensPairResponse.status) {
        throw new Error(updateTokensPairResponse.message)
      }

      return {
        data: updateTokensPairResponse.data,
        error: { status: false, message: '' },
      }
    } catch (error) {
      return { data: null, error: { status: true, message: error.message } }
    }
  }
}

export const AuthApi = new ApiService()
