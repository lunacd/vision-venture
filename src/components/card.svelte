<!-- 
	The info card displayed on top of each page.

	Created by Haowen Liu in 2022.
 -->
<script lang="ts">
	export let title: string, paragraphs: string[];
</script>

<div class="small-card">
	<div>
		<div class="card-title">{title}</div>
		{#each paragraphs as paragraph}
			<div class="card-text">{paragraph}</div>
		{/each}
	</div>
</div>

<style lang="postcss">
	.small-card {
		@apply my-6 mx-4 rounded-xl p-4 md:mx-1/10 md:p-8 xl:p-12;
		box-shadow: 0 10px 50px 0 #503c2d40;
	}

	.card-title {
		@apply text-xl font-bold text-cardinal md:text-2xl xl:text-3xl;
	}

	.card-text {
		@apply mt-3 font-serif text-lg leading-tight md:mt-4 md:text-xl;
	}
</style>
