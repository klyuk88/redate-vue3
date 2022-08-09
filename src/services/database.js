import { useDatabaseStore } from '@/stores/database'
import { Api } from '@/api/api'

class Service {
  constructor() {
    this.databaseStore = useDatabaseStore()
  }

  async countries() {
    this.databaseStore.countries.isLoading = true

    const { data, error } = await Api.countries()

    if (error.status) {
      this.databaseStore.countries.error = error

      this.databaseStore.countries.isLoading = false

      return
    }

    this.databaseStore.countries.data = data.list

    this.databaseStore.countries.isLoading = false
  }

  async cities() {
    this.databaseStore.cities.isLoading = true

    const countries = this.databaseStore.countries.data

    const promises = []

    countries.forEach((country) => {
      promises.push(Api.cities(country.id))
    })

    const result = await Promise.all(promises)

    const errors = result.map((el) => el.error)

    let error = null

    errors.forEach((el) => {
      if (el.status) {
        error = el
      }
    })

    if (error?.status) {
      this.databaseStore.cities.error = error

      this.databaseStore.cities.isLoading = false

      return
    }

    const data = result.map((el) => el.data.list)

    this.databaseStore.cities.data = data

    this.databaseStore.cities.isLoading = false
  }

  async languages() {
    this.databaseStore.languages.isLoading = true

    const { data, error } = await Api.languages()

    if (error.status) {
      this.databaseStore.languages.error = error

      this.databaseStore.languages.isLoading = false

      return
    }

    this.databaseStore.languages.data = data.list

    this.databaseStore.languages.isLoading = false
  }

  async nationalities() {
    this.databaseStore.nationalities.isLoading = true

    const { data, error } = await Api.nationalities()

    if (error.status) {
      this.databaseStore.nationalities.error = error

      this.databaseStore.nationalities.isLoading = false

      return
    }

    this.databaseStore.nationalities.data = data.list

    this.databaseStore.nationalities.isLoading = false
  }

  async hobbies() {
    this.databaseStore.hobbies.isLoading = true

    const { data, error } = await Api.hobbies()

    if (error.status) {
      this.databaseStore.hobbies.error = error

      this.databaseStore.hobbies.isLoading = false

      return
    }

    this.databaseStore.hobbies.data = data.list

    this.databaseStore.hobbies.isLoading = false
  }
}

export const DatabaseService = new Service()
