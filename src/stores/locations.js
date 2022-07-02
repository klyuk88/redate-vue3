import { defineStore } from 'pinia'
import { API } from '@/api/apiService.js'

export const useLocationsStore = defineStore('locations', {
  state: () => ({
    countries: {
      data: [],
      error: {
        status: false,
        message: '',
      },
      isLoading: false,
    },
    cities: {
      data: [],
      error: {
        status: false,
        message: '',
      },
      isLoading: false,
    },
    error: {
      status: false,
      message: '',
    },
    isLoading: false,
  }),

  actions: {
    async getLocations() {
      try {
        this.isLoading = true

        await this.getCountries()

        const countryId = this.countries.data[0]?.id

        await this.getCities(countryId)

        this.isLoading = false
      } catch (error) {
        this.error.status = true
        this.error.message = error.message

        this.isLoading = false
      }
    },

    async getCountries() {
      try {
        this.countries.isLoading = true

        const countriesResponse = await API.get('/database/countries')

        if (!countriesResponse.status) {
          throw new Error(countriesResponse.message)
        }

        this.countries.data = countriesResponse.data.list

        this.countries.isLoading = false
      } catch (error) {
        this.countries.error.status = true
        this.countries.error.message = error.message

        this.countries.isLoading = false

        throw new Error(error.message)
      }
    },

    async getCities(countryId) {
      try {
        this.cities.isLoading = true

        const citiesRequestData = {
          pagination: {
            page: 0,
            count: 500,
          },
          countryId,
        }

        const citiesResponse = await API.post(
          '/database/cities',
          citiesRequestData
        )

        if (!citiesResponse.status) {
          throw new Error(citiesResponse.message)
        }

        this.cities.data = citiesResponse.data.list

        this.cities.isLoading = false
      } catch (error) {
        this.cities.error.status = true
        this.cities.error.message = error.message

        this.cities.isLoading = false

        throw new Error(error.message)
      }
    },
  },
})
