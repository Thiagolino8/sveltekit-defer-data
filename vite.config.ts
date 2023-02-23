import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import unocss from 'unocss/vite'
import { presetUno, transformerDirectives } from 'unocss'
import presetDaisy from 'unocss-preset-daisy'

export default defineConfig({
	plugins: [
		unocss({
			mode: 'svelte-scoped',
			transformers: [transformerDirectives()],
			presets: [presetUno(), presetDaisy()],
		}),
		sveltekit(),
	],
})
