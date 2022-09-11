<!-- 
	Scrolling gallery for additional resources, mostly books.

	Created by Haowen Liu in 2022.
 -->
<script lang="ts">
	import type { Book } from 'src/utils/book';
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';

	import ForwardCaret from '../images/forward-caret-cardinal.svg';

	export let books: Book[];

	const margin = 48;

	// Scroll
	let scrollPosition = 0;
	let maxScroll = 0;
	let translate = spring(0);
	let translateFinal = 0;

	let images = new Array<HTMLImageElement>(books.length);
	let outerContainer: HTMLDivElement;

	onMount(() => {
		maxScroll = books.length - Math.floor(outerContainer.clientWidth / (images[0].width + margin));
	});
</script>

<svelte:window
	on:resize={() => {
		maxScroll = books.length - Math.floor(outerContainer.clientWidth / (images[0].width + margin));
	}}
/>

<div class="outer mb-24" bind:this={outerContainer} class:center={maxScroll <= 0}>
	<div class="inner" style={`transform: translateX(-${$translate}px)`}>
		{#each books as book, i}
			<div class="book-container">
				<a href={book.link} class="book-link" target="_blank">
					<img src={book.image} alt={book.title} class="book" bind:this={images[i]} />
				</a>
				<a class="book-title" href={book.link} target="_blank">{book.title}</a>
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

	.book-link {
		margin: 12px;
	}

	.book {
		border-radius: 12px;
		width: 240px;
		height: 360px;
		object-fit: cover;
		object-position: center;
	}

	.book-container {
		display: flex;
		flex-direction: column;
	}

	.book-title {
		@apply border-2 border-solid border-cardinal font-sans text-cardinal;
		text-transform: uppercase;
		margin: 0 12px 0 12px;
		padding: 4px;
		text-align: center;
		border-radius: 6px;
		cursor: pointer;
		text-decoration: none;

		&:hover {
			@apply bg-cardinal text-white;
		}
	}

	.hide {
		display: none;
	}
</style>
