import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import vercelStatic from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  site: 'https://christph-memorandum.com',
  integrations: [mdx(), sitemap()],
  output: 'static',
  adapter: vercelStatic(
    {
      webAnalytics: { enabled: true }
    }
  ),
});