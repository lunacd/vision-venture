<!-- 
	Student voices page.

	Created by Haowen Liu in 2022.
 -->
<script lang="ts">
	import Container from '../../components/container.svelte';
	import TakeawayTimeline from '../../components/debrief_timeline.svelte';
	import MediaQuery from '../../components/media-query.svelte';
	import StudentsGallery from '../../components/students_gallery.svelte';
	import TitleSection from '../../components/title_section.svelte';
	import { getEmbedLink, getPlayLink } from '../../utils/youtube';
	import type { PageData } from './$types';

	export let data: PageData;

	let youtubeID: string = data.debriefs[0][0].youtubeID;
</script>

<svelte:head>
	<title>Student Voices | Viterbi Vision Venture</title>
</svelte:head>

<MediaQuery query="(min-width: 768px)" let:matches={largeDevice}>
	<TitleSection
		name="voices"
		title="Student Voices"
		tagline={data.blurb.title}
		description={data.blurb.content}
	/>

	<Container>
		<StudentsGallery participants={data.participants} />
		<div class="text-xl text-cardinal md:text-3xl">Student Debriefs</div>
		<div class="text-sm text-dark-gray md:text-xl">Click on the pins to watch!</div>
		{#if data.debriefs.length > 0}
			<div class="mb-12 mt-4 flex flex-col items-center justify-around md:flex-row">
				<TakeawayTimeline
					debriefs={data.debriefs}
					onSelect={(newSIndex, newEIndex) => {
						youtubeID = data.debriefs[newSIndex][newEIndex].youtubeID;
						if (!largeDevice) {
							window.open(getPlayLink(youtubeID));
						}
					}}
				/>
				<iframe
					class="hidden w-[400px] md:block lg:w-[560px]"
					height="315"
					src={getEmbedLink(youtubeID)}
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
					style="border: 0"
				/>
			</div>
		{/if}
	</Container>
</MediaQuery>
