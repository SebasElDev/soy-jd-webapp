import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt'],
      manifest: {
        name: 'Soy Juan Diego',
        short_name: 'YSJD',
        description: 'Recorrido interactivo del Nican Mopohua',
        theme_color: '#188994',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/assets/YSJDLogoFull.jpeg',
            sizes: '192x192',
            type: 'image/jpeg',
          },
          {
            src: '/assets/YSJDLogoFull.jpeg',
            sizes: '512x512',
            type: 'image/jpeg',
          },
          {
            src: '/assets/YSJDLogoFull.jpeg',
            sizes: '512x512',
            type: 'image/jpeg',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
})
