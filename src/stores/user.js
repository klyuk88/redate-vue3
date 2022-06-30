import { defineStore } from 'pinia';
import axiosInstance from '@/services/api.js';

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      user: null,
      userRegistrationStatus: null,
      error: {
        status: false,
        message: '',
      },
      isLoading: false,
    };
  },

  actions: {
    async getUser() {
      try {
        this.isLoading = true;

        const userResponse = await axiosInstance.get('/users/me');

        const user = userResponse.data || {};

        if (!Object.keys(user).length) {
          throw new Error('Не удалось загрузить данные о пользователе');
        }

        this.user = user;

        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        this.error.status = true;
        this.error.message = error.message || 'Неизвестная ошибка';
      }
    },

    async getUserRegistrationStatus() {
      try {
        this.isLoading = true;

        const userRegistrationStatusResponse = await axiosInstance.get('/users/registration/status');

        const userRegistrationStatus = userRegistrationStatusResponse.data || {};

        if (!Object.keys(userRegistrationStatus).length) {
          throw new Error('Не удалось загрузить статус регистрации пользователя');
        }

        this.userRegistrationStatus = userRegistrationStatus;

        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        this.error.status = true;
        this.error.message = error.message || 'Неизвестная ошибка';
      }
    },
  },
});
