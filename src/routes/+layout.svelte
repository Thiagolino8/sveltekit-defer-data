<script lang="ts">
	import { page } from '$app/stores'
	import '@kidonng/daisyui/index.css'
	import '@unocss/reset/tailwind.css'
	import { fade } from 'svelte/transition'
	import Nav from '../lib/components/Nav.svelte'
</script>

<div class="grid">
	<main class="hero h-full bg-base-200">
		{#key $page.url.pathname}
			<section class="hero-content text-center flex-col" transition:fade>
				<slot />
			</section>
		{/key}
	</main>
	<Nav />
</div>

<style uno:preflights uno:safelist>
	div {
		@apply grid relative h-screen;
		grid-template-rows: 1fr auto;
	}
</style>
