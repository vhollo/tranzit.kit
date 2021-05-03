const { mdsvex } = require("mdsvex");
const mdsvexConfig = require("./mdsvex.config.cjs");
//const adapt = require('@sveltejs/adapter-node');
//const adapt = require('@sveltejs/adapter-static');
const adapt = require('@sveltejs/adapter-netlify');
const pkg = require('./package.json');
const dependencies = Object.keys(pkg.dependencies || {})

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	preprocess: [
		mdsvex(mdsvexConfig),
	],
	extensions: [".svelte", ...mdsvexConfig.extensions],
	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		adapter: adapt(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: 'body',
		/*prerender: {
			crawl: true,
			enabled: true,
			force: true,
			pages: ['*'],
		},*/
		files: {
			serviceWorker: '' /* src/service-worker */
			/*assets: 'static',
			hooks: 'src/hooks',
			lib: 'src/lib',
			routes: 'src/routes',
			template: 'src/app.html'*/
		},
		vite: {
			ssr: {
				noExternal: [ dependencies ]
			}
		}
	}
};
