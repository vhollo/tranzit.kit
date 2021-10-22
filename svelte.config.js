import { mdsvex } from "mdsvex";
import { mdsvexConfig } from "./mdsvex.config.js";
import adapt from '@sveltejs/adapter-static';
//import adapt from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte", ...mdsvexConfig.extensions],
	preprocess: [
		mdsvex(mdsvexConfig),
	],
	kit: {
		adapter: adapt(),
		target: 'body'/*, /// lehet, h kellene
		prerender: {
			force: true
		}*/
	}
};

export default config;
