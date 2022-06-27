<!-- 
    Contact us page.

    Created by Haowen Liu in 2022.
 -->
<script lang="ts">
	import Container from '../components/container.svelte';
	import TitleSection from '../components/title_section.svelte';

	import At from '../images/at.svg';
	import ContactUs from '../images/contact-us.svg';
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
	<div class="relative mt-16 h-96">
		<div class="relative z-content ml-16 flex items-center space-x-8">
			<img src={At} alt="at sign" class="h-24 w-24" />
			<a class="text-3xl" href="mailto:VisionVenture@usc.edu"> VisionVenture@usc.edu </a>
		</div>
		<img
			src={ContactUs}
			alt="Contact us illustration"
			class="absolute right-0 bottom-0 z-background h-full"
		/>
	</div>
</Container>
