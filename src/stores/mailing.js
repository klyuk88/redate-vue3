import { defineStore } from 'pinia'
import { API } from '@/api/apiService.js'
import { useLocationsStore } from './locations.js'

export const useMailingStore = defineStore('mailing', {
  state: () => ({
    price: {
      data: null,
      error: {
        status: false,
        message: '',
      },
      isLoading: false,
    },
    list: {
      data: [],
      error: {
        status: false,
        message: '',
      },
      isLoading: false,
    },
    isLoading: false,
    error: {
      status: false,
      message: '',
    },
  }),

  actions: {
    async getPrice() {
      try {
        this.price.isLoading = true

        const priceResponse = await API.get('/mailing/price')

        if (!priceResponse.status) {
          throw new Error(priceResponse.message)
        }

        this.price.data = priceResponse.data

        this.price.isLoading = false
      } catch (error) {
        this.price.error.status = true
        this.price.error.message = error.message

        this.price.isLoading = false
      }
    },

    async getList() {
      try {
        this.list.isLoading = true

        const listRequestData = {
          page: 0,
          count: 8,
        }

        const listResponse = await API.post('/mailing/list', listRequestData)

        if (!listResponse.status) {
          throw new Error(listResponse.message)
        }

        this.list.data = listResponse.data

        this.list.isLoading = false
      } catch (error) {
        this.list.error.status = true
        this.list.error.message = error.message

        this.list.isLoading = false
      }
    },

    async send(cityName, datingFormatName, message) {
      try {
        this.isLoading = true

        const locations = useLocationsStore()

        if (!locations.cities.data.length) {
          await locations.getLocations()
        }

        const city = locations.cities.data.filter(
          (city) => city.name === cityName
        )[0]

        const sendRequestData = {
          city: city.id,
          text: message,
        }

        const sendResponse = await API.post('/mailing/add', sendRequestData)

        if (!sendResponse.status) {
          throw new Error(sendResponse.message)
        }

        this.isLoading = false

        return sendResponse.data
      } catch (error) {
        this.error.status = true
        this.error.message = error.message

        this.isLoading = false

        return this.error
      }
    },
  },
})
