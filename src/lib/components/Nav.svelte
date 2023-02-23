<script lang="ts">
  import { page } from "$app/stores"
  import { routes } from "../helpers/routes"

</script>

<div class="btm-nav absolute">
	{#each [...routes] as [path, name] (name)}
		<a href={path} class:active={path === $page.url.pathname} class="text-primary">{name}</a>
	{/each}
</div>
