import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { imagetools } from 'vite-imagetools';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		scss: {
			prependData: `@import './src/styles/preamble.scss';`
		}
	}),

	kit: {
		adapter: adapter(),
		prerender: {
			default: true
		}
	},

	vite: {
		plugins: [imagetools({})]
	}
};

export default config;
