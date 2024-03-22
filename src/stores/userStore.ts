// src/stores/userStore.ts
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    isLoggedIn: false,
    username: '',
    token: '',
  }),
  actions: {
    login(username: string, token: string) {
      this.isLoggedIn = true;
      this.username = username;
      this.token = token;
    },
    logout() {
      this.isLoggedIn = false;
      this.username = '';
      this.token = '';
    },
  },
})
