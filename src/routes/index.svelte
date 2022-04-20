<script lang="ts">
	import Header from '../components/header.svelte';
	import Card from '../components/card.svelte';
	import Container from '../components/container.svelte';

	import Logo from '../images/vision-venture-full.svg';
	import Vanishing from '../images/vanishing.svg';
	import Roadmap from '../images/roadmap.svg';
</script>

<svelte:head>
	<title>Viterbi Vision Venture</title>
</svelte:head>

<Header page="about" />
<Container color="cardinal">
	<div id="landing-display">
		<img src={Vanishing} alt="Vanishing point illustration" />
		<div class="heading-container">
			<img src={Logo} alt="Vision Venture" class="image" />
		</div>
	</div>
</Container>

<Container>
	<Card
		header="WHO WE ARE"
		title="About the Project"
		paragraphs={[
			'The premise of Vision Venture is simple: current students interview recent alumni about their educational and professional experiences.' +
				' Vision Venture aims to help you see beyond the immediate horizon of course work and to reconnect with the “why” that led you to the engineering path in the first place.',
			'The vanishing point can have two effects.' +
				'  First, you may be uncertain or anxious about what life will be like after graduation—after all, you have been in school nearly your entire life!' +
				' Vision Venture includes short, thematic video clips of recent alumni sharing their experiences and answering common student questions, from the practical to the philosophical.' +
				' And second, in the midst of your hard work as an engineering major, you may lose sight of your initial motivation for being an engineer.' +
				' Vision Venture can help you recover your “why”—or maybe a new “why”—which might range from a desire to improve the world to having job security.',
			'At its heart, Vision Venture hopes to promote your sense of agency, reignite your professional purpose, and help you forge your identity as you travel your own unique path into the future.'
		]}
		image={undefined}
	/>
</Container>

<Container color="gold">
	<img src={Roadmap} alt="Vision Venture roadmap" class="image" id="roadmap" />
</Container>

<Container>
	<div class="title">Hear from our Students!</div>
	<div class="student-container">
		<div class="student-section">
			<a class="button" href="/roadmap">Check out Vision Roadmap</a>
		</div>
		<div class="student-section">
			<a class="button" href="/voices">More Student Voices</a>
		</div>
	</div>
	<div class="title">Meet the Team!</div>
</Container>

<style lang="scss">
	#landing-display {
		position: relative;
		top: 0;
		left: 0;
		z-index: $z-background;
		width: 100%;
	}

	#landing-display img {
		width: 100%;
	}

	.heading-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: absolute;
		top: 25%;
		left: 20%;
		width: 38%;
		transform: translateX(-50%) translateY(-50%);
	}

	.image {
		width: 100%;
		margin-bottom: 0;
		padding-bottom: 0;
	}

	.title {
		margin-top: 32px;
		margin-bottom: 16px;
		color: $cardinal;
		font-family: $sans;
		font-size: 2.5rem;
	}

	.student-container {
		display: flex;
	}

	.student-section {
		width: 50%;
		padding: 16px;
		display: flex;
	}

	.button {
		background-color: $cardinal;
		padding: 16px;
		border-radius: 8px;
		color: $white;
		text-decoration: none;
		margin: 0 auto 0 auto;
	}
</style>
