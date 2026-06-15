import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.APW_PUBLIC_SITE_URL || 'https://apginc.ca',
  output: 'static'
});
