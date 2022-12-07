<script lang="ts">
	import SearchIcon from '../images/search.svg';

	export let currentSearch: string;
</script>

<div
	class="mb-12 mr-8 flex h-8 flex-grow flex-row items-center gap-2 rounded border-2 border-accent-green px-2 shadow-md"
>
	<img src={SearchIcon} alt="Search Icon" class="h-5" />
	<form method="get" action="/search#search" class="flex-grow">
		<input
			placeholder="Keyword Search"
			value={currentSearch}
			class="h-6 w-full focus:outline-none"
			name="keyword"
		/>
	</form>
</div>
