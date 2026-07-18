import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // Netlify's remote dev proxy (devserver-<branch>--<site>.netlify.app)
    allowedHosts: ['.netlify.app'],
  },
});
