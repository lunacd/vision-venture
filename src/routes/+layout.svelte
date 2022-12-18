<!--
	This file defines the required USC banner that shows on the top of all pages

	Created by Haowen Liu in 2022.
 -->
<script lang="ts">
	import '../app.css';
	import Container from '../components/container.svelte';

	import Logo from '../images/usc-shield-name-white.png?webp&w=198';
	import Shield from '../images/usc-shield-white.png?webp&w=62';
	import Viterbi from '../images/viterbi.jpg?webp&w=200';

	export const prerender = true;
</script>

<div class="h-[70px] bg-black">
	<Container paddingClass="px-0 md:px-4">
		<a
			rel="external"
			href="https://viterbi.usc.edu/"
			referrerpolicy="no-referrer"
			class="float-left h-[70px] w-[200px]"
		>
			<img src={Viterbi} alt="USC Viterbi Logo" />
		</a>
		<a
			rel="external"
			href="https://www.usc.edu/"
			referrerpolicy="no-referrer"
			class="float-right h-[70px] w-[62px] md:hidden"
		>
			<img src={Shield} alt="USC Logo" />
		</a>
		<a
			rel="external"
			href="https://www.usc.edu/"
			referrerpolicy="no-referrer"
			class="float-right hidden h-[70px] w-[198px] md:block"
		>
			<img src={Logo} alt="USC Logo" />
		</a>
	</Container>
</div>

<div class="relative w-screen overflow-x-hidden">
	<slot />
</div>
