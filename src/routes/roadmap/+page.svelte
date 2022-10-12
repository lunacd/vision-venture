<!-- 
	Vision roadmap page.

	Created by Haowen Liu in 2022.
 -->
<script lang="ts">
	import Container from '../../components/container.svelte';
	import MediaQuery from '../../components/media-query.svelte';
	import RoadmapSection from '../../components/roadmap_section.svelte';
	import TitleSection from '../../components/title_section.svelte';
	import YoutubePlayer from '../../components/youtube_player.svelte';
	import { Episode } from '../../utils/episode';
	import { getEmbedLink, getPlayLink } from '../../utils/youtube';

	import BeyondCubicle from '../../images/beyond-cubicle.svg';
	import BiggerPicture from '../../images/bigger-picture.svg';
	import GraduatingImage from '../../images/graduating.svg';
	// Episode thumbnails
	// Season 1
	import S1E1 from '../../images/thumbnails/s01e01.png?webp';
	import S1E2 from '../../images/thumbnails/s01e02.png?webp';
	import S1E3 from '../../images/thumbnails/s01e03.png?webp';
	import S1E4 from '../../images/thumbnails/s01e04.png?webp';
	import S1E5 from '../../images/thumbnails/s01e05.png?webp';
	import S1E6 from '../../images/thumbnails/s01e06.png?webp';
	import S1E7 from '../../images/thumbnails/s01e07.png?webp';
	import S1E8 from '../../images/thumbnails/s01e08.png?webp';
	import S1E9 from '../../images/thumbnails/s01e09.png?webp';
	import S1E10 from '../../images/thumbnails/s01e10.png?webp';
	import S1E11 from '../../images/thumbnails/s01e11.png?webp';
	import S1E12 from '../../images/thumbnails/s01e12.png?webp';
	import WelcomeToWork from '../../images/welcome-to-work.svg';

	let seasons = [
		// Season 1
		[
			// Section 1
			[
				new Episode('Trying out different things', S1E1, 'wrAO3b1J2PA'),
				new Episode('What to look for in a job', S1E2, 'UuNRNyq6tHg')
			],
			// Section 2
			[
				new Episode('Not knowing everything on day 1', S1E3, 'sRg3PYLIQt8'),
				new Episode('Applying skill from education to real life', S1E4, 'upcVW_qGBSQ'),
				new Episode('Classroom setting vs. workspace', S1E5, '7bty-sSdN3I'),
				new Episode('Tackling problems at work', S1E6, 'jODLxTrr4ko')
			],
			// Section 3
			[
				new Episode('Diverse company values', S1E7, 'YEy70wI5ec4'),
				new Episode('Women in engineering', S1E8, 'IwbwcEITuLs'),
				new Episode('Finding mentors', S1E9, '_x1z8Hrt3ZM'),
				new Episode('Work-life balance', S1E10, 'pt-8cqt3_4w')
			],
			// Section 4
			[
				new Episode('Having multiple interests and passions', S1E11, 'OK5iE-Ss2eo'),
				new Episode('You decision is not forever', S1E12, '7TY5vwa67JQ')
			]
		]
	];
	let currentSeason = seasons[seasons.length - 1];
	let link: string = undefined;

	function setLink(newLink: string, largeDevice) {
		if (largeDevice) {
			link = undefined;
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
		<RoadmapSection
			image={GraduatingImage}
			title="You're graduating! ...Now what?"
			description="Graduating"
			subtitle="Leaving the educational nest."
			episodes={currentSeason[0]}
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
			episodes={currentSeason[1]}
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
			episodes={currentSeason[2]}
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
			episodes={currentSeason[3]}
			play={(link) => {
				setLink(link, largeDevice);
			}}
			index={3}
			last={true}
		/>
	</Container>
	<YoutubePlayer {link} />
</MediaQuery>
