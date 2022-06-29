import { defineStore } from 'pinia'
import axiosInstance from '@/services/api.js'

export const useStatisticsStore = defineStore('statistics', {
  state: () => {
    return {
      totalRegistered: 0,
      menRegistered: 0,
      newUsers: 0,
      usersStatisticsByCities: [],
      error: {
        status: false,
        message: '',
      },
      isLoading: false
    }
  },

  actions: {
    async getStatictics() {
      try {
        this.isLoading = true

        const countries = await this.getCountries()
        const country = countries[0]

        const cities = await this.getCities(country.id)

        const usersStatisticsByCities = await this.getUsersStatisticsByCities(country.id, cities)

        const usersStatisticsBySex = await this.getUserStatisticsBySex(country.id, cities[0].id, 1)

        this.totalRegistered = usersStatisticsByCities[0].countryAll || 0
        this.menRegistered = usersStatisticsBySex.countryAll || 0
        this.newUsers = usersStatisticsByCities[0].countryNew || 0
        this.usersStatisticsByCities = usersStatisticsByCities

        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        this.error.status = true
        this.error.message = error.message || 'Неизвестная ошибка'
      }
    },

    async getCountries() {
      try {
        const countriesResponse = await axiosInstance.get('/database/countries')

        const countries = countriesResponse.data?.list || []

        if (!countries.length) {
          throw new Error('Не удалось загрузить список стран')
        }

        return countries
      } catch (error) {
        throw new Error(error.message)
      }
    },

    async getCities(countryId) {
      try {
        const citiesRequestData = {
          pagination: {
            page: 0,
            count: 500,
          },
          countryId,
        }

        const citiesResponse = await axiosInstance.post('/database/cities', citiesRequestData)

        const cities = citiesResponse.data?.list || []

        if (!cities.length) {
          throw new Error('Не удалось загрузить список городов')
        }

        return cities
      } catch (error) {
        throw new Error(error.message)
      }
    },

    async getUsersStatisticsByCities(countryId, cities) {
      try {
        const promises = []

        cities.forEach((city) => {
          const requestData = {
            countryId,
            cityId: city.id,
          }

          const request = axiosInstance.post('/users/statistics', requestData)

          promises.push(request)
        })

        const response = await Promise.all(promises)

        const usersStatistics = response.map((item) => item.data || {})

        if (!usersStatistics.length) {
          throw new Error('Не удалось загрузить статистику пользователей')
        }

        const mappedUsersStatistics = usersStatistics.map((item, idx) => ({ ...item, ...cities[idx] }))

        mappedUsersStatistics.sort((a, b) => b - a)

        return mappedUsersStatistics
      } catch (error) {
        throw new Error(error.message)
      }
    },

    async getUserStatisticsBySex(countryId, cityId, sex) {
      try {
        const usersStatisticsRequestData = {
          countryId,
          cityId,
          sex
        }

        const usersStatisticsResponse = await axiosInstance.post('/users/statistics', usersStatisticsRequestData)

        const usersStatistics = usersStatisticsResponse.data || {}

        if (!Object.keys(usersStatistics).length) {
          throw new Error('Не удалось загрузить статистику пользователей по полу')
        }

        return usersStatistics
      } catch (error) {
        throw new Error(error.message)
      }
    },
  },
})
