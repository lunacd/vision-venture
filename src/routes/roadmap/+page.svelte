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

	import BeyondCubicle from '../../images/beyond-cubicle.svg';
	import BiggerPicture from '../../images/bigger-picture.svg';
	import GraduatingImage from '../../images/graduating.svg';
	import WelcomeToWork from '../../images/welcome-to-work.svg';

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
		tagline="Start your journey."
		description={[
			'Let recent alumni answer your questions about life after graduation and help you envision potential paths for your future.'
		]}
	/>
	<Container paddingClass="px-4 md:px-8">
		<SearchAndSeason currentSearch="" />
		<RoadmapSection
			image={GraduatingImage}
			title="You're graduating! ...Now what?"
			description="Graduating"
			subtitle="Leaving the educational nest."
			episodes={data.episodes[0]}
			play={(link) => {
				setLink(link, largeDevice);
			}}
			index={0}
		/>
		<RoadmapSection
			image={WelcomeToWork}
			title="Welcome to the working world!"
			description="Welcome to working world"
			subtitle="-and adulthood."
			episodes={data.episodes[1]}
			play={(link) => {
				setLink(link, largeDevice);
			}}
			index={1}
		/>
		<RoadmapSection
			image={BeyondCubicle}
			title="Working beyond the cubicle"
			description="Beyond the cubicle"
			subtitle="There is more to work than just tasks and deadlines."
			episodes={data.episodes[2]}
			play={(link) => {
				setLink(link, largeDevice);
			}}
			index={2}
		/>
		<RoadmapSection
			image={BiggerPicture}
			title="The bigger picture"
			description="The bigger picture"
			subtitle="Remembering that you have a life outside of work."
			episodes={data.episodes[3]}
			play={(link) => {
				setLink(link, largeDevice);
			}}
			index={3}
			last={true}
		/>
	</Container>
	<YoutubePlayer
		{link}
		close={() => {
			link = undefined;
		}}
	/>
</MediaQuery>
