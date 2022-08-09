import { API } from './apiService.js'

class ApiService {
  constructor() {
    this.API = API
  }

  async countries() {
    try {
      const countriesRequestData = {
        pagination: {
          page: 0,
          count: 500,
        },
        name: 'Рус',
      }

      const countriesResponse = await API.post(
        '/database/countries',
        countriesRequestData
      )

      if (!countriesResponse.status) {
        throw new Error(countriesResponse.message)
      }

      return {
        data: countriesResponse.data,
        error: { status: false, message: '' },
      }
    } catch (error) {
      return { data: null, error: { status: true, message: error.message } }
    }
  }

  async cities(countryId) {
    try {
      const citiesRequestData = {
        pagination: {
          page: 0,
          count: 500,
        },
        name: 'Рус',
        country: countryId,
      }

      const citiesResponse = await API.post(
        '/database/cities',
        citiesRequestData
      )

      if (!citiesResponse.status) {
        throw new Error(citiesResponse.message)
      }

      return {
        data: citiesResponse.data,
        error: { status: false, message: '' },
      }
    } catch (error) {
      return { data: null, error: { status: true, message: error.message } }
    }
  }

  async languages() {
    try {
      const languagesRequestData = {
        pagination: {
          page: 0,
          count: 500,
        },
        name: 'Рус',
      }

      const languagesResponse = await API.post(
        '/database/languages',
        languagesRequestData
      )

      if (!languagesResponse.status) {
        throw new Error(languagesResponse.message)
      }

      return {
        data: languagesResponse.data,
        error: { status: false, message: '' },
      }
    } catch (error) {
      return { data: null, error: { status: true, message: error.message } }
    }
  }

  async nationalities() {
    try {
      const nationalitiesRequestData = {
        pagination: {
          page: 0,
          count: 500,
        },
        name: 'Рус',
      }

      const nationalitiesResponse = await API.post(
        '/database/nationalities',
        nationalitiesRequestData
      )

      if (!nationalitiesResponse.status) {
        throw new Error(nationalitiesResponse.message)
      }

      return {
        data: nationalitiesResponse.data,
        error: { status: false, message: '' },
      }
    } catch (error) {
      return { data: null, error: { status: true, message: error.message } }
    }
  }

  async hobbies() {
    try {
      const hobbiesRequestData = {
        pagination: {
          page: 0,
          count: 500,
        },
        name: 'Рус',
      }

      const hobbiesResponse = await API.post(
        '/database/nationalities',
        hobbiesRequestData
      )

      if (!hobbiesResponse.status) {
        throw new Error(hobbiesResponse.message)
      }

      return {
        data: hobbiesResponse.data,
        error: { status: false, message: '' },
      }
    } catch (error) {
      return { data: null, error: { status: true, message: error.message } }
    }
  }
}

export const Api = new ApiService()
