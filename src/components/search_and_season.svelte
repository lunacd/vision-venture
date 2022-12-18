<script lang="ts">
	import SearchBar from './search_bar.svelte';
	import SeasonControl from './season_control.svelte';

	export let currentSearch: string;
</script>

<div class="mx-4 mb-12 md:mx-1/10 md:mb-16" id="search">
	<div class="flex flex-row gap-2 md:gap-4">
		<SearchBar {currentSearch} />
		<SeasonControl numberOfSeasons={1} />
	</div>
</div>
