<!--
	Vision roadmap search page.

	Created by Haowen Liu in 2022.
 -->
<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div>
	{#each Object.values(data) as item}
		<p>
			{item.item.description}
		</p>
	{/each}
</div>
