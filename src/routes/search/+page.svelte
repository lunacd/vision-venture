<!--
	Vision roadmap search page.

	Created by Haowen Liu in 2022.
 -->
<script lang="ts">
	import Container from '../../components/container.svelte';
	import EpisodeGallery from '../../components/episodes_gallery.svelte';
	import MediaQuery from '../../components/media-query.svelte';
	import SearchBar from '../../components/search_bar.svelte';
	import TitleSection from '../../components/title_section.svelte';
	import YoutubePlayer from '../../components/youtube_player.svelte';
	import type { Episode } from '../../utils/episode';
	import { getEmbedLink, getPlayLink } from '../../utils/youtube';
	import type { PageData } from './$types';

	export let data: PageData;

	let episodes: Episode[];
	let link: string | undefined = undefined;

	$: episodes = Object.values<{ item: Episode }>(data.result).map((item) => item.item);
</script>

<svelte:head>
	<title>Vision Roadmap Search | Viterbi Vision Venture</title>
</svelte:head>

<MediaQuery query="(min-width: 768px)" let:matches={largeDevice}>
	<TitleSection
		name="roadmap"
		title="Vision Roadmap"
		tagline={data.blurb.title}
		description={data.blurb.content}
	/>
	<Container paddingClass="px-4 md:px-8">
		<div class="mx-4 mb-12 md:mx-1/10 md:mb-16" id="search">
			<div class="flex flex-row gap-2 md:gap-4">
				<SearchBar currentSearch={data.keyword} />
			</div>
		</div>
		<div class="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl">
			Results for &#147{data.keyword}&#148
		</div>
		<div class="mb-8">
			<a href="/roadmap">
				<span class="font-bold">&lsaquo;</span>
				<span class="underline">Back to Roadmap</span>
			</a>
		</div>
		<div class="px-8">
			<EpisodeGallery
				{episodes}
				play={(newLink) => {
					if (largeDevice) {
						link = getEmbedLink(newLink);
					} else {
						link = undefined;
						window.open(getPlayLink(newLink));
					}
				}}
			/>
			{#if data.result.length === 0}
				<div class="mb-24 text-center">No videos found! Try another search term.</div>
			{/if}
		</div>
	</Container>
	<YoutubePlayer
		{link}
		close={() => {
			link = undefined;
		}}
	/>
</MediaQuery>
