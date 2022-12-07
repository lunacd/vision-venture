<script lang="ts">
	import SearchBar from './search_bar.svelte';
	import SeasonControl from './season_control.svelte';

	export let currentSearch: string;
</script>

<div class="mx-1/10 mb-16 flex flex-row" id="search">
	<SearchBar {currentSearch} />
	<SeasonControl numberOfSeasons={1} />
</div>
