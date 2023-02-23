<script lang="ts">
	import { browser } from '$app/environment'
	import {page} from '$app/stores'
  import { routes } from '$lib/helpers/routes'

	interface PageData {
		awaited: number
		streamed: {
			date: Promise<number>
		}
	}

	export let data: PageData

	$: title = routes.get($page.url.pathname as keyof typeof routes.keys)

	let initialTime = new Date().getTime()
</script>

<h1 class="text-3xl font-bold">Running on {title}</h1>
<p>
	Awaited date: {#if browser}<span class="text-teal-400">{initialTime - data.awaited}</span>{:else}<span
			class="text-orange-500">...loading</span
		>{/if} miliseconds
</p>
{#await data.streamed.date}
	<p>Streamed date: <span class="text-orange-500">...loading</span> miliseconds</p>
{:then streamed}
	{@const initialTime = new Date().getTime()}
	<p>Streamed date: <span class="text-teal-400">{initialTime - streamed}</span> miliseconds</p>
{:catch error}
	<p>Error: {error.message}</p>
{/await}

<style>
	p {
		@apply text-2xl font-bold font-mono;
	}
</style>
