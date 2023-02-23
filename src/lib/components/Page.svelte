<script lang="ts">
	import { browser } from '$app/environment'
	interface PageData {
		awaited: number
		streamed: {
			date: Promise<number>
		}
	}

	export let data: PageData

	let initialTime = new Date().getTime()
</script>

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
