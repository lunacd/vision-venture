<!-- 
	Scrolling gallery to display team members.

	Created by Haowen Liu in 2022.
 -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';

	import ForwardCaret from '../images/forward-caret-cardinal.svg';
	import type { Person } from 'src/utils/person';

	export let people: Person[];

	const margin = 48;

	// Scroll
	let scrollPosition = 0;
	let maxScroll = 0;
	let translate = spring(0);
	let translateFinal = 0;

	let images = new Array<HTMLImageElement>(people.length);
	let outerContainer: HTMLDivElement;

	onMount(() => {
		maxScroll = people.length - Math.floor(outerContainer.clientWidth / (images[0].width + margin));
	});

	let currentBio = people[0].bio;
	let currentIndex = 0;
</script>

<svelte:window
	on:resize={() => {
		maxScroll = people.length - Math.floor(outerContainer.clientWidth / (images[0].width + margin));
	}}
/>

<div class="outer" bind:this={outerContainer} class:center={maxScroll <= 0}>
	<div class="inner" style={`transform: translateX(-${$translate}px)`}>
		{#each people as person, i}
			<img
				src={person.image}
				alt={person.name}
				class="photo"
				class:gray={i !== currentIndex}
				bind:this={images[i]}
				on:mouseenter={() => {
					currentIndex = i;
					currentBio = person.bio;
				}}
			/>
		{/each}
	</div>
	<div class="caret backward-caret" class:hide={scrollPosition === 0}>
		<img
			src={ForwardCaret}
			alt="Forward caret"
			on:click={() => {
				if (scrollPosition <= 0) return;
				translateFinal -= margin + images[0].width;
				translate.set(translateFinal);
				scrollPosition -= 1;
			}}
		/>
	</div>
	<div class="caret" class:hide={scrollPosition >= maxScroll}>
		<img
			src={ForwardCaret}
			alt="Forward caret"
			on:click={() => {
				if (scrollPosition >= maxScroll) return;
				translateFinal += margin + images[0].width;
				translate.set(translateFinal);
				scrollPosition += 1;
			}}
		/>
	</div>
</div>
<div class="bio">
	{currentBio}
</div>

<style lang="postcss">
	.outer {
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;
		display: flex;
	}

	.center {
		justify-content: center;
	}

	.inner {
		display: flex;
		flex-direction: row;
		height: 100%;
		margin: 0 16px 0 16px;
		width: fit-content;
	}

	.caret {
		position: absolute;
		right: 0;
		top: 0;
		bottom: 0;
		width: 50px;
		background: linear-gradient(
			90deg,
			rgba(255, 255, 255, 0) 0%,
			rgba(255, 255, 255, 0.6) 20%,
			rgba(255, 255, 255, 1) 100%
		);

		& img {
			position: absolute;
			top: 50%;
			right: 0;
			transform: translateY(-50%);
			cursor: pointer;
		}
	}

	.backward-caret {
		left: 0;
		transform: scaleX(-1);
	}

	.photo {
		border-radius: 9999px;
		width: 240px;
		margin: 12px;
	}

	.bio {
		border-radius: 24px;
		box-shadow: 0px 10px 50px 0px #503c2d40;
		padding: 36px;
		margin: 12px 54px 54px 54px;
	}

	.gray {
		filter: grayscale(75%);
	}

	.hide {
		display: none;
	}
</style>
