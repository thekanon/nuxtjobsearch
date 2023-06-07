import { useCounterStore } from "./counter";
export const useUniqueNameStore = defineStore("uniqueName", {
  state: () => ({ uniqueName: [] }),
  getters: {},
  actions: {
    getQuokka(name) {
      const counterStore = useCounterStore();
      const key = parseInt(Math.random() * counterStore.count);
      this.uniqueName = [...this.uniqueName, [name, key]];
    },
  },
});
