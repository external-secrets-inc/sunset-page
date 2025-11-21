// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://external-secrets-inc.github.io',
  base: '/sunset-page', // Update this to match your repository name
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()]
  }
});
