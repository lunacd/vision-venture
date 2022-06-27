<!-- 
	Container to limit element width to a maximum and adds appropriate margins.

	Created by Haowen Liu in 2022.
 -->
<script lang="ts">
	export let color = 'none',
		additionalStyles: string = undefined;
</script>

<div class="outer" class:cardinal={color === 'cardinal'} class:gold={color === 'gold'}>
	<div class="inner" style={additionalStyles}>
		<slot />
	</div>
</div>

<style lang="postcss">
	.cardinal {
		@apply bg-dark-cardinal;
	}

	.gold {
		@apply bg-dark-gold;
	}

	.outer {
		width: 100%;
	}

	.inner {
		@apply px-8;
		max-width: 1320px;
		width: 100%;
		margin-left: auto;
		margin-right: auto;
	}
</style>
