<!-- 
    Contact us page.

    Created by Haowen Liu in 2022.
 -->
<script lang="ts">
	import Container from '../../components/container.svelte';
	import TitleSection from '../../components/title_section.svelte';

	import At from '../../images/at.svg';
	import ContactUs from '../../images/contact-us.svg';
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
	<div class="relative h-96 md:mt-16">
		<div
			class="relative z-content flex items-center justify-center md:ml-16 md:justify-start md:space-x-8"
		>
			<img src={At} alt="at sign" class="hidden h-16 w-16 md:block lg:h-24 lg:w-24" />
			<a class="text-2xl lg:text-3xl" href="mailto:VisionVenture@usc.edu">
				VisionVenture@usc.edu
			</a>
		</div>
		<img
			src={ContactUs}
			alt="Contact us illustration"
			class="absolute right-0 bottom-0 z-background hidden h-full md:block"
		/>
	</div>
</Container>
