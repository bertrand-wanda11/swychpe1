import process from 'node:process'
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// API host the dev server proxies /api to (see src/lib/api.js). Proxying keeps
// local dev same-origin, so it works without the API's CORS allow-list.
const API_TARGET = process.env.VITE_API_PROXY_TARGET || 'https://swychpe-backend-7xs5xzofea-as.a.run.app'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: API_TARGET,
        changeOrigin: true,
        secure: true,
        configure: (proxy) => {
          // Drop the browser's localhost Origin so the API treats this as a plain server-to-server call.
          proxy.on('proxyReq', (req) => req.removeHeader('origin'))
        },
      },
    },
  },
})
