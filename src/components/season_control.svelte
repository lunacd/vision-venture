<!-- 
	A season selector for Vision Venture.

	Created by Haowen Liu in 2022.
 -->
<script lang="ts">
	import AngleIcon from '../images/angle.svg';

	export let numberOfSeasons: number, currentSeason: number;

	let open = false;
</script>

<div class="season-control" class:open>
	<div
		class="dropdown"
		on:click={() => {
			open = !open;
		}}
		on:keypress={() => {
			open = !open;
		}}
	>
		<div>SEASON {currentSeason + 1}</div>
		<img src={AngleIcon} alt="Dropdown icon" class="dropdown-icon" />
	</div>
	{#if numberOfSeasons > 1}
		<div class="dropdown-content">
			<div class="border" />
			{#each Array(numberOfSeasons) as _, i}
				{#if i !== currentSeason}
					<a href={`/roadmap?season=${i + 1}`} class="h-7 text-accent-green">SEASON {i + 1}</a>
				{/if}
			{/each}
		</div>
	{/if}
</div>

<style lang="postcss">
	.season-control {
		@apply relative cursor-pointer;
		width: 6.5rem;

		&.open {
			& .dropdown {
				@apply rounded-b-none;

				& .dropdown-icon {
					transform: rotateX(180deg);
				}
			}

			& .dropdown-content {
				@apply scale-y-100;
			}
		}
	}

	.dropdown {
		@apply relative flex h-7 flex-row gap-2 rounded bg-accent-green py-1 px-2 text-sm text-white shadow-md md:h-8 md:text-base;
	}

	.dropdown-icon {
		@apply w-3 transition-transform ml-auto md:w-4;
	}

	.dropdown-content {
		@apply absolute top-full left-0 right-0 flex w-full origin-top scale-y-0 flex-col rounded bg-white shadow-md transition-transform;

		& a {
			@apply relative w-full px-2;
		}

		& a:hover {
			@apply bg-accent-green text-white border-accent-green border-b-2;
		}

		& a:last-child {
			@apply border-b-0 rounded-b;
		}

		& .border {
			@apply absolute -top-2 left-0 right-0 bottom-0 rounded border-2 border-accent-green;
		}
	}
</style>
