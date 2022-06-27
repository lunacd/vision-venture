<!-- This file defines the required USC banner that shows on the top of all pages -->
<script lang="ts">
	import '../app.css';
	import Logo from '../images/usc-shield-name-white.png?webp';
</script>

<div class="h-[60px] bg-black">
	<a
		rel="external"
		href="https://www.usc.edu/"
		referrerpolicy="no-referrer"
		class="float-right h-[60px] w-[198px] p-[11px]"
	>
		<img src={Logo} alt="USC Logo" />
	</a>
</div>

<slot />
