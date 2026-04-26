import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync, existsSync } from 'fs';
import { resolve } from 'path';

// Custom domain nav.io → base '/'.
// Project-pages fallback → set BASE env to '/<repo>/' at build time.
const base = process.env.BASE ?? '/';

export default defineConfig({
  base,
  plugins: [
    react(),
    {
      name: 'spa-404-fallback',
      closeBundle() {
        // GitHub Pages serves 404.html on unknown paths.
        // Copy index.html → 404.html so React Router can hydrate any route.
        const dist = resolve(__dirname, 'dist');
        const src = resolve(dist, 'index.html');
        const dst = resolve(dist, '404.html');
        if (existsSync(src)) copyFileSync(src, dst);
      },
    },
  ],
});
