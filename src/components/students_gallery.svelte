<!-- 
	Scrolling gallery for participating students.

	Created by Haowen Liu in 2022.
 -->
<script lang="ts">
	import type { Person } from '../utils/person';
	import SeasonControl from './season_control.svelte';

	export let participants: Person[][];

	let currentSeason = participants.length - 1;
</script>

<div>
	<SeasonControl
		numberOfSeasons={participants.length}
		{currentSeason}
		selectAction={(season) => {
			currentSeason = season;
		}}
	/>
	<div class="mb-12 flex w-full flex-col justify-center md:flex-row md:flex-wrap">
		{#each participants[currentSeason] as participant}
			<div class="mx-6 hidden flex-col md:flex">
				<div class="flip-box">
					<div class="flip-box-inner">
						<div class="flip-box-front">
							<img src={participant.picture} alt={participant.name} />
						</div>
						<div class="flip-box-back overflow-y-scroll">
							<p>{participant.bio}</p>
						</div>
					</div>
				</div>
				<div class="mt-3 text-center text-xl font-bold uppercase">
					{participant.name}
				</div>
			</div>
			<div class="mb-6 grid grid-cols-2 items-center gap-2 md:hidden">
				<div>
					<img src={participant.picture} alt={participant.name} class="rounded-xl" />
					<div class="mt-3 text-center text-sm font-bold uppercase">
						{participant.name}
					</div>
				</div>
				<p class="font-serif text-sm">{participant.bio}</p>
			</div>
		{/each}
	</div>
</div>

<style lang="postcss">
	.flip-box {
		@apply relative aspect-square w-full md:w-60;
	}

	.flip-box-inner {
		@apply relative h-full w-full transform-gpu rounded-2xl text-center transition-transform duration-700;
		transform-style: preserve-3d;
		box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
	}

	.flip-box:hover .flip-box-inner {
		transform: rotateY(180deg);
	}

	.flip-box-front,
	.flip-box-back {
		@apply absolute h-full w-full;
		backface-visibility: hidden;
		transform-style: preserve-3d;
	}

	.flip-box-front {
		& img {
			@apply h-full w-full rounded-2xl;
		}
	}

	.flip-box-back {
		@apply flex items-center font-serif leading-tight;
		transform: rotateY(180deg);

		& p {
			@apply m-0 p-4;
		}
	}
</style>
