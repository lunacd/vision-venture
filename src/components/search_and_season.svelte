<script lang="ts">
	import SearchBar from './search_bar.svelte';
	import SeasonControl from './season_control.svelte';

	export let currentSearch: string;
</script>

<div class="mx-1/10 mb-16" id="search">
	<div class="flex flex-row">
		<SearchBar {currentSearch} />
		<SeasonControl numberOfSeasons={1} />
	</div>
</div>
