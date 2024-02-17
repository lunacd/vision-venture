<!-- 
	Scrolling gallery to display videos in the vision venture roadmap.

	Created by Haowen Liu in 2022.
 -->
<script lang="ts">
	import type { Episode } from '../utils/episode';

	export let episodes: Episode[], play: (link: string) => void;
</script>

<div class="relative grid grid-cols-1 pb-4 md:grid-cols-2">
	{#each episodes as episode}
		<div class="image">
			<button
				on:click={() => {
					play(episode.youtubeID);
				}}
			>
				<img src={episode.thumbnail} alt={episode.title} />
			</button>
		</div>
	{/each}
</div>

<style lang="postcss">
	.image {
		@apply w-full cursor-pointer px-4 py-3 md:px-8 md:pb-8 md:pt-4;
		& img {
			@apply rounded-2xl;
			box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
		}
	}
</style>
