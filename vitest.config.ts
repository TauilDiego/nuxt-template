import { defineVitestConfig } from '@nuxt/test-utils/config'
import path from "path"

export default defineVitestConfig({
  // any custom Vitest config you require
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    coverage: {
      provider: "istanbul",
    },
    environment: "jsdom",
    environmentOptions: {
      nuxt: {
        mock: {
          intersectionObserver: true,
          indexedDb: true,
        }
      }
    }
  }
})
