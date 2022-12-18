<script lang="ts">
	import SearchIcon from '../images/search.svg';

	export let currentSearch: string;
</script>

<div
	class="flex h-7 flex-shrink flex-grow flex-row items-center gap-2 rounded border-2 border-accent-green px-2 shadow-md md:h-8"
>
	<img src={SearchIcon} alt="Search Icon" class="h-4 md:h-5" />
	<form method="get" action="/search#search" class="flex-grow text-sm md:text-base">
		<input
			placeholder="Keyword Search"
			value={currentSearch}
			class="h-6 w-full focus:outline-none"
			name="keyword"
		/>
	</form>
</div>
