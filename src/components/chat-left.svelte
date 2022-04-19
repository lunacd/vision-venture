<script lang="ts">
	import Pointer from '../images/chat-gold.svg';

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
		background-color: $dark-gold;
		position: relative;
		padding: 12px;
        align-self: flex-start;
        margin: 12px;
        cursor: pointer;
	}

    .pointer {
        position: absolute;
        left: 0;
        bottom: 0;
        transform: translateY(80%);
        display: flex;
    }
</style>
