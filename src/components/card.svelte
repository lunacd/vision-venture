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
		font-size: 2rem;
	}

	.card-image {
		margin-left: auto;
	}

	.card-excerpt {
		text-align: center;
		font-size: 1.125rem;
		color: $gold;
		margin-top: 16px;
	}

	.card-text {
		margin-top: 16px;
		font-size: 1.125rem;
	}

	p {
		margin: 0;
	}

	@media (min-width: 768px) {
		.card-title {
			font-size: 2.5rem;
		}

		.card-excerpt {
			font-size: 1.25rem;
			margin-top: 32px;
		}

		.card-text {
		margin-top: 32px;
		font-size: 1.25rem;
		}
	}
</style>
