import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';

export default defineConfig({
	server: {
		port: 2171,
	},
	plugins: [
		enhancedImages(),
		sveltekit()
	],
});
