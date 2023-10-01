import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    compressHTML: true,
    output: 'static',
    site: 'https://glmorandi.github.io/grupheim/',
    base: '/grupheim',
});
