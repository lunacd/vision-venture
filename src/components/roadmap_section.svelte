<!-- 
	A horizontal section of the vision venture roadmap.

	Created by Haowen Liu in 2022.
 -->
<script lang="ts">
	import type { Episode } from '../utils/episode';
	import EpisodesGallery from './episodes_gallery.svelte';

	export let image: string,
		description: string,
		title: string,
		subtitle: string,
		episodes: Episode[],
		play: (link: string) => void,
		index: number,
		last = false;
</script>

<div class="roadmap-section" class:first={index === 0} class:reversed={index % 2 !== 0} class:last>
	<div class="image-and-line">
		<img src={image} alt={description} class="image" />
		<div class="vertical-line" />
	</div>
	<div class="content">
		<div class="titles">
			<div class="title">{title}</div>
			<div class="subtitle">{subtitle}</div>
		</div>
		<div class="videos">
			<EpisodesGallery {episodes} {play} />
		</div>
	</div>
</div>

<style lang="postcss">
	.roadmap-section {
		display: flex;
		flex-direction: row;
	}

	.image-and-line {
		width: 96px;
		position: relative;
		flex-shrink: 0;
	}

	.image {
		@apply z-content;
		position: absolute;
		width: 100%;
		top: 50%;
		transform: translateY(-50%);
	}

	.vertical-line {
		@apply z-background border-0 border-l-3 border-b-3 border-solid border-dark-gray;
		position: relative;
		left: 50%;
		width: 50%;
		height: 100%;
	}

	.content {
		flex-grow: 1;
		min-width: 0;
	}

	.titles {
		padding: 0 24px 0 24px;
	}

	.title {
		@apply font-sans;
		font-size: 2rem;
		margin-top: 12px;
	}

	.subtitle {
		@apply font-serif;
		font-size: 1.25rem;
	}

	.videos {
		@apply border-0 border-b-3 border-solid border-b-dark-gray;
		margin-right: 48px;
	}

	/* First section */
	.roadmap-section.first {
		& .image {
			top: 0;
			transform: none;
		}
	}

	/* Odd sections are reversed */
	.roadmap-section.reversed {
		flex-direction: row-reverse;

		& .titles {
			text-align: right;
		}

		& .vertical-line {
			@apply border-l-0 border-r-3 border-solid border-r-dark-gray;
			left: 0;
		}

		& .videos {
			margin-right: 0;
			margin-left: 48px;
		}
	}

	.roadmap-section.last {
		margin-bottom: 48px;

		& .image {
			bottom: 0;
			top: auto;
			transform: none;
		}

		& .vertical-line {
			border-bottom: none;
		}

		& .videos {
			border-bottom: none;
		}
	}
</style>
