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

<div
	class="relative hidden h-full w-full overflow-hidden md:flex"
	bind:this={outerContainer}
	class:justify-center={maxScroll <= 0}
>
	<div class="mx-4 flex h-full w-fit flex-row" style={`transform: translateX(-${$translate}px)`}>
		{#each people as person, i}
			<img
				src={person.image}
				alt={person.name}
				class="m-3 h-60 w-60 rounded-full"
				class:gray={i !== currentIndex}
				bind:this={images[i]}
				on:mouseenter={() => {
					currentIndex = i;
					currentBio = person.bio;
				}}
			/>
		{/each}
	</div>
	<div class="caret left-0 -scale-100" class:hidden={scrollPosition === 0}>
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
	<div class="caret" class:hidden={scrollPosition >= maxScroll}>
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
<div class="grid grid-flow-row grid-cols-2 place-content-evenly sm:grid-cols-3 md:hidden">
	{#each people as person, i}
		<div class="relative h-0" style="padding-top: 100%;">
			<img
				src={person.image}
				alt={person.name}
				class="mobile-image"
				class:gray={i !== currentIndex}
				bind:this={images[i]}
				on:mouseenter={() => {
					currentIndex = i;
					currentBio = person.bio;
				}}
			/>
		</div>
	{/each}
</div>
<div class="bio">
	{currentBio}
</div>

<style lang="postcss">
	.caret {
		@apply absolute right-0 top-0 bottom-0 w-12;
		background: linear-gradient(
			90deg,
			rgba(255, 255, 255, 0) 0%,
			rgba(255, 255, 255, 0.6) 20%,
			rgba(255, 255, 255, 1) 100%
		);

		& img {
			@apply absolute top-1/2 right-0 -translate-y-1/2 cursor-pointer;
		}
	}

	.bio {
		@apply mx-4 mb-12 mt-3 rounded-3xl p-9 md:mx-12;
		box-shadow: 0px 10px 50px 0px #503c2d40;
	}

	.gray {
		filter: grayscale(75%);
	}

	.mobile-image {
		@apply absolute left-2 top-2 rounded-full;
		height: calc(100% - 1rem);
		width: calc(100% - 1rem);
	}
</style>
