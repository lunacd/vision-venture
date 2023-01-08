<!-- 
	Additional resource page.

	Created by Haowen Liu in 2022.
 -->
<script lang="ts">
	import ResourceGallery from '../../components/resource_gallery.svelte';
	import TitleSection from '../../components/title_section.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Resources | Viterbi Vision Venture</title>
</svelte:head>

<TitleSection
	name="resources"
	title="Resources"
	tagline="Discover more."
	description={[
		"Below are some of the books that enriched the student interviewers' perspectives on life after graduation and helped them formulate their questions for the alumni. Check them out!"
	]}
/>
<ResourceGallery resources={data.resources} />
<!-- <div class="link-container">
	<a href="https://viterbicareers.usc.edu/" class="link" target="_blank"
		>Check out the Viterbi Career Center!</a
	>
</div> 

<style lang="postcss">
	.link-container {
		display: flex;
		margin: 48px 0 48px 0;
		justify-content: center;
	}

	.link {
		padding: 12px 36px 12px 35px;
		box-shadow: 0px 10px 50px 0px #503c2d40;
		background-color: $cardinal;
		color: $white;
		text-transform: uppercase;
		font-size: 1.25rem;
		font-family: $sans;
		border-radius: 12px;
		text-decoration: none;
	}
</style> -->
