import { defineStore } from 'pinia';
import axiosInstance from '@/services/api.js';

export const useTariffStore = defineStore('tariff', {
  state: () => {
    return {
      userCurrentTariff: null,
      error: {
        status: false,
        message: '',
      },
      isLoading: false,
    };
  },

  actions: {
    async getUserCurrentTariff() {
      try {
        this.isLoading = true;

        const userCurrentTariffResponse = await axiosInstance.get('/tariffs/current');

        const userCurrentTariff = userCurrentTariffResponse.data || {};

        if (!Object.keys(userCurrentTariff).length) {
          throw new Error('Не удалось загрузить статус регистрации пользователя');
        }

        this.userCurrentTariff = userCurrentTariff;

        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        this.error.status = true;
        this.error.message = error.message || 'Неизвестная ошибка';
      }
    },
  },
});
