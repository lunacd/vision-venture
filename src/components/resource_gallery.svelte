<!-- 
	Scrolling gallery for additional resources, mostly books.

	Created by Haowen Liu in 2022.
 -->
<script lang="ts">
	import type { Resource } from '../utils/resource';
	import Container from './container.svelte';

	export let resources: Resource[];
</script>

<Container>
	<div class="mb-24 flex flex-wrap justify-around">
		{#each resources as book}
			<div class="flex w-1/2 flex-col p-3 md:w-52 lg:w-72">
				<a href={book.link} target="_blank" rel="noreferrer">
					<img src={book.cover} alt={book.title} class="book" />
				</a>
				<a class="book-title" href={book.link} target="_blank" rel="noreferrer">{book.title}</a>
			</div>
		{/each}
	</div>
</Container>

<style lang="postcss">
	.book {
		@apply w-full rounded-lg;
	}

	.book-title {
		@apply rounded border-2 border-solid border-cardinal font-sans text-cardinal;
		@apply mt-3 cursor-pointer p-1 text-center text-sm uppercase md:text-base;

		&:hover {
			@apply bg-cardinal text-white;
		}
	}
</style>
