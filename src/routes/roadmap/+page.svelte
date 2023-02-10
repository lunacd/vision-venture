<!-- 
	Vision roadmap page.

	Created by Haowen Liu in 2022.
 -->
<script lang="ts">
	import Container from '../../components/container.svelte';
	import MediaQuery from '../../components/media-query.svelte';
	import RoadmapSection from '../../components/roadmap_section.svelte';
	import SearchAndSeason from '../../components/search_and_season.svelte';
	import TitleSection from '../../components/title_section.svelte';
	import YoutubePlayer from '../../components/youtube_player.svelte';
	import { getEmbedLink, getPlayLink } from '../../utils/youtube';
	import type { PageData } from './$types';

	export let data: PageData;

	let link: string = undefined;

	function setLink(newLink: string, largeDevice: boolean) {
		if (largeDevice) {
			link = getEmbedLink(newLink);
		} else {
			link = undefined;
			window.open(getPlayLink(newLink));
		}
	}
</script>

<svelte:head>
	<title>Vision Roadmap | Viterbi Vision Venture</title>
</svelte:head>

<MediaQuery query="(min-width: 768px)" let:matches={largeDevice}>
	<TitleSection
		name="roadmap"
		title="Vision Roadmap"
		tagline={data.blurb.title}
		description={data.blurb.content}
	/>
	<Container paddingClass="px-4 md:px-8">
		<SearchAndSeason currentSearch="" numberOfSeasons={data.numSeasons} />
		{#each data.sections as section, index}
			<RoadmapSection
				image={section.icon}
				title={section.title}
				subtitle={section.subtitle}
				episodes={data.episodes.slice(section.startEpisode - 1, section.endEpisode)}
				play={(link) => {
					setLink(link, largeDevice);
				}}
				{index}
				last={index === data.sections.length - 1}
			/>
		{/each}
	</Container>
	<YoutubePlayer
		{link}
		close={() => {
			link = undefined;
		}}
	/>
</MediaQuery>
