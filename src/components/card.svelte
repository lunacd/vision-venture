<script lang="ts">
	export let title: string, excerpt: string, paragraphs: string[], image: string;
</script>

<div class="card">
	<div>
		<div class="card-title">{title}</div>
		{#if excerpt}
			<div class="card-excerpt">
				{#each excerpt.split('  ') as p}
					<p>{p}</p>
				{/each}
			</div>
		{/if}
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
		margin-bottom: 32px;
		padding: 5%;
		font-family: $sans;
		display: flex;
		flex-direction: row;
		max-width: 100%;
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

	.card-excerpt {
		text-align: center;
		font-size: 1.25rem;
		color: $gold;
		margin-top: 32px;
		padding: 0 15% 0 15%;
	}

	p {
		margin: 0;
	}
</style>
