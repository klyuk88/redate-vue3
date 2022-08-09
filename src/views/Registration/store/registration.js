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
    hobbies: ['Спорт', 'Вино', 'Путешествие', 'Ужасы'],
    languages: ['Английский', 'Испанский', 'Татарский'],
  }),
})
