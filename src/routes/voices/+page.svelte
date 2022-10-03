<!-- 
	Student voices page.

	Created by Haowen Liu in 2022.
 -->
<script lang="ts">
	import Container from '../../components/container.svelte';
	import MediaQuery from '../../components/media-query.svelte';
	import StudentsGallery from '../../components/students_gallery.svelte';
	import TakeawayTimeline from '../../components/takeaway_timeline.svelte';
	import TitleSection from '../../components/title_section.svelte';
	import { Person } from '../../utils/person';
	import { Takeaway } from '../../utils/takeaway';
	import { getEmbedLink, getPlayLink } from '../../utils/youtube';

	import ChrisTronolone from '../../images/profiles/Chris_Tronolone.png?webp';
	import IsabelAnderson from '../../images/profiles/Isabel_Anderson.png?webp';
	import RoopalKondepudi from '../../images/profiles/Roopal_Kondepudi.png?webp';

	let participants = [
		new Person(
			'Chris Tronolone',
			ChrisTronolone,
			'Chris is a Mechanical Engineering major, graduating in 2023. He is part of the Sidney Harman Academy for Polymathic Study at USC. His main hobbies are bread-making and drumming.'
		),
		new Person(
			'Isabel Anderson',
			IsabelAnderson,
			'Isabel is an Industrial and Systems Engineering major and will be graduating in 2023. She is passionate about philanthropy, enjoys spending time with family and friends, and loves traveling to new places and trying new foods.'
		),
		new Person(
			'Roopal Kondepudi',
			RoopalKondepudi,
			"Roopal graduated in 2021 with a BS in Computer Engineering and Computer Science. She continued her studies through USC's Progressive Degree Program, and will graduate with an MS in Computer Science in 2022. She enjoys bouldering and embroidery."
		)
	];

	let takeaways = [
		new Takeaway('d7ZOLtFpqTE', 'There are no wrong moves'),
		new Takeaway('ni-BdN6L8ow', 'Find your values first'),
		new Takeaway('CPu68x4JJAE', 'Shit sandwich'),
		new Takeaway('aF48P7pswmo', "Employer's POV"),
		new Takeaway('JbMMFFj1-cM', 'Time management and work-life balance'),
		new Takeaway('FdTk-g3_hYU', 'Fluid mindset'),
		new Takeaway('v2uJH6_4BFo', 'Confirming beliefs')
	];

	let activeIndex = 0;
</script>

<svelte:head>
	<title>Student Voices | Viterbi Vision Venture</title>
</svelte:head>

<MediaQuery query="(min-width: 768px)" let:matches={largeDevice}>
	<TitleSection
		name="voices"
		title="Student Voices"
		tagline="Hear from our students."
		description={[
			"Student interviewers completed a set of readings and discussed them in workshops together before conducting their interviews with alumni. Hear what they learned throughout the process in the videos below. Each season will include new student interviewers, so contact us if you're interested in participating."
		]}
	/>

	<Container>
		<StudentsGallery {participants} />
		<div class="text-xl text-cardinal md:text-3xl">Student Debriefs</div>
		<div class="text-sm text-dark-gray md:text-xl">Click on the pins to watch!</div>
		<div class="mt-4 mb-12 flex flex-col items-center justify-around md:flex-row">
			<TakeawayTimeline
				{takeaways}
				{activeIndex}
				onSelect={(newIndex) => {
					activeIndex = newIndex;
					if (!largeDevice) {
						window.open(getPlayLink(takeaways[activeIndex].link));
					}
				}}
			/>
			<iframe
				class="hidden w-[400px] md:block lg:w-[560px]"
				height="315"
				src={getEmbedLink(takeaways[activeIndex].link)}
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
				style="border: 0"
			/>
		</div>
	</Container>
</MediaQuery>
