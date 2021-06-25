/** @type {import('@sveltejs/kit').Config} */

import adapter from '@sveltejs/adapter-static'

const config = {
	kit: {
		target: '#svelte',
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		})
	}
};

export default config;
