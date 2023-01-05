<!-- 
	A horizontal section of the vision venture roadmap.

	Created by Haowen Liu in 2022.
 -->
<script lang="ts">
	import type { Episode } from '../utils/episode';
	import EpisodesGallery from './episodes_gallery.svelte';

	export let image: string,
		title: string,
		subtitle: string,
		episodes: Episode[],
		play: (link: string) => void,
		index: number,
		last = false;
</script>

<div class="roadmap-section" class:first={index === 0} class:reversed={index % 2 !== 0} class:last>
	<div class="image-and-line">
		<img src={image} alt={title} class="image" />
		<div class="vertical-line" />
	</div>
	<div class="content">
		<div class="titles">
			<div class="title">{title}</div>
			<div class="subtitle">{subtitle}</div>
		</div>
		<div class="videos">
			<div class="border" />
			<EpisodesGallery {episodes} {play} />
		</div>
	</div>
</div>

<style lang="postcss">
	.roadmap-section {
		@apply flex flex-row;
	}

	.image-and-line {
		@apply relative w-12 flex-shrink-0 md:w-24;
	}

	.image {
		@apply absolute top-1/2 z-content w-full -translate-y-1/2;
	}

	.vertical-line {
		@apply z-background border-0 border-l-3 border-b-3 border-solid border-dark-gray;
		@apply relative left-1/2 h-full w-1/2;
	}

	.content {
		@apply min-w-0 flex-grow;
	}

	.titles {
		@apply px-2 md:px-6;
	}

	.title {
		@apply text-xl md:mt-3 md:text-4xl;
	}

	.subtitle {
		@apply mt-1 font-serif text-sm md:text-xl;
	}

	.videos {
		@apply relative md:mr-12;

		& .border {
			@apply absolute top-0 left-0 right-6 md:right-0;
			@apply h-full border-0 border-b-3 border-solid border-b-dark-gray;
		}
	}

	/* First section */
	.roadmap-section.first {
		& .image {
			@apply top-0 transform-none;
		}
	}

	/* Odd sections are reversed */
	.roadmap-section.reversed {
		@apply flex-row-reverse;

		& .titles {
			@apply text-right;
		}

		& .vertical-line {
			@apply left-0 border-l-0 border-r-3 border-solid border-r-dark-gray;
		}

		& .videos {
			@apply md:mr-0 md:ml-12;

			& .border {
				@apply left-6 right-0 md:left-0;
			}
		}
	}

	.roadmap-section.last {
		@apply mb-12;

		& .image {
			@apply bottom-0 top-auto transform-none;
		}

		& .vertical-line {
			@apply border-b-0;
		}

		& .videos .border {
			@apply border-b-0;
		}
	}
</style>
