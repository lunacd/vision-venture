<!-- 
	Scrolling gallery for additional resources, mostly books.

	Created by Haowen Liu in 2022.
 -->
<script lang="ts">
	import type { Book } from 'src/utils/book';

	import Container from './container.svelte';

	export let books: Book[];
</script>

<Container>
	<div class="mb-24 flex flex-wrap justify-around">
		{#each books as book}
			<div class="flex w-72 flex-col">
				<a href={book.link} class="m-3" target="_blank">
					<img src={book.image} alt={book.title} class="book" />
				</a>
				<a class="book-title" href={book.link} target="_blank">{book.title}</a>
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
		@apply mx-3 cursor-pointer p-1 text-center uppercase;

		&:hover {
			@apply bg-cardinal text-white;
		}
	}
</style>
