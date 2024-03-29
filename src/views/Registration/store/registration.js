import { defineStore } from 'pinia'

export const useRegistrationStore = defineStore('registration', {
  state: () => ({
    registration: {
      data: null,
      error: null,
      isLoading: false,
    },
    sex: localStorage.getItem('sex') || null,
    email: localStorage.getItem('email') || null,
    acceptEmail: {
      data: null,
      error: null,
      isLoading: false,
    },
    forbidden: {
      data: null,
      isLoading: false,
    },
    secondStage: {
      data: JSON.parse(localStorage.getItem('secondStage')) || null,
      isLoading: false,
    },
    hobbies: {
      data: JSON.parse(localStorage.getItem('thirdStage'))?.hobbies || [],
      error: null,
      isLoading: false,
    },
    languages: {
      data: JSON.parse(localStorage.getItem('thirdStage'))?.languages || [],
      error: null,
      isLoading: false,
    },
    thirdStage: {
      data: JSON.parse(localStorage.getItem('thirdStage')) || null,
      isLoading: false,
    },
    userInfo: {
      data: null,
      error: null,
      isLoading: false,
    },
    randomPhoto: {
      data: null,
      error: null,
      isLoading: false,
    },
    photoList: {
      data: [],
      error: null,
      isLoading: false,
    },
    addPhoto: {
      data: null,
      error: null,
      isLoading: false,
    },
    setAvatar: {
      data: null,
      error: null,
      isLoading: false,
    },
    deletePhoto: {
      data: null,
      error: null,
      isLoading: false,
    },
  }),
})
