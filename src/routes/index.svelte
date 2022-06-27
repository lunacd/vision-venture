<!-- 
	Landing page.

	Created by Haowen Liu in 2022.
 -->
<script lang="ts">
	import Header from '../components/header.svelte';
	import Container from '../components/container.svelte';
	import { Person } from '../utils/person';
	import TeamGallery from '../components/team_gallery.svelte';

	import Vanishing from '../images/vanishing.svg';
	import VanishingWide from '../images/vanishing-wide.svg';
	import VanishingTall from '../images/vanishing-tall.svg';
	import Quote from '../images/quote.svg';
	import Roadmap from '../images/roadmap.svg';
	import RoadmapTall from '../images/roadmap-tall.svg';
	import HearFromStudents from '../images/hear_from_students.svg';
	import Harly_Ramsey from '../images/team/Harly_Ramsey.png?webp';
	import Elaine_Wong from '../images/team/Elaine_Wong.png?webp';
	import Haowen_Liu from '../images/team/Haowen_Liu.jpg?webp';
	import Selin_Oner from '../images/team/Selin_Oner.png?webp';
</script>

<svelte:head>
	<title>Viterbi Vision Venture</title>
</svelte:head>

<Header page="about" />
<div class="z-background relative left-0 top-0 w-full">
	<div
		alt="Vanishing point illustration"
		style="--standard: url({Vanishing}); --wide: url({VanishingWide}); --tall: url({VanishingTall})"
		class="vanishing-point"
	/>
</div>

<Container>
	<!-- Quote -->
	<div class="flex justify-center mb-24">
		<div class="flex flex-row max-w-3xl space-x-6 text-lg">
			<img src={Quote} alt="quotation mark" class="self-start w-20 h-20" />
			<div class="flex flex-col items-center text-xl text-center">
				<div>
					In art, the convergence of lines where a road disappears into the horizon is known as a
					vanishing point.
				</div>
				<div class="font-bold mt-8">In education, it is known as graduation.</div>
			</div>
		</div>
	</div>

	<!-- Info -->
	<div class="mb-24">
		<div class="text-lg">WHO WE ARE</div>
		<div class="font-bold text-3xl">About the Project</div>
		<div class="font-serif text-lg space-y-4 mt-6">
			<p>
				The premise of Vision Venture is simple: current students interview recent alumni about
				their educational and professional experiences. Vision Venture aims to help you see beyond
				the immediate horizon of course work and to reconnect with the “why” that led you to the
				engineering path in the first place.
			</p>
			<p>
				The vanishing point can have two effects. First, you may be uncertain or anxious about what
				life will be like after graduation—after all, you have been in school nearly your entire
				life! Vision Venture includes short, thematic video clips of recent alumni sharing their
				experiences and answering common student questions, from the practical to the philosophical.
				And second, in the midst of your hard work as an engineering major, you may lose sight of
				your initial motivation for being an engineer. Vision Venture can help you recover your
				“why”—or maybe a new “why”—which might range from having job security to a desire to improve
				the world or even to tackle engineering problems from a different perspective.
			</p>
			<p>
				At its heart, Vision Venture hopes to promote your sense of agency, reignite your
				professional purpose, and help you forge your identity as you travel your own unique path
				into the future.
			</p>
		</div>
	</div>
</Container>

<Container>
	<div class="relative">
		<div
			alt="Vision Venture roadmap"
			class="roadmap-image"
			style="--standard: url({Roadmap}); --tall: url({RoadmapTall});"
		/>
		<a
			class="button hidden md:block absolute left-[15%] top-[90%] -translate-x-1/2 -translate-y-1/2"
			href="/roadmap"
		>
			<div>Check out Vision Roadmap</div>
		</a>
	</div>
</Container>
<div class="flex justify-center mx-4">
	<a class="button md:!hidden" href="/roadmap">
		<div>Check out Vision Roadmap</div>
	</a>
</div>

<Container>
	<div class="relative">
		<div class="absolute flex flex-col top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2">
			<div class="title">Hear from our Students!</div>
			<a class="button mt-4" href="/voices" id="voices-button">
				<div>More Student Voices</div>
			</a>
		</div>
		<img src={HearFromStudents} alt="Hear from students" class="w-full" />
	</div>
	<div class="title">Meet the Team!</div>
	<TeamGallery
		people={[
			new Person(
				'Harly Ramsey',
				Harly_Ramsey,
				"Harly Ramsey is an Associate Professional of Technical Communication Practice in the Engineering in Society Program. She has a PhD in English, and her training in narrative theory, cultural studies, and rhetoric informs her teaching. As the founder of Vision Venture, she hopes to encourage students' exploration of their engineering identities and to empower them with a sense of personal agency and professional purpose. She enjoys playing tennis and tackling the New York Times daily spelling bee puzzle, but not at the same time."
			),
			new Person(
				'Elaine Wong',
				Elaine_Wong,
				'Yee Lan Elaine Wong is a Master of Visual Anthropology student at the University of Southern California and is investigating emotions in the modern workplace through her thesis film. In her free time, she enjoys playing traditional mahjong, watching dystopian anime and religiously drinks a concerning amount of coffee to fuel her existence.'
			),
			new Person(
				'Haowen Liu',
				Haowen_Liu,
				'Haowen Liu is pursuing a Master of Science in Computer Science at University of Southern California. He wants to specialize in cybersecurity and high-performance computing. He is excited about Chinese opera, fountain pens, ping pong, and unfortunately, coding. He also plays League of Legends and watch a lot of Pokemon.'
			),
			new Person(
				'Selin Oner',
				Selin_Oner,
				'Selin Oner is majoring in Cognitive Science and minoring in Business Administration at the University of Southern California with a passion for UI/UX design. She enjoys playing volleyball, reading mystery novels, and cooking Turkish dishes that remind her of home.'
			)
		]}
	/>
</Container>

<style lang="postcss">
	.title {
		@apply text-cardinal font-sans mt-8 mb-4 text-4xl;
	}

	.button {
		@apply bg-accent-green text-white font-bold rounded-lg shadow-lg px-4 mx-auto;
		@apply w-48 h-14 text-base flex items-center;

		& div {
			@apply w-full text-center;
		}
	}

	.vanishing-point {
		@apply w-full h-0 bg-contain;
		background-image: var(--tall);
		padding-top: 135.75%;
	}

	.roadmap-image {
		@apply w-full h-0 bg-contain;
		background-image: var(--tall);
		padding-top: 109.35%;
	}

	@media (min-width: 768px) {
		.vanishing-point {
			background-image: var(--standard);
			padding-top: 81.53%;
		}

		.roadmap-image {
			background-image: var(--standard);
			padding-top: 63.96%;
		}
	}

	@media (min-width: 1280px) {
		.vanishing-point {
			background-image: var(--wide);
			padding-top: 67.86%;
		}
	}
</style>
