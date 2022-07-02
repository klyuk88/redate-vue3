import { defineStore } from 'pinia'
import { API } from '@/api/apiService.js'
import { useLocationsStore } from './locations.js'

export const useStatisticsStore = defineStore('statistics', {
  state: () => ({
    totalRegistered: 0,
    menRegistered: 0,
    newUsers: 0,
    usersStatisticsByCities: {
      data: [],
      error: {
        status: false,
        message: '',
      },
      isLoading: false,
    },
    usersStatisticsBySex: {
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
    async getStatictics() {
      try {
        this.isLoading = true

        const locations = useLocationsStore()

        if (!locations.countries.data.length || !locations.cities.data.length) {
          await locations.getLocations()
        }

        const country = locations.countries.data[0]
        const cities = locations.cities.data

        await this.getUsersStatisticsByCities(country?.id, cities)

        await this.getUsersStatisticsBySex(country?.id, cities[0]?.id, 1)

        this.isLoading = false
      } catch (error) {
        this.error.status = true
        this.error.message = error.message

        this.isLoading = false
      }
    },

    async getUsersStatisticsByCities(countryId, cities) {
      try {
        this.usersStatisticsByCities.isLoading = true

        const promises = []

        cities.forEach((city) => {
          const requestData = {
            countryId,
            cityId: city.id,
          }

          const request = API.post('/users/statistics', requestData)

          promises.push(request)
        })

        const response = await Promise.all(promises)

        const usersStatistics = response.map((item) => item.data || null)

        if (!usersStatistics.length) {
          throw new Error('Не удалось загрузить статистику пользователей')
        }

        const mappedUsersStatistics = usersStatistics.map((item, idx) => ({
          ...item,
          ...cities[idx],
        }))

        mappedUsersStatistics.sort((a, b) => b - a)

        this.usersStatisticsByCities.data = mappedUsersStatistics
        this.totalRegistered = mappedUsersStatistics[0]?.countryAll || 0
        this.newUsers = mappedUsersStatistics[0]?.countryNew || 0

        this.usersStatisticsByCities.isLoading = false
      } catch (error) {
        this.usersStatisticsByCities.status = true
        this.usersStatisticsByCities.message = error.message

        this.usersStatisticsByCities.isLoading = false

        throw new Error(error.message)
      }
    },

    async getUsersStatisticsBySex(countryId, cityId, sex) {
      try {
        this.usersStatisticsBySex.isLoading = true

        const usersStatisticsRequestData = {
          countryId,
          cityId,
          sex,
        }

        const usersStatisticsResponse = await API.post(
          '/users/statistics',
          usersStatisticsRequestData
        )

        if (!usersStatisticsResponse.status) {
          throw new Error(usersStatisticsResponse.message)
        }

        this.usersStatisticsBySex.data = usersStatisticsResponse.data
        this.menRegistered = usersStatisticsResponse.data?.countryAll || 0

        this.usersStatisticsBySex.isLoading = false
      } catch (error) {
        this.usersStatisticsBySex.error.status = true
        this.usersStatisticsBySex.error.message = error.message

        this.usersStatisticsBySex.isLoading = false

        throw new Error(error.message)
      }
    },
  },
})
