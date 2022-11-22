<!--
	Vision roadmap search page.

	Created by Haowen Liu in 2022.
 -->
<script lang="ts">
	import Container from '../../../components/container.svelte';
	import EpisodeGallery from '../../../components/episodes_gallery.svelte';
	import MediaQuery from '../../../components/media-query.svelte';
	import TitleSection from '../../../components/title_section.svelte';
	import YoutubePlayer from '../../../components/youtube_player.svelte';
	import { getEmbedLink, getPlayLink } from '../../../utils/youtube';
	import type { PageData } from './$types';

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
		<div class="mb-8 text-2xl font-bold sm:text-3xl md:text-4xl">
			Results for &#147{data.keyword}&#148
		</div>
		<div class="px-8">
			<EpisodeGallery
				episodes={Object.values(data.result).map((item) => item.item)}
				play={(newLink) => {
					console.log('Trigger play');
					if (largeDevice) {
						link = getEmbedLink(newLink);
					} else {
						link = undefined;
						window.open(getPlayLink(newLink));
					}
				}}
			/>
		</div>
	</Container>
	<YoutubePlayer
		{link}
		close={() => {
			link = undefined;
		}}
	/>
</MediaQuery>
