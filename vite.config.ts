import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      devOptions: {
        enabled: true,
      },
      injectRegister: 'auto',
      registerType: 'autoUpdate',
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'z-wordCounter-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
        globPatterns: ['**/*.{js,ts,tsx,jsx,css,html,ico,png,svg,jpg,webp}'],
      },
      manifest: {
        name: 'Z-word Counter',
        short_name: 'Z-WordCounter',
        description:
          'Z-Word Counter adalah alat hitung kata online yang memudahkan Anda menghitung jumlah kata dalam teks atau paragraf. Gunakan Z-Word Counter untuk menghitung kata dengan cepat dan praktis',
        theme_color: '#020617',
        display: 'standalone',
        background_color: '#030712',
        icons: [
          {
            src: '144.png',
            sizes: '144x144',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: '512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
    }),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
