<!-- 
	Overlay YouTube video player.
	
	Created by Haowen Liu in 2022.
 -->
<script lang="ts">
	import X from '../images/x.svg';

	export let link: string;

	function close() {
		link = undefined;
	}
</script>

<div
	class="youtube-container"
	class:hidden={link === undefined}
	on:click={close}
	on:keypress={close}
>
	<iframe
		class="player border-0"
		width="560"
		height="315"
		src={link}
		title="YouTube video player"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
	/>
	<img class="close" on:click={close} on:keypress={close} src={X} alt="Close button" />
</div>

<style lang="postcss">
	.youtube-container {
		@apply fixed top-0 bottom-0 z-overlay w-full overflow-x-hidden;
		background-color: rgba(0, 0, 0, 0.8);
	}

	.player {
		@apply absolute left-1/2 top-1/2 max-w-full -translate-x-1/2 -translate-y-1/2;
	}

	.close {
		@apply absolute w-6 -translate-x-1/2 -translate-y-1/2 cursor-pointer text-white md:w-8;
		left: 90%;
		top: 10%;
	}
</style>
