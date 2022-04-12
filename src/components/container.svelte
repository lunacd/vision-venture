<script lang="ts">
	export let color = 'none';
</script>

<div class="outer" class:cardinal={color === 'cardinal'} class:gold={color === 'gold'}>
	<div class="inner">
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
		padding-right: 12px;
		padding-left: 12px;
	}
</style>
