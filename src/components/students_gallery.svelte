<!-- 
	Scrolling gallery for participating students.

	Created by Haowen Liu in 2022.
 -->
<script lang="ts">
	import type { Person } from 'src/utils/person';

	export let participants: Person[];
</script>

<div class="flex w-full flex-wrap justify-center">
	{#each participants as participant}
		<div class="flip-box">
			<div class="flip-box-inner">
				<div class="flip-box-front">
					<img src={participant.image} alt={participant.name} />
				</div>
				<div class="flip-box-back overflow-y-scroll">
					<p>{participant.bio}</p>
				</div>
			</div>
		</div>
	{/each}
</div>

<style lang="postcss">
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
		box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
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
		& img {
			border-radius: 16px;
			width: 240px;
			height: 240px;
		}
	}

	.flip-box-back {
		@apply font-serif;
		transform: rotateY(180deg);
		display: flex;
		align-items: center;
		line-height: 1.25;

		& p {
			padding: 16px;
			margin: 0;
		}
	}
</style>
