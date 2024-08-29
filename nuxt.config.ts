import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  imports: {
    autoImport: true,
  },
  ssr: false,
  alias: {
    "@": "/<srcDir>",
  },
  modules: [
    "@nuxt/test-utils/module"
  ],
  srcDir: "src/",
  typescript: {
    typeCheck: true,
    strict: true,
  },
})