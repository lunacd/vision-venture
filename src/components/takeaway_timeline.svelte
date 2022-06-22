<!-- 
    The student takeway timeline.

    Created by Haowen Liu in 2022.
 -->
<script lang="ts">
	import type { Takeaway } from '../utils/takeaway';

	export let takeaways: Takeaway[], activeIndex: number, onSelect: (newIndex: number) => void;
</script>

<div class="takeaway-container">
	<div class="episodes-container">
		{#each takeaways as takeaway, index}
			<div
				class="episode-container"
				class:active={index === activeIndex}
				on:click={() => {
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
		<div class="circle"><div>1</div></div>
		<div class="line" />
	</div>
</div>

<style lang="postcss">
	.takeaway-container {
		@apply font-sans;
		display: flex;
	}

	.episodes-container {
		margin-top: 48px;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}

	.episode-container {
		display: table;
		margin: 16px 0 16px 8px;
		cursor: pointer;

		& .episode {
			@apply text-cardinal border-[1.5px] border-solid border-cardinal;
			display: table-cell;
			padding-left: 8px;
			border-radius: 10px 0 0 10px;
			border-right: none;
			height: 32px;
			vertical-align: middle;
			font-size: 20px;
		}

		& .episode-arrow-outer {
			height: 32px;
			width: 32px;
			overflow: hidden;

			& .episode-arrow {
				@apply border-[1.5px] border-solid border-cardinal;
				height: 32px;
				width: 32px;
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
				@apply text-white bg-cardinal;
			}

			& .episode-arrow-outer {
				& .episode-arrow {
					@apply bg-cardinal;
				}
			}
		}
	}

	.line-container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.circle {
		@apply bg-accent-orange text-white flex justify-center items-center;
		@apply rounded-full w-[48px] h-[48px] text-3xl;
	}

	.line {
		@apply border-l-3 border-solid border-l-black;
		width: 0;
		flex-grow: 1;
	}
</style>
