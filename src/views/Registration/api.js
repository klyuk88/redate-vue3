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

      return {
        data: registrationResponse.data,
        error: { status: false, message: '' },
      }
    } catch (error) {
      return { data: null, error: { status: true, message: error.message } }
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

      return {
        data: acceptEmailResponse.data,
        error: { status: false, message: '' },
      }
    } catch (error) {
      return { data: null, error: { status: true, message: error.message } }
    }
  }

  async randomPhoto() {
    try {
      const randomPhotoResponse = await API.get('/user/photo/add/random')

      if (!randomPhotoResponse.status) {
        throw new Error(randomPhotoResponse.message)
      }

      return {
        data: randomPhotoResponse.data,
        error: { status: false, message: '' },
      }
    } catch (error) {
      return { data: null, error: { status: true, message: error.message } }
    }
  }

  async photoList() {
    try {
      const photoListResponse = await API.get('/user/photo/list')

      if (!photoListResponse.status) {
        throw new Error(photoListResponse.message)
      }

      return {
        data: photoListResponse.data,
        error: { status: false, message: '' },
      }
    } catch (error) {
      return { data: null, error: { status: true, message: error.message } }
    }
  }

  async photoById(id) {
    const PHOTO_SIZE = 0

    try {
      const photoByIdResponse = await API.get(
        `/user/photo/${id}/${PHOTO_SIZE}`,
        'arraybuffer'
      )

      if (!photoByIdResponse.status) {
        throw new Error(photoByIdResponse.message)
      }

      return {
        data: photoByIdResponse.data,
        error: { status: false, message: '' },
      }
    } catch (error) {
      return { data: null, error: { status: true, message: error.message } }
    }
  }

  async addPhoto(file) {
    try {
      const formData = new FormData()

      formData.append('image', file)

      const photoByIdResponse = await API.post('/user/photo/add', formData, {
        'Content-Type': 'multipart/form-data',
      })

      if (!photoByIdResponse.status) {
        throw new Error(photoByIdResponse.message)
      }

      return {
        data: photoByIdResponse.data,
        error: { status: false, message: '' },
      }
    } catch (error) {
      return { data: null, error: { status: true, message: error.message } }
    }
  }

  async setAvatar(id) {
    try {
      const setAvatarResponse = await API.get(`/user/photo/${id}/avatar`)

      if (!setAvatarResponse.status) {
        throw new Error(setAvatarResponse.message)
      }

      return {
        data: setAvatarResponse.data,
        error: { status: false, message: '' },
      }
    } catch (error) {
      return { data: null, error: { status: true, message: error.message } }
    }
  }

  async deletePhoto(id) {
    try {
      const deletePhotoResponse = await API.get(`/user/photo/${id}/delete`)

      if (!deletePhotoResponse.status) {
        throw new Error(deletePhotoResponse.message)
      }

      return {
        data: deletePhotoResponse.data,
        error: { status: false, message: '' },
      }
    } catch (error) {
      return { data: null, error: { status: true, message: error.message } }
    }
  }
}

export const RegistrationApi = new ApiService()
