<script lang="ts">
  import { page } from "$app/stores"

	const routes = [
		{ name: 'Edge', path: '/' },
		{ name: 'Node', path: '/node' },
	]
</script>

<div class="btm-nav absolute">
	{#each routes as { name, path } (name)}
		<a href={path} class:active={path === $page.url.pathname} class="text-primary">{name}</a>
	{/each}
</div>
