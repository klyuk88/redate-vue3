import { defineStore } from 'pinia'
import axiosInstance from '@/services/api.js'

export const useUsersStore = defineStore('users', {
  state: () => {
    return {
      error: {
        status: false,
        message: '',
      },
      isLoading: false,
    }
  },

  actions: {
    async getSpecialUsers(sex, page = 0) {
      try {
        this.isLoading = true

        const specialUsersRequestData = {
          pagination: {
            page,
            count: 4,
          },
          special: true,
          sex,
        }

        const specialUsersResponse = await axiosInstance.post(
          '/users/list',
          specialUsersRequestData
        )

        console.log(specialUsersResponse)

        // const user = userResponse.data || null;

        // if (!Object.keys(user).length) {
        //   throw new Error('Не удалось загрузить данные о пользователе');
        // }

        // this.user = user;

        // this.isLoading = false;
      } catch (error) {
        this.isLoading = false
        this.error.status = true
        this.error.message = error.message || 'Неизвестная ошибка'
      }
    },
  },
})
