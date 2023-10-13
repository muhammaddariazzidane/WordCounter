import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
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
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      },
      manifest: {
        name: 'Z-word Counter',
        short_name: 'Z-WordCounter',
        description:
          'Z-Word Counter adalah alat hitung kata online yang memudahkan Anda menghitung jumlah kata dalam teks atau paragraf. Gunakan Z-Word Counter untuk menghitung kata dengan cepat dan praktis',
        theme_color: '#4f46e5',
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
});
