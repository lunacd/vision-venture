<!--
	Page switcher at the top of the page.

	Created by Haowen Liu in 2022.
 -->
<script lang="ts">
	import Container from '../components/container.svelte';

	import HamburgerRed from '../images/hamburger-red.svg';
	import Hamburger from '../images/hamburger.svg';
	import LogoWhite from '../images/vision-venture-white.svg';
	import Logo from '../images/vision-venture.svg';

	export let page: string;

	let show = false;

	function toggleShow() {
		show = !show;
	}
</script>

<div class="absolute left-0 right-0 top-0 z-content">
	<Container>
		<div class="relative flex h-22 flex-row items-center">
			<a href="/">
				<img src={Logo} alt="Vision Venture logo" class="logo" class:hidden={page !== 'about'} />
				<img
					src={LogoWhite}
					alt="Vision Venture logo"
					class="logo"
					class:hidden={page === 'about'}
				/>
			</a>
			<div class="links-container" class:links-show={show}>
				<img
					src={page === 'about' ? Hamburger : HamburgerRed}
					alt="Hamburger menu"
					id="hamburger"
					on:click={toggleShow}
					on:keypress={toggleShow}
				/>
				<div class="links-inner">
					<a
						href="/"
						class="link"
						class:link-active={page === 'about'}
						class:link-black={page !== 'about'}
					>
						About the Project
					</a>
					<a
						href="/roadmap"
						class="link"
						class:link-active={page === 'roadmap'}
						class:link-black={page !== 'about'}
					>
						Roadmap
					</a>
					<a
						href="/voices"
						class="link"
						class:link-active={page === 'voices'}
						class:link-black={page !== 'about'}
					>
						Student Voices
					</a>
					<a
						href="/resources"
						class="link"
						class:link-active={page === 'resources'}
						class:link-black={page !== 'about'}
					>
						Resources
					</a>
					<a
						href="/contact"
						class="link"
						class:link-active={page === 'contact'}
						class:link-black={page !== 'about'}
					>
						Contact Us
					</a>
				</div>
			</div>
		</div>
	</Container>
</div>

<style lang="postcss">
	.logo {
		@apply h-12 md:h-16;
	}

	.link {
		@apply my-1 ml-6 py-1 text-lg text-white md:my-0 md:py-2 lg:text-xl;
	}

	.links-container {
		@apply absolute top-0 flex h-screen w-max transition-transform;
		left: calc(100% + 1.5rem);
		@apply md:left-unset md:right-0 md:top-unset md:h-unset md:transform-none;
	}

	.links-inner {
		@apply flex flex-col items-start bg-black pr-6 pt-6;
		@apply md:flex-row md:bg-transparent md:p-unset;
	}

	.links-show {
		@apply -translate-x-full md:translate-x-0;
	}

	.link-active {
		@apply border-0 border-b-3 border-solid border-b-white;
	}

	.link-black {
		@apply md:text-black;
	}

	.link-active.link-black {
		@apply border-0 border-b-3 border-solid md:border-b-black;
	}

	#hamburger {
		@apply absolute -left-6 mr-6 mt-8 h-5 -translate-x-full cursor-pointer md:hidden;
	}
</style>
