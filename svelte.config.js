import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://svelte.dev/docs/kit/integrations
    // for more information about preprocessors
    preprocess: vitePreprocess(),

    kit: {
        /* TODO: Configure image optimization (https://vercel.com/docs/build-output-api/configuration#images) */
        adapter: adapter(),
        paths: {
            base: '',
        }
    }
};

export default config;
