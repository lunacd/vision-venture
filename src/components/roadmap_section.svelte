<script lang="ts">
	import ScrollingGallery from '../components/scrolling_gallery.svelte';

	import type { Episode } from '../utils/episode';

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
			<ScrollingGallery {episodes} {play} />
		</div>
	</div>
</div>

<style lang="scss">
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
		position: absolute;
		width: 100%;
		z-index: $z-content;
		top: 50%;
		transform: translateY(-50%);
	}

	.vertical-line {
		position: relative;
		left: 50%;
		width: 50%;
		height: 100%;
		border-left: 3px solid $dark-gray;
		border-bottom: 3px solid $dark-gray;
		z-index: $z-background;
	}

	.content {
		flex-grow: 1;
		min-width: 0;
	}

	.titles {
		padding: 0 24px 0 24px;
	}

	.title {
		font-size: 2rem;
		font-family: $sans;
		margin-top: 12px;
	}

	.subtitle {
		font-size: 1.25rem;
		font-family: $serif;
		margin-top: 10px;
	}

	.videos {
		border-bottom: 3px solid $dark-gray;
		margin-right: 48px;
	}

	// First section
	.roadmap-section.first {
		margin-top: 48px;

		.image {
			top: 0;
			transform: none;
		}
	}

	// Odd sections are reversed
	.roadmap-section.reversed {
		flex-direction: row-reverse;

		.titles {
			text-align: right;
		}

		.vertical-line {
			left: 0;
			border-left: none;
			border-right: 3px solid $dark-gray;
		}

		.videos {
			margin-right: 0;
			margin-left: 48px;
		}
	}

	.roadmap-section.last {
		margin-bottom: 48px;

		.image {
			bottom: 0;
			top: auto;
			transform: none;
		}

		.vertical-line {
			border-bottom: none;
		}

		.videos {
			border-bottom: none;
		}
	}
</style>
