<!-- 
	Overlay YouTube video player.
	
	Created by Haowen Liu in 2022.
 -->
<script lang="ts">
	import X from '../images/x.svg';

	export let link: string;
</script>

<div
	class="youtube-container"
	class:hide={link === undefined}
	on:click={() => {
		link = undefined;
	}}
>
	<!--suppress HtmlDeprecatedAttribute -->
	<iframe
		class="player"
		width="560"
		height="315"
		src={link}
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
	/>
	<img
		class="close"
		on:click={() => {
			link = undefined;
		}}
		src={X}
		alt="Close button"
	/>
</div>

<style lang="scss">
	.youtube-container {
		position: fixed;
		width: 100%;
		overflow-x: hidden;
		top: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.8);
		z-index: $z-overlay;
	}

	.player {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translateX(-50%) translateY(-50%);
	}

	.hide {
		display: none;
	}

	.close {
		color: $white;
		position: absolute;
		left: 90%;
		top: 10%;
		transform: translateX(-50%) translateY(-50%);
		cursor: pointer;
		width: 32px;
	}
</style>
