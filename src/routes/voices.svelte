<!-- 
	Student voices page.

	Created by Haowen Liu in 2022.
 -->
<script lang="ts">
	import Container from '../components/container.svelte';
	import StudentsGallery from '../components/students_gallery.svelte';
	import { Person } from '../utils/person';
	import { Takeaway } from '../utils/takeaway';
	import TitleSection from '../components/title_section.svelte';

	import Roopal_Kondepudi from '../images/profiles/Roopal_Kondepudi.png?webp';
	import Isabel_Anderson from '../images/profiles/Isabel_Anderson.png?webp';
	import Chris_Tronolone from '../images/profiles/Chris_Tronolone.png?webp';
	import TakeawayTimeline from '../components/takeaway_timeline.svelte';

	let participants = [
		new Person(
			'Chris Tronolone',
			Chris_Tronolone,
			'Chris is a Mechanical Engineering major, graduating in 2023. He is part of the Sidney Harman Academy for Polymathic Study at USC. His main hobbies are bread-making and drumming.'
		),
		new Person(
			'Isabel Anderson',
			Isabel_Anderson,
			'Isabel is an Industrial and Systems Engineering major and will be graduating in 2023. She is passionate about philanthropy, enjoys spending time with family and friends, and loves traveling to new places and trying new foods.'
		),
		new Person(
			'Roopal Kondepudi',
			Roopal_Kondepudi,
			"Roopal graduated in 2021 with a BS in Computer Engineering and Computer Science. She continued her studies through USC's Progressive Degree Program, and will graduate with an MS in Computer Science in 2022. She enjoys bouldering and embroidery."
		)
	];

	let takeaways = [
		new Takeaway('https://www.youtube.com/embed/d7ZOLtFpqTE', 'There are no wrong moves'),
		new Takeaway('https://www.youtube.com/embed/ni-BdN6L8ow', 'Find your values first'),
		new Takeaway('https://www.youtube.com/embed/CPu68x4JJAE', 'Shit sandwich'),
		new Takeaway('https://www.youtube.com/embed/aF48P7pswmo', "Employer's POV"),
		new Takeaway(
			'https://www.youtube.com/embed/JbMMFFj1-cM',
			'Time management and work-life balance'
		),
		new Takeaway('https://www.youtube.com/embed/FdTk-g3_hYU', 'Fluid mindset'),
		new Takeaway('https://www.youtube.com/embed/v2uJH6_4BFo', 'Confirming beliefs')
	];

	let activeIndex = 0;
</script>

<svelte:head>
	<title>Student Voices | Viterbi Vision Venture</title>
</svelte:head>

<TitleSection
	name="voices"
	title="Student Voices"
	tagline="Start your journey"
	description={[
		"Student interviewers completed a set of readings and discussed them in workshops together before conducting their interviews with alumni. Hear what they learned throughout the process in the videos below. Each season will include new student interviewers, so contact us if you're interested in participating."
	]}
/>

<Container>
	<StudentsGallery {participants} />
	<div class="section-title">Student Debriefs</div>
	<div class="section-subtitle">Click on the pins to watch!</div>
	<div class="video-container">
		<TakeawayTimeline
			{takeaways}
			{activeIndex}
			onSelect={(newIndex) => {
				activeIndex = newIndex;
			}}
		/>
		<iframe
			width="560"
			height="315"
			src={takeaways[activeIndex].link}
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		/>
	</div>
</Container>

<style lang="scss">
	.video-container {
		display: flex;
		margin-top: 16px;
		margin-bottom: 48px;
		justify-content: space-around;
		align-items: center;
	}

	.section-title {
		color: $dark-cardinal;
		font-size: 2rem;
		font-family: $sans;
	}

	.section-subtitle {
		color: gray;
		font-family: $sans;
		font-size: 1.25rem;
	}
</style>
