<!--
	Vision roadmap search page.

	Created by Haowen Liu in 2022.
 -->
<script lang="ts">
	import Container from '../../components/container.svelte';
	import EpisodeGallery from '../../components/episodes_gallery.svelte';
	import MediaQuery from '../../components/media-query.svelte';
	import SearchAndSeason from '../../components/search_and_season.svelte';
	import TitleSection from '../../components/title_section.svelte';
	import YoutubePlayer from '../../components/youtube_player.svelte';
	import { getEmbedLink, getPlayLink } from '../../utils/youtube';
	import type { PageData } from './[slug]/$types';

	export let data: PageData;

	let link: string | undefined = undefined;
</script>

<svelte:head>
	<title>Vision Roadmap Search | Viterbi Vision Venture</title>
</svelte:head>

<MediaQuery query="(min-width: 768px)" let:matches={largeDevice}>
	<TitleSection
		name="roadmap"
		title="Vision Roadmap"
		tagline="Start your journey."
		description={[
			'Let recent alumni answer your questions about life after graduation and help you envision potential paths for your future.'
		]}
	/>
	<Container paddingClass="px-4 md:px-8">
		<SearchAndSeason currentSearch={data.keyword} />
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
				episodes={Object.values(data.result).map((item) => item.item)}
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
