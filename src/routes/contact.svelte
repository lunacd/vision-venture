<!-- 
    Contact us page.

    Created by Haowen Liu in 2022.
 -->
<script lang="ts">
	import Container from '../components/container.svelte';
	import TitleSection from '../components/title_section.svelte';
</script>

<svelte:head>
	<title>Contact Us | Viterbi Vision Venture</title>
</svelte:head>

<TitleSection
	name="contact"
	title="Contact Us"
	tagline="Get Involved."
	description={[
		'Interested in learning more about Vision Venture or participating in future seasons?  Email us!'
	]}
/>

<Container>
	<div class="email-container">
		<a class="email" href="mailto:VisionVenture@usc.edu"> VisionVenture@usc.edu </a>
	</div>
</Container>

<style lang="scss">
	.email-container {
		display: flex;
		justify-content: center;
	}

	.email {
		text-align: center;
		font-family: $sans;
		font-size: 2rem;
		text-decoration: none;
		color: $cardinal;
	}
</style>
