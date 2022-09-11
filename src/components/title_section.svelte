<!-- 
	The title section on top of each page.

	Created by Haowen Liu in 2022.
 -->
<script lang="ts">
	import Container from '../components/container.svelte';
	import Header from '../components/header.svelte';
	import SmallCard from '../components/small_card.svelte';

	export let name: string, title: string, tagline: string, description: string[];
</script>

<Header page={name} />
<div class="mt-26" />
<Container>
	<div class="title">{title}</div>
	<SmallCard title={tagline} paragraphs={description} />
</Container>
<div id="padding-bottom" />

<style lang="postcss">
	#padding-bottom {
		margin-top: 48px;
	}

	.title {
		@apply font-sans;
		font-size: 3.5rem;
		text-align: center;
	}
</style>
