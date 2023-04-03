<!-- 
	A season selector for Vision Venture.

	Created by Haowen Liu in 2022.
 -->
<script lang="ts">
	import AngleIcon from '../images/angle.svg';

	export let numberOfSeasons: number, currentSeason: number, selectAction: (season: number) => void;

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
					<button
						class="h-7 text-left text-accent-green"
						on:click={() => {
							open = !open;
							selectAction(i);
						}}>SEASON {i + 1}</button
					>
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
		@apply relative flex h-7 flex-row gap-2 rounded bg-accent-green px-2 py-1 text-sm text-white shadow-md md:h-8 md:text-base;
	}

	.dropdown-icon {
		@apply ml-auto w-3 transition-transform md:w-4;
	}

	.dropdown-content {
		@apply absolute left-0 right-0 top-full flex w-full origin-top scale-y-0 flex-col rounded bg-white shadow-md transition-transform;

		& button {
			@apply relative w-full px-2;
		}

		& button:hover {
			@apply border-b-2 border-accent-green bg-accent-green text-white;
		}

		& button:last-child {
			@apply rounded-b border-b-0;
		}

		& .border {
			@apply absolute -top-2 bottom-0 left-0 right-0 rounded border-2 border-accent-green;
		}
	}
</style>
