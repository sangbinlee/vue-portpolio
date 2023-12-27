import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })

export const useUserStore = defineStore("user", {
  state: () => ({
    username: null,
  }),
  getters: {
    isLoggedIn: (state) => {
      console.log('pinia [isLoggedIn state]',state);
      console.log('pinia [isLoggedIn state.username]',state.username);
      console.log('pinia [isLoggedIn state.username!= null ]',state.username!= null);
      return state.username != null;
    },
  },
  actions: {},
});