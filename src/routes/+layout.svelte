<!--
	This file defines the required USC banner that shows on the top of all pages

	Created by Haowen Liu in 2022.
 -->
<script lang="ts">
	import '../app.css';
	import Container from '../components/container.svelte';

	import Logo from '../images/usc-shield-name-white.png?webp&w=198';
	import Viterbi from '../images/viterbi.jpg?webp&w=171';

	export const prerender = true;
</script>

<div class="h-[60px] bg-black">
	<Container>
		<a
			rel="external"
			href="https://viterbi.usc.edu/"
			referrerpolicy="no-referrer"
			class="float-left h-[60px] w-[171px]"
		>
			<img src={Viterbi} alt="USC Viterbi Logo" />
		</a>
		<a
			rel="external"
			href="https://www.usc.edu/"
			referrerpolicy="no-referrer"
			class="float-right h-[60px] w-[198px] p-[11px]"
		>
			<img src={Logo} alt="USC Logo" />
		</a>
	</Container>
</div>

<div class="relative w-screen overflow-x-hidden">
	<slot />
</div>
