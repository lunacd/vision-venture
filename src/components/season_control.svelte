<!-- 
	A season selector for Vision Venture.

	Created by Haowen Liu in 2022.
 -->
<script lang="ts">
	import AngleIcon from '../images/angle.svg';

	export let numberOfSeasons: number;

	let currentSeason = numberOfSeasons - 1;
</script>

<div class="season-container">
	<div class="dropdown">
		<div>SEASON {currentSeason + 1}</div>
		<img src={AngleIcon} alt="Dropdown icon" class="w-3 md:w-4" />
		<div class="dropdown-content">
			{#each Array(numberOfSeasons) as _, i}
				<a href={`/roadmap?season=${i + 1}`}>SEASON {i + 1}</a>
			{/each}
		</div>
	</div>
</div>

<style lang="postcss">
	.dropdown {
		@apply relative flex h-7 md:h-8 flex-row gap-2 rounded bg-accent-green py-1 px-2 text-white shadow-md text-sm md:text-base;
	}

	.dropdown-content {
		@apply absolute top-full hidden;
	}

	.dropdown:hover .dropdown-content {
		@apply block;
	}
</style>
