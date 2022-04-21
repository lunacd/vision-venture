<script lang="ts">
	import Pointer from '../images/chat-cardinal.svg';

	export let title: string;
</script>

<span class="bubble">
	{title}
	<img src={Pointer} alt="Chat pointer" class="pointer" />
</span>

<style lang="scss">
	.bubble {
		color: $white;
		border-radius: 12px;
		background-color: $dark-cardinal;
		position: relative;
		padding: 12px;
		align-self: flex-end;
		margin: 12px;
		cursor: pointer;
	}

	.pointer {
		position: absolute;
		right: 0;
		bottom: 0;
		transform: translateY(80%);
	}
</style>
