<!-- 
	Scrolling gallery to display team members.

	Created by Haowen Liu in 2022.
 -->
<script lang="ts">
	import type { Person } from '../utils/person';

	export let people: Person[];

	// noinspection JSUnusedAssignment
	let currentBio = people[0].bio;
	let currentIndex = 0;

	function selectBio(index: number) {
		currentIndex = index;
		currentBio = people[index].bio;
	}
</script>

<div class="mx-4 flex w-full flex-wrap justify-center">
	{#each people as person, i}
		<button
			class="person_image"
			on:click={() => {
				selectBio(i);
			}}
			on:mouseenter={() => {
				selectBio(i);
			}}
		>
			<img src={person.picture} alt={person.name} class:gray={i !== currentIndex} />
		</button>
	{/each}
</div>
<div class="bio">
	{currentBio}
</div>

<style lang="postcss">
	.person_image {
		@apply aspect-square cursor-default overflow-hidden w-1/2 p-3 sm:p-6 md:w-52 lg:w-72;

		& img {
			@apply rounded-full h-full w-full;
		}
	}

	.bio {
		@apply mx-3 mb-12 mt-3 rounded-3xl p-6 md:mx-12 md:p-9;
		box-shadow: 0 10px 50px 0 #503c2d40;
	}

	.gray {
		filter: grayscale(75%);
	}
</style>
