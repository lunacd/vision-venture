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
			@apply text-dark-cardinal border-[1.5px] border-solid border-dark-cardinal;
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
				@apply border-[1.5px] border-solid border-dark-cardinal;
				height: 32px;
				width: 32px;
				border-radius: 50% 15% 50% 50%;
				transform: rotate(45deg) translate(-11px, 11px);
			}
		}

		&.active {
			& .episode {
				@apply bg-dark-cardinal text-white;
			}

			& .episode-arrow-outer {
				& .episode-arrow {
					@apply bg-dark-cardinal;
				}
			}
		}

		&:hover {
			& .episode {
				@apply text-white bg-dark-cardinal;
			}

			& .episode-arrow-outer {
				& .episode-arrow {
					@apply bg-dark-cardinal;
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
		@apply bg-dark-cardinal text-white;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 9999px;
		width: 48px;
		height: 48px;
		font-size: 2rem;
	}

	.line {
		@apply border-l-3 border-solid border-l-black;
		width: 0;
		flex-grow: 1;
	}
</style>
