<!-- 
	The title section on top of each page.

	Created by Haowen Liu in 2022.
 -->
<script lang="ts">
	import Card from '../components/card.svelte';
	import Container from '../components/container.svelte';
	import Header from '../components/header.svelte';

	export let name: string, title: string, tagline: string, description: string[];
</script>

<Header page={name} />
<div class="mt-26" />
<Container>
	<div class="text-center font-sans text-3xl md:text-5xl">{title}</div>
	<Card title={tagline} paragraphs={description} />
</Container>
<div class="pt-12 md:pt-24" />
