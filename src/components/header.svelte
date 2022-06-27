<!--
	Page switcher at the top of the page.

	Created by Haowen Liu in 2022.
 -->
<script lang="ts">
	import Container from '../components/container.svelte';

	import Logo from '../images/vision-venture.svg';
	import LogoWhite from '../images/vision-venture-white.svg';
	import Hamburger from '../images/hamburger.svg';

	export let page: string;

	let show = false;
	let hide = true;
</script>

<div class="absolute top-[60px] left-0 right-0 z-content">
	<Container>
		<div class="relative mr-1 flex h-22 flex-row items-center">
			<a href="/">
				<img
					src={Logo}
					alt="Vision Venture logo"
					class="mx-3 h-16 w-16"
					class:hidden={page !== 'about'}
				/>
				<img
					src={LogoWhite}
					alt="Vision Venture logo"
					class="mx-3 h-16 w-16"
					class:hidden={page === 'about'}
				/>
			</a>
			<div class="links-container" class:links-show={show}>
				<img
					src={Hamburger}
					alt="Hamburger menu"
					id="hamburger"
					on:click={() => {
						show = !show;
						if (hide) {
							hide = false;
						} else {
							setTimeout(() => {
								hide = true;
							}, 600);
						}
					}}
				/>
				<div class="links-inner" class:links-hide={hide}>
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
	.link {
		@apply ml-6 py-2 text-xl text-white;
	}

	.link-black {
		@apply text-black;
	}

	.links-container {
		@apply absolute right-0 top-0 flex h-screen transition-transform;
		transform: translateX(calc(100% - 2.5rem));
	}

	.links-inner {
		@apply flex flex-col bg-black pt-6 pr-6;
	}

	.links-show {
		@apply flex;
		transform: translateX(2.25rem);
	}

	.links-hide {
		@apply opacity-0;
	}

	.link-active {
		@apply border-0 border-b-3 border-solid border-b-white;
	}

	.link-active.link-black {
		@apply border-0 border-b-3 border-solid border-b-black;
	}

	#hamburger {
		@apply mr-9 mt-8 h-6 cursor-pointer;
	}

	@media (min-width: 768px) {
		#hamburger {
			display: none;
		}

		.links-container {
			position: absolute;
			transform: unset;
			display: block;
			height: unset;
			top: unset;
			transition: unset;
		}

		.links-inner {
			@apply flex-row bg-transparent;
			padding: unset;
		}

		.links-hide {
			opacity: unset;
		}
	}
</style>
