// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    // Will be available in both server and client
    axios: {
      baseURL: process.env.BASE_URL || "http://localhost:3000",

      // https://axios.nuxtjs.org/options/#proxy
      proxy: true,

      // https://axios.nuxtjs.org/options/#debug
      debug: process.env.NODE_ENV === "development",
    },
  },
  vite: {
    server: {
      hmr: true,
    },
  },
  modules: ["@pinia/nuxt"],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
      ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
});
