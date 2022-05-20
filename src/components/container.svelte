<script lang="ts">
	export let color = 'none', additionalStyles: string = undefined;
</script>

<div class="outer" class:cardinal={color === 'cardinal'} class:gold={color === 'gold'}>
	<div class="inner" style={additionalStyles}>
		<slot />
	</div>
</div>

<style lang="scss">
	.cardinal {
		background-color: $dark-cardinal;
	}

	.gold {
		background-color: $dark-gold;
	}

	.outer {
		width: 100%;
	}

	.inner {
		max-width: 1320px;
		width: 100%;
		margin-left: auto;
		margin-right: auto;
		padding-right: 18px;
		padding-left: 18px;
	}
</style>
