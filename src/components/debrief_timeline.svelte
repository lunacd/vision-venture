<!-- 
    The student takeway timeline.

    Created by Haowen Liu in 2022.
 -->
<script lang="ts">
	import type { Debrief } from '../utils/debrief';

	export let debriefs: Debrief[][], onSelect: (seasonIndex: number, episodeIndex: number) => void;

	let activeSIndex = 0;
	let activeEIndex = 0;

	function selectItem(sIndex: number, eIndex: number) {
		activeSIndex = sIndex;
		activeEIndex = eIndex;
		onSelect(sIndex, eIndex);
	}
</script>

<div class="flex flex-col items-end">
	{#each debriefs as season, sIndex}
		<div class="flex justify-center font-sans">
			<div class="episodes-container">
				{#each season as debrief, eIndex}
					<div
						class="episode-container"
						class:active={sIndex === activeSIndex && eIndex == activeEIndex}
						on:click={() => {
							selectItem(sIndex, eIndex);
						}}
						on:keypress={() => {
							selectItem(sIndex, eIndex);
						}}
					>
						<span class="episode">{debrief.title}</span>
						<div class="episode-arrow-outer">
							<div class="episode-arrow" />
						</div>
					</div>
				{/each}
			</div>
			<div class="line-container">
				<div class="circle">
					<div>{debriefs.length - sIndex}</div>
				</div>
				<div class="line" />
			</div>
		</div>
	{/each}
</div>

<style lang="postcss">
	.episodes-container {
		@apply mt-8 flex flex-col items-end md:mt-12;
	}

	.episode-container {
		@apply my-4 -mr-4 table cursor-pointer md:ml-2 lg:mr-0;

		& .episode {
			@apply border-[1.5px] border-solid border-cardinal text-cardinal;
			@apply h-8 pl-3 align-middle text-sm md:text-base lg:text-lg;
			display: table-cell;
			border-radius: 10px 0 0 10px;
			border-right: none;
		}

		& .episode-arrow-outer {
			@apply h-8 w-8 overflow-hidden;

			& .episode-arrow {
				@apply h-8 w-8 border-[1.5px] border-solid border-cardinal;
				border-radius: 50% 15% 50% 50%;
				transform: rotate(45deg) translate(-11px, 11px);
			}
		}

		&.active {
			& .episode {
				@apply md:bg-cardinal md:text-white;
			}

			& .episode-arrow-outer {
				& .episode-arrow {
					@apply md:bg-cardinal;
				}
			}
		}

		&:hover {
			& .episode {
				@apply bg-cardinal text-white;
			}

			& .episode-arrow-outer {
				& .episode-arrow {
					@apply bg-cardinal;
				}
			}
		}
	}

	.line-container {
		@apply flex flex-col items-center;
	}

	.circle {
		@apply flex items-center justify-center bg-accent-orange text-white;
		@apply h-8 w-8 rounded-full text-xl md:h-12 md:w-12 md:text-3xl;
	}

	.line {
		@apply w-0 flex-grow border-l-3 border-solid border-l-black;
	}
</style>
