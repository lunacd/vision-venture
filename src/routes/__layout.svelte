<!-- This file defines the required USC banner that shows on the top of all pages -->
<script lang="ts">
	import Logo from '../images/usc-shield-name-white.png';
</script>

<div id="usc-banner">
	<a rel="external" href="https://www.usc.edu/" referrerpolicy="no-referrer">
		<img src={Logo} alt="USC Logo" />
	</a>
</div>

<slot />

<style lang="scss">
	#usc-banner {
		height: 60px;
		background-color: $black;
	}

	#usc-banner a {
		float: right;
		height: 60px;
		width: 198px;
		padding: 11px;
	}
</style>
