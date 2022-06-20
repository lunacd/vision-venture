<!-- 
	Landing page.

	Created by Haowen Liu in 2022.
 -->
<script lang="ts">
	import Header from '../components/header.svelte';
	import Card from '../components/card.svelte';
	import Container from '../components/container.svelte';
	import { Person } from '../utils/person';
	import TeamGallery from '../components/team_gallery.svelte';

	import Logo from '../images/vision-venture-full.svg';
	import Vanishing from '../images/vanishing.svg';
	import VanishingWide from '../images/vanishing-wide.svg';
	import VanishingTall from '../images/vanishing-tall.svg';
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
<div id="landing-display">
	<div
		alt="Vanishing point illustration"
		style="--standard: url({Vanishing}); --wide: url({VanishingWide}); --tall: url({VanishingTall})"
		class="vanishing-point"
	/>
	<div class="heading-container">
		<img src={Logo} alt="Vision Venture" class="image" />
	</div>
</div>

<Container>
	<Card
		title="About the Project"
		excerpt="In art, the convergence of lines where a road disappears into the horizon is known as a vanishing point.  In education, it is known as graduation."
		paragraphs={[
			'The premise of Vision Venture is simple: current students interview recent alumni about their educational and professional experiences.' +
				' Vision Venture aims to help you see beyond the immediate horizon of course work and to reconnect with the “why” that led you to the engineering path in the first place.',
			'The vanishing point can have two effects.' +
				' First, you may be uncertain or anxious about what life will be like after graduation—after all, you have been in school nearly your entire life!' +
				' Vision Venture includes short, thematic video clips of recent alumni sharing their experiences and answering common student questions, from the practical to the philosophical.' +
				' And second, in the midst of your hard work as an engineering major, you may lose sight of your initial motivation for being an engineer.' +
				' Vision Venture can help you recover your “why”—or maybe a new “why”—which might range from having job security to a desire to improve the world or even to tackle engineering problems from a different perspective.',
			'At its heart, Vision Venture hopes to promote your sense of agency, reignite your professional purpose, and help you forge your identity as you travel your own unique path into the future.'
		]}
	/>
</Container>

<Container color="gold">
	<div class="section-container">
		<div
			alt="Vision Venture roadmap"
			class="roadmap-image"
			style="--standard: url({Roadmap}); --tall: url({RoadmapTall});"
		/>
		<a class="button desktop-only" href="/roadmap" id="roadmap-button">Check out Vision Roadmap</a>
	</div>
</Container>
<div class="button-center">
	<a class="button mobile-only" href="/roadmap" id="roadmap-button">Check out Vision Roadmap</a>
</div>

<Container>
	<div class="section-container">
		<div class="voices-container">
			<div class="title">Hear from our Students!</div>
			<a class="button" href="/voices" id="voices-button">More Student Voices</a>
		</div>
		<img src={HearFromStudents} alt="Hear from students" class="image" />
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
	#landing-display {
		@apply z-background;
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
	}

	.image {
		width: 100%;
		margin-bottom: 0;
		padding-bottom: 0;
	}

	.title {
		@apply text-cardinal font-sans;
		margin-top: 32px;
		margin-bottom: 16px;
		font-size: 2.5rem;
	}

	.button {
		@apply bg-cardinal text-white;
		padding: 12px;
		border-radius: 6px;
		text-decoration: none;
		margin: 0 auto 0 auto;
		box-shadow: 0px 0px 10px 0px #00000040;
		font-size: 0.875rem;

		&#voices-button {
			margin-top: 16px;
		}
	}

	.section-container {
		position: relative;
	}

	.voices-container {
		position: absolute;
		display: flex;
		flex-direction: column;
		top: 50%;
		left: 25%;
		transform: translateX(-50%) translateY(-50%);
	}

	.vanishing-point {
		background-size: contain;
		width: 100%;
		height: 0;
		background-image: var(--tall);
		padding-top: 135.75%;
	}

	.heading-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: absolute;
		transform: translateX(-50%) translateY(-50%);
		left: 37%;
		width: 75%;
		top: 28%;
	}

	.roadmap-image {
		background-image: var(--tall);
		background-size: contain;
		height: 0;
		width: 100%;
		padding-top: 109.35%;
	}

	.button-center {
		display: flex;
		justify-content: center;
		margin: 16px 0 16px 0;
	}

	.desktop-only {
		display: none;
	}

	.mobile-only {
		display: block;
	}

	@media (min-width: 640px) {
		.heading-container {
			left: 25%;
			width: 55%;
			top: 28%;
		}
	}

	@media (min-width: 768px) {
		.vanishing-point {
			background-image: var(--standard);
			padding-top: 81.53%;
		}

		.heading-container {
			width: 35%;
			top: 28%;
			left: 20%;
		}

		.roadmap-image {
			background-image: var(--standard);
			padding-top: 63.96%;
		}

		.button {
			&#roadmap-button {
				position: absolute;
				left: 15%;
				top: 90%;
				transform: translateX(-50%) translateY(-50%);
			}
		}

		.desktop-only {
			display: block;
		}

		.mobile-only {
			display: none;
		}
	}

	@media (min-width: 1280px) {
		.vanishing-point {
			background-image: var(--wide);
			padding-top: 67.86%;
		}

		.heading-container {
			width: 30%;
			top: 25%;
		}
	}
</style>
