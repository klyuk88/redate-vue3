import { API } from '@/api/apiService.js'

class ApiService {
  constructor() {
    this.API = API
  }

  async registration(email, encryptedPassword, sex) {
    try {
      const registrationRequestData = {
        email,
        password: encryptedPassword,
        sex,
      }

      const registrationResponse = await API.post(
        '/auth/registration',
        registrationRequestData
      )

      if (!registrationResponse.status) {
        throw new Error(registrationResponse.message)
      }

      return { data: registrationResponse.data, error: null }
    } catch (error) {
      return { data: null, error: { status: false, message: error.message } }
    }
  }

  async acceptEmail(email, code) {
    try {
      const acceptEmailRequestData = {
        email,
        code,
      }

      const acceptEmailResponse = await API.post(
        '/user/email/accept',
        acceptEmailRequestData
      )

      if (!acceptEmailResponse.status) {
        throw new Error(acceptEmailResponse.message)
      }

      return { data: acceptEmailResponse.data, error: null }
    } catch (error) {
      return { data: null, error: { status: false, message: error.message } }
    }
  }
}

export const RegistrationApi = new ApiService()
