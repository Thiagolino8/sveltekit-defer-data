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
	Awaited date: {#if browser}{initialTime - data.awaited}{:else}...loading{/if} miliseconds
</p>
{#await data.streamed.date}
	<p>Streamed date: ...loading miliseconds</p>
{:then streamed}
	<p>Streamed date: {initialTime - streamed} miliseconds</p>
{:catch error}
	<p>Error: {error.message}</p>
{/await}

<style>
	p {
		@apply text-2xl font-bold font-mono;
	}
</style>
