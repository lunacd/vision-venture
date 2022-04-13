<script lang="ts">
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';

	import ForwardCaret from '../images/forward-caret-cardinal.svg';
	import type { Participant } from 'src/utils/participant';

	export let participants: Participant[];

	const margin = 48;

	// Scroll
	let scrollPosition = 0;
	let maxScroll = 0;
	let translate = spring(0);
	let translateFinal = 0;

	let images = new Array<HTMLImageElement>(participants.length);
	let outerContainer: HTMLDivElement;

	onMount(() => {
		maxScroll =
			participants.length - Math.floor(outerContainer.clientWidth / (images[0].width + margin));
	});
</script>

<svelte:window
	on:resize={() => {
		maxScroll =
			participants.length - Math.floor(outerContainer.clientWidth / (images[0].width + margin));
	}}
/>

<div class="outer" bind:this={outerContainer} class:center={maxScroll <= 0}>
	<div class="inner" style={`transform: translateX(-${$translate}px)`}>
		{#each participants as participant, i}
			<div class="flip-box">
				<div class="flip-box-inner">
					<div class="flip-box-front">
						<img src={participant.image} alt={participant.name} bind:this={images[i]} />
					</div>
					<div class="flip-box-back">
						<p>{participant.bio}</p>
					</div>
				</div>
			</div>
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

<style lang="scss">
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

		img {
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

	.flip-box {
		width: 240px;
		height: 240px;
		perspective: 1000px;
		margin: 12px 24px 36px 24px;
	}

	.flip-box-inner {
		position: relative;
		width: 100%;
		height: 100%;
		text-align: center;
		transition: transform 0.6s;
		transform-style: preserve-3d;
		border-radius: 16px;
		box-shadow: 0 0.5rem 1rem rgba($black, 0.15);
	}

	.flip-box:hover .flip-box-inner {
		transform: rotateY(180deg);
	}

	.flip-box-front,
	.flip-box-back {
		position: absolute;
		width: 100%;
		height: 100%;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
		transform-style: preserve-3d;
	}

	.flip-box-front {
		img {
			border-radius: 16px;
			width: 240px;
			height: 240px;
		}
	}

	.flip-box-back {
		transform: rotateY(180deg);
		display: flex;
		align-items: center;
		font-family: $serif;
		line-height: 1.25;

		p {
			padding: 16px;
			margin: 0;
		}
	}

	.hide {
		display: none;
	}
</style>
