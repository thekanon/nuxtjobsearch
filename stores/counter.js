export const useCounterStore = defineStore("counter", {
  state: () => ({ count: 1, name: "Eduardo" }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
    clearCount() {
      this.count = 0;
    },
  },
});
