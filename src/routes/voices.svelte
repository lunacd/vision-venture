<script lang="ts">
	import Header from '../components/header.svelte';
	import SmallCard from '../components/small_card.svelte';
	import Container from '../components/container.svelte';
	import FlipGallery from '../components/flip_gallery.svelte';
	import { Participant } from '../utils/participant';

	import Roopal_Kondepudi from '../images/profiles/Roopal_Kondepudi.png?webp';
	import Isabel_Anderson from '../images/profiles/Isabel_Anderson.png?webp';
	import Chris_Tronolone from '../images/profiles/Chris_Tronolone.png?webp';

	let participants = [
		new Participant(
			'Chris Tronolone',
			Chris_Tronolone,
			'Chris is a Mechanical Engineering major, graduating in 2023. He is part of the Sidney Harman Academy for Polymathic Study at USC. His main hobbies are bread-making and drumming.'
		),
		new Participant(
			'Isabel Anderson',
			Isabel_Anderson,
			'Isabel is an Industrial and Systems Engineering major and will be graduating in 2023. She is passionate about philanthropy, enjoys spending time with family and friends, and loves traveling to new places and trying new foods.'
		),
		new Participant(
			'Roopal Kondepudi',
			Roopal_Kondepudi,
			"Roopal graduated in 2021 with a BS in Computer Engineering and Computer Science. She continued her studies through USC's Progressive Degree Program, and will graduate with an MS in Computer Science in 2022. She enjoys bouldering and embroidery."
		)
	];
</script>

<svelte:head>
	<title>Student Voices | Viterbi Vision Venture</title>
</svelte:head>

<Header page="voices" />
<div id="padding" />
<Container>
	<div class="title">Student Voices</div>
	<SmallCard
		title="Start your journey"
		paragraphs={[
			"Maybe a small explanation of how they're picked? or how they all have different visions?" +
				' Maybe some background on how the seasons are seperated? Short summary. Lorem ipsum dolor sit amet,' +
				' consectetur adipiscing elit.'
		]}
	/>
	<FlipGallery {participants} />
</Container>

<style lang="scss">
	#padding {
		// 88px to skip absolutely positioned header, and 16px actual margin
		margin-top: calc(88px + 16px);
	}

	.title {
		font-family: $sans;
		font-size: 3.5rem;
		text-align: center;
	}
</style>
