<!-- 
	The title section on top of each page.

	Created by Haowen Liu in 2022.
 -->
<script lang="ts">
	import Container from '../components/container.svelte';
	import Header from '../components/header.svelte';
	import Card from '../components/card.svelte';

	export let name: string, title: string, tagline: string, description: string[];
</script>

<Header page={name} />
<div class="mt-26" />
<Container>
	<div class="title">{title}</div>
	<Card title={tagline} paragraphs={description} />
</Container>
<div class="mb-24" />

<style lang="postcss">
	.title {
		@apply font-sans text-center text-3xl md:text-5xl;
	}
</style>
