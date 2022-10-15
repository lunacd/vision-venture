<!-- 
    The student takeway timeline.

    Created by Haowen Liu in 2022.
 -->
<script lang="ts">
	import type { Takeaway } from '../utils/takeaway';

	export let takeaways: Takeaway[], activeIndex: number, onSelect: (newIndex: number) => void;
</script>

<div class="flex justify-center font-sans">
	<div class="episodes-container">
		{#each takeaways as takeaway, index}
			<div
				class="episode-container"
				class:active={index === activeIndex}
				on:click={() => {
					onSelect(index);
				}}
				on:keypress={() => {
					onSelect(index);
				}}
			>
				<span class="episode">{takeaway.title}</span>
				<div class="episode-arrow-outer">
					<div class="episode-arrow" />
				</div>
			</div>
		{/each}
	</div>
	<div class="line-container">
		<div class="circle">
			<div>1</div>
		</div>
		<div class="line" />
	</div>
</div>

<style lang="postcss">
	.episodes-container {
		@apply mt-8 flex flex-col items-end md:mt-12;
	}

	.episode-container {
		@apply my-4 -mr-4 table cursor-pointer md:ml-2 lg:mr-0;

		& .episode {
			@apply border-[1.5px] border-solid border-cardinal text-cardinal;
			@apply h-8 pl-2 align-middle text-sm md:text-base lg:text-lg;
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
				@apply bg-cardinal text-white;
			}

			& .episode-arrow-outer {
				& .episode-arrow {
					@apply bg-cardinal;
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
