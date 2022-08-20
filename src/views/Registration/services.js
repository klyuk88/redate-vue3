import router from '@/router'
import { useUserStore } from '@/stores/user'
import { useDatabaseStore } from '@/stores/database'
import { useRegistrationStore } from './store/registration'
import { RegistrationApi } from './api'
import { encryptPassword } from '@/services/encrypt'
import { DatabaseService } from '@/services/database'
import { Api } from '@/api/api'

class Service {
  constructor() {
    this.router = router
    this.userStore = useUserStore()
    this.databaseStore = useDatabaseStore()
    this.registrationStore = useRegistrationStore()
  }

  forbidden() {
    this.registrationStore.forbidden.isLoading = true

    localStorage.setItem('forbidden', true)

    this.registrationStore.forbidden.data = true

    this.userStore.forbidden.data = true

    this.registrationStore.forbidden.isLoading = false

    this.router.push({ name: 'StartPage' })
  }

  async registration(email, password) {
    this.registrationStore.registration.isLoading = true

    const encryptedPassword = encryptPassword(password)

    const { sex } = this.registrationStore

    const { data, error } = await RegistrationApi.registration(
      email,
      encryptedPassword,
      sex
    )

    if (error.status) {
      this.registrationStore.registration.error = error

      this.registrationStore.registration.isLoading = false

      return
    }

    localStorage.setItem('email', email)

    this.userStore.email = email

    this.registrationStore.registration.data = data

    this.userStore.setTokens(data)

    this.registrationStore.registration.isLoading = false

    this.router.push({ name: 'Registration accept' })
  }

  async acceptEmail(code) {
    this.registrationStore.acceptEmail.isLoading = true

    let { email } = this.userStore

    if (!email === null) {
      email = localStorage.getItem('email')
    }

    const codeStr = code.join('')

    const { data, error } = await RegistrationApi.acceptEmail(email, codeStr)

    if (error.status) {
      this.registrationStore.acceptEmail.error = error

      this.registrationStore.acceptEmail.isLoading = false

      return
    }

    this.registrationStore.acceptEmail.data = data

    this.registrationStore.acceptEmail.isLoading = false

    this.router.push({ name: 'Registration second' })
  }

  saveSecondStage(info) {
    this.registrationStore.secondStage.isLoading = true

    localStorage.setItem('secondStage', JSON.stringify(info))

    this.registrationStore.secondStage.data = info

    this.registrationStore.secondStage.isLoading = false

    this.router.push({ name: 'Registration third' })
  }

  hobbies() {
    this.registrationStore.hobbies.isLoading = true

    const error = this.databaseStore.hobbies.error

    if (error?.status) {
      this.registrationStore.hobbies.error = this.databaseStore.hobbies.error

      this.registrationStore.hobbies.isLoading = false

      return
    }

    const hobbies = this.databaseStore.hobbies.data?.map((hobby) => ({
      title: hobby.name,
      active: false,
    }))

    this.registrationStore.hobbies.data = hobbies

    this.registrationStore.hobbies.isLoading = false
  }

  setActiveHobby(hobby) {
    this.registrationStore.hobbies.isLoading = true

    const hobbies = this.registrationStore.hobbies.data.map((el) =>
      el.title === hobby.title ? { active: !el.active, title: el.title } : el
    )

    this.registrationStore.hobbies.data = hobbies

    this.registrationStore.hobbies.isLoading = false
  }

  languages() {
    this.registrationStore.languages.isLoading = true

    const error = this.databaseStore.languages.error

    if (error?.status) {
      this.registrationStore.languages.error =
        this.databaseStore.languages.error

      this.registrationStore.languages.isLoading = false

      return
    }

    const languages = this.databaseStore.languages.data?.map((language) => ({
      title: language.name,
      active: false,
    }))

    this.registrationStore.languages.data = languages

    this.registrationStore.languages.isLoading = false
  }

  setActiveLanguage(language) {
    this.registrationStore.languages.isLoading = true

    const languages = this.registrationStore.languages.data.map((el) =>
      el.title === language.title ? { active: !el.active, title: el.title } : el
    )

    this.registrationStore.languages.data = languages

    this.registrationStore.languages.isLoading = false
  }

  saveThirdStage(info) {
    this.registrationStore.thirdStage.isLoading = true

    localStorage.setItem('thirdStage', JSON.stringify(info))

    this.registrationStore.thirdStage.data = info

    this.registrationStore.thirdStage.isLoading = false

    this.router.push({ name: 'Registration fourth' })
  }

  async setUserInfo(info) {
    this.registrationStore.userInfo.isLoading = true

    const secondStage = this.registrationStore.secondStage.data

    const thirdStage = this.registrationStore.thirdStage.data

    const fourthStage = info

    let countries = this.databaseStore.countries.data
    let cities = this.databaseStore.cities.data

    if (!countries.length || !cities.length) {
      await DatabaseService.countries()

      const countriesError = this.databaseStore.countries.error

      if (countriesError?.status) {
        this.registrationStore.userInfo.error = countriesError

        this.registrationStore.userInfo.isLoading = false

        return
      }

      countries = this.databaseStore.countries.data

      await DatabaseService.cities()

      const citiesError = this.databaseStore.countries.error

      if (citiesError?.status) {
        this.registrationStore.userInfo.error = citiesError

        this.registrationStore.userInfo.isLoading = false

        return
      }

      cities = this.databaseStore.cities.data
    }

    const countryId = countries.filter(
      (country) => country.name === secondStage.country
    )[0]?.id

    const formatCities = []

    cities.forEach((list) => {
      formatCities.push(...list)
    })

    const cityId = formatCities.filter(
      (city) => city.name === secondStage.city
    )[0]?.id

    let nationalities = this.databaseStore.nationalities.data

    if (!nationalities.length) {
      await DatabaseService.nationalities()

      const nationalitiesError = this.databaseStore.nationalities.error

      if (nationalitiesError?.status) {
        this.registrationStore.userInfo.error = nationalitiesError

        this.registrationStore.userInfo.isLoading = false

        return
      }

      nationalities = this.databaseStore.nationalities.data
    }

    const sex = this.registrationStore.sex === '1'

    const nationalityId = nationalities.filter((nationality) =>
      sex
        ? nationality.nameMan === secondStage.nationality
        : nationality.nameWomen === secondStage.nationality
    )[0]?.id

    let datingFormats = []

    if (fourthStage?.datingFormats) {
      datingFormats = fourthStage.datingFormats
        .filter((format) => format.active)
        .map((format) => format.id.toString())
    }

    let smoke = 2

    if (thirdStage?.attitudeTowardsSmoking) {
      smoke = thirdStage.attitudeTowardsSmoking
        .filter((smoke) => smoke.active)
        .map((smoke) => smoke.id)[0]
    }

    let alcohol = 2

    if (thirdStage?.attitudeToAlcohol) {
      alcohol = thirdStage.attitudeToAlcohol
        .filter((alcohol) => alcohol.active)
        .map((alcohol) => alcohol.id)[0]
    }

    let hobbies = this.databaseStore.hobbies.data

    if (!hobbies.length) {
      await DatabaseService.hobbies()

      const hobbiesError = this.databaseStore.hobbies.error

      if (hobbiesError?.status) {
        this.registrationStore.userInfo.error = hobbiesError

        this.registrationStore.userInfo.isLoading = false

        return
      }

      hobbies = this.databaseStore.hobbies.data
    }

    let hobbiesNames = []

    if (thirdStage?.hobbies) {
      hobbiesNames = thirdStage.hobbies
        .filter((hobby) => hobby.active)
        .map((hobby) => hobby.title)
    }

    const hobbiesIds = hobbies
      .filter((hobby) => {
        let status = false

        hobbiesNames.forEach((hobbyName) => {
          if (hobby.name === hobbyName) {
            status = true
          }
        })

        return status
      })
      .map((hobby) => hobby.id)

    let languages = this.databaseStore.languages.data

    if (!languages.length) {
      await DatabaseService.languages()

      const languagesError = this.databaseStore.languages.error

      if (languagesError?.status) {
        this.registrationStore.userInfo.error = languagesError

        this.registrationStore.userInfo.isLoading = false

        return
      }

      languages = this.databaseStore.languages.data
    }

    let languagesNames = []

    if (thirdStage?.languages) {
      languagesNames = thirdStage.languages
        .filter((language) => language.active)
        .map((language) => language.title)
    }

    const languagesIds = languages
      .filter((language) => {
        let status = false

        languagesNames.forEach((languageName) => {
          if (language.name === languageName) {
            status = true
          }
        })

        return status
      })
      .map((language) => language.id)

    const requestData = {
      country: countryId,
      city: cityId,
      nationality: nationalityId,
      height: Number(secondStage.growth),
      weight: Number(secondStage.weight),
      bdate: `${secondStage.yearValue}-${secondStage.monthValue}-${secondStage.dayValue}T00:00:00+0300`,
      name: secondStage.name,
      about: fourthStage.about,
      monthMoney: fourthStage.money * 100000,
      datingFormats,
      smoke,
      alcohol,
      hobbies: hobbiesIds,
      languages: languagesIds,
    }

    if (!sex) {
      requestData.womenParameters = {
        breast: Number(secondStage.breast),
        waist: Number(secondStage.waist),
        tips: Number(secondStage.tips),
      }
    }

    const { data, error } = await Api.setUserInfo(requestData)

    if (error.status) {
      this.registrationStore.userInfo.error = error

      this.registrationStore.userInfo.isLoading = false

      return
    }

    this.registrationStore.userInfo.data = data

    this.registrationStore.userInfo.isLoading = false

    this.router.push({ name: 'Registration fifth' })
  }

  async photoList() {
    this.registrationStore.photoList.isLoading = true

    const { data, error } = await RegistrationApi.photoList()

    if (error.status) {
      this.registrationStore.photoList.error = error

      this.registrationStore.photoList.isLoading = false

      return
    }

    const photos = data.list

    const promises = []

    photos.forEach((photo) => {
      promises.push(RegistrationApi.photoById(photo.id))
    })

    const result = await Promise.all(promises)

    photos.forEach((photo, idx) => {
      photo.arraybuffer = result[idx]?.data
      photo.error = result[idx]?.error
    })

    this.registrationStore.photoList.data = photos
      .filter((photo) => !photo.error.status)
      .map((photo) => {
        return {
          ...photo,
          src: `data:image;base64,${btoa(
            String.fromCharCode.apply(null, new Uint8Array(photo.arraybuffer))
          )}`,
        }
      })

    this.registrationStore.photoList.isLoading = false
  }

  async randomPhoto() {
    this.registrationStore.randomPhoto.isLoading = true

    const { data, error } = await RegistrationApi.randomPhoto()

    if (error.status) {
      const photoListResponse = await RegistrationApi.photoList()

      if (photoListResponse.error.status) {
        this.registrationStore.randomPhoto.error = photoListResponse.error

        this.registrationStore.randomPhoto.isLoading = false

        return
      }

      const photo = photoListResponse.data.list.filter((item) => item.avatar)[0]

      if (!photo.id) {
        this.registrationStore.randomPhoto.error = photoListResponse.error

        this.registrationStore.randomPhoto.isLoading = false

        return
      }

      const photoByIdResponse = await RegistrationApi.photoById(photo.id)

      if (photoByIdResponse.error.status) {
        this.registrationStore.randomPhoto.error = error

        this.registrationStore.randomPhoto.isLoading = false

        return
      }

      this.registrationStore.randomPhoto.data = `data:image;base64,${btoa(
        String.fromCharCode.apply(null, new Uint8Array(photoByIdResponse.data))
      )}`

      this.registrationStore.randomPhoto.isLoading = false

      return
    }

    const photoByIdResponse = await RegistrationApi.photoById(data.id)

    if (photoByIdResponse.error.status) {
      this.registrationStore.randomPhoto.error = error

      this.registrationStore.randomPhoto.isLoading = false

      return
    }

    this.registrationStore.randomPhoto.data = `data:image;base64,${btoa(
      String.fromCharCode.apply(null, new Uint8Array(photoByIdResponse.data))
    )}`

    this.registrationStore.randomPhoto.isLoading = false
  }

  async addPhoto(file) {
    this.registrationStore.addPhoto.isLoading = true

    const { data, error } = await RegistrationApi.addPhoto(file)

    if (error.status) {
      this.registrationStore.addPhoto.error = error

      this.registrationStore.addPhoto.isLoading = false

      return
    }

    this.registrationStore.addPhoto.data = data

    this.registrationStore.addPhoto.isLoading = false
  }

  async setAvatar(id) {
    this.registrationStore.setAvatar.isLoading = true

    const { data, error } = await RegistrationApi.setAvatar(id)

    if (error.status) {
      this.registrationStore.setAvatar.error = error

      this.registrationStore.setAvatar.isLoading = false

      return
    }

    this.registrationStore.setAvatar.data = data

    this.registrationStore.setAvatar.isLoading = false
  }

  async deletePhoto(id) {
    this.registrationStore.deletePhoto.isLoading = true

    const { data, error } = await RegistrationApi.deletePhoto(id)

    if (error.status) {
      this.registrationStore.deletePhoto.error = error

      this.registrationStore.deletePhoto.isLoading = false

      return
    }

    this.registrationStore.deletePhoto.data = data

    this.registrationStore.deletePhoto.isLoading = false
  }
}

export const RegistrationService = new Service()
