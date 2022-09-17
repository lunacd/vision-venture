<!-- 
	Scrolling gallery to display videos in the vision venture roadmap.

	Created by Haowen Liu in 2022.
 -->
<script lang="ts">
	import type { Episode } from '../utils/episode';

	export let episodes: Episode[], play: (link: string) => void;
</script>

<div class="grid grid-cols-1 md:grid-cols-2">
	{#each episodes as episode}
		<div class="image">
			<img
				src={episode.image}
				alt={episode.description}
				on:click={() => {
					play(episode.youtubeLink);
				}}
			/>
		</div>
	{/each}
</div>

<style lang="postcss">
	.image {
		@apply w-full cursor-pointer px-8 pt-4 pb-8;
		& img {
			@apply rounded-2xl;
			box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
		}
	}
</style>
