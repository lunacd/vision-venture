<!-- 
	The title section on top of each page.

	Created by Haowen Liu in 2022.
 -->
<script lang="ts">
	import Header from '../components/header.svelte';
	import SmallCard from '../components/small_card.svelte';
	import Container from '../components/container.svelte';

	export let name: string, title: string, tagline: string, description: string[];
</script>

<Header page={name} />
<div id="padding-top" />
<Container>
	<div class="title">{title}</div>
	<SmallCard title={tagline} paragraphs={description} />
</Container>
<div id="padding-bottom" />

<style lang="scss">
	#padding-top {
		// 88px to skip absolutely positioned header, and 16px actual margin
		margin-top: calc(88px + 16px);
	}

	#padding-bottom {
		margin-top: 48px;
	}

	.title {
		font-family: $sans;
		font-size: 3.5rem;
		text-align: center;
	}
</style>
