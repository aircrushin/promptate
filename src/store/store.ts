// src/stores/mainStore.js
import { defineStore } from 'pinia'

export const usePromptStore = defineStore('prompt', {
    state: () => ({
      inputValue: '',
    }),
    actions: {
      updateInputValue(newValue: string) {
        this.inputValue = newValue;
      },
    },
  });