<!-- 
	Scrolling gallery to display team members.

	Created by Haowen Liu in 2022.
 -->
<script lang="ts">
	import type { Person } from 'src/utils/person';

	export let people: Person[];

	let currentBio = people[0].bio;
	let currentIndex = 0;
</script>

<div class="relative hidden h-full w-full overflow-hidden md:flex">
	<div class="mx-4 grid w-full grid-cols-3 justify-between lg:grid-cols-4 2xl:grid-cols-5">
		{#each people as person, i}
			<img
				src={person.image}
				alt={person.name}
				class="person_image"
				class:gray={i !== currentIndex}
				on:mouseenter={() => {
					currentIndex = i;
					currentBio = person.bio;
				}}
			/>
		{/each}
	</div>
</div>
<div class="bio">
	{currentBio}
</div>

<style lang="postcss">
	.person_image {
		@apply m-3 h-52 w-52 rounded-full;
	}

	.bio {
		@apply mx-3 mb-12 mt-3 rounded-3xl p-6 md:mx-12 md:p-9;
		box-shadow: 0px 10px 50px 0px #503c2d40;
	}

	.gray {
		filter: grayscale(75%);
	}
</style>
