<script lang="ts">
	import Header from '../components/header.svelte';
	import SmallCard from '../components/small_card.svelte';
	import Container from '../components/container.svelte';
	import FlipGallery from '../components/flip_gallery.svelte';
	import ChatLeft from '../components/chat-left.svelte';
	import ChatRight from '../components/chat-right.svelte';
	import { Participant } from '../utils/participant';
	import { Takaway } from '../utils/takeaway';

	import Roopal_Kondepudi from '../images/profiles/Roopal_Kondepudi.png?webp';
	import Isabel_Anderson from '../images/profiles/Isabel_Anderson.png?webp';
	import Chris_Tronolone from '../images/profiles/Chris_Tronolone.png?webp';
	import Phone from '../images/phone.svg';

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

	let takeaways = [
		new Takaway('https://www.youtube.com/embed/d7ZOLtFpqTE', 'There are no wrong moves', true),
		new Takaway('https://www.youtube.com/embed/ni-BdN6L8ow', 'Find your values first', false),
		new Takaway('https://www.youtube.com/embed/CPu68x4JJAE', 'Shit sandwich', false),
		new Takaway('https://www.youtube.com/embed/aF48P7pswmo', "Employer's POV", true),
		new Takaway(
			'https://www.youtube.com/embed/JbMMFFj1-cM',
			'Time management and work-life balance',
			true
		),
		new Takaway('https://www.youtube.com/embed/FdTk-g3_hYU', 'Fluid mindset', false),
		new Takaway('https://www.youtube.com/embed/v2uJH6_4BFo', 'Confirming beliefs', false)
	];

	let currentVideo = takeaways[0].link;
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
	<div class="video-container">
		<div class="phone">
			<img src={Phone} alt="Phone background" class="phone-background" />
			{#each takeaways as takeaway}
				<div
					class="chat"
					on:click={() => {
						currentVideo = takeaway.link;
					}}
				>
					{#if takeaway.onLeft}
						<ChatLeft title={takeaway.title} />
					{:else}
						<ChatRight title={takeaway.title} />
					{/if}
				</div>
			{/each}
		</div>
		<iframe
			width="560"
			height="315"
			src={currentVideo}
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		/>
	</div>
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

	.video-container {
		display: flex;
		margin-top: 16px;
		margin-bottom: 48px;
		justify-content: space-around;
		align-items: center;
	}

	.phone {
		width: 480px;
		height: 713px;
		border-radius: 16px;
		box-shadow: 0px 10px 50px 0px #503c2d40;
		margin-right: 16px;
		margin-left: 16px;
		display: flex;
		flex-direction: column;
		padding: 30px 12px 60px 12px;
		position: relative;
	}

	.phone-background {
		width: 480px;
		position: absolute;
		z-index: $z-background;
		top: 0;
		left: 0;
	}

	.chat {
		position: relative;
		z-index: $z-content;
		display: flex;
		flex-direction: column;
	}
</style>
