<!-- 
	The small info card displayed on top of each page.

	Created by Haowen Liu in 2022.
 -->
<script lang="ts">
	export let header: string = undefined,
		title: string,
		paragraphs: string[];
</script>

<div class="small-card">
	<div>
		{#if header !== undefined}
			<div class="card-header">{header}</div>
		{/if}
		<div class="card-title">{title}</div>
		{#each paragraphs as paragraph}
			<div class="card-text">{paragraph}</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.small-card {
		border-radius: 12px;
		margin: 24px 10% 24px 10%;
		padding: 4%;
		font-family: $sans;
		display: flex;
		flex-direction: row;
		box-shadow: 0 10px 50px 0 #503c2d40;
	}

	.card-header {
		font-size: 1.25rem;
	}

	.card-title {
		font-size: 2rem;
		color: $cardinal;
	}

	.card-text {
		margin-top: 16px;
		font-size: 1.25rem;
		line-height: 1.25;
	}
</style>
