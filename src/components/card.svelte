<script lang="ts">
	export let header: string, title: string, paragraphs: string[], image: string;
</script>

<div class="card">
	<div>
		{#if header !== undefined}
			<div class="card-header">{header}</div>
		{/if}
		<div class="card-title">{title}</div>
		{#each paragraphs as paragraph}
			<div class="card-text">{paragraph}</div>
		{/each}
	</div>
	{#if image !== undefined}
		<img src={image} alt="People studying" class="card-image" />
	{/if}
</div>

<style lang="scss">
	.card {
		background-color: $dark-cardinal;
		border-radius: 16px;
		color: $white;
		margin-top: 32px;
		margin-bottom: 32px;
		padding: 5%;
		font-family: $sans;
		display: flex;
		flex-direction: row;
		max-width: 100%;
	}

	.card-header {
		font-size: 1.25rem;
	}

	.card-title {
		font-size: 2.5rem;
	}

	.card-image {
		margin-left: auto;
	}

	.card-text {
		margin-top: 32px;
		font-size: 1.25rem;
	}
</style>
