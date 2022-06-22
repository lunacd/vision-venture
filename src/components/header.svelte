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

<div id="header">
	<Container>
		<div class="header-container">
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
	#header {
		@apply z-content;
		position: absolute;
		top: 60px;
		left: 0;
		right: 0;
	}

	.logo {
		@apply h-[64px] w-[64px] ml-[12px] mr-[12px];
	}

	.header-container {
		position: relative;
		display: flex;
		align-items: center;
		flex-direction: row;
		height: 88px;
		margin-right: 4px;
	}

	.link {
		@apply text-white font-sans;
		text-decoration: none;
		font-size: 1.2rem;
		margin-left: 24px;
		padding-bottom: 8px;
		padding-top: 8px;
	}

	.link-black {
		@apply text-black;
	}

	.links-container {
		position: absolute;
		right: 0;
		top: 0;
		height: 100vh;
		display: flex;
		transform: translateX(calc(100% - 30px));
		transition: transform 0.6s;
	}

	.links-inner {
		@apply bg-black;
		display: flex;
		flex-direction: column;
		padding: 24px 24px 0 0;
	}

	.links-show {
		display: flex;
		transform: translateX(22px);
	}

	.links-hide {
		opacity: 0;
	}

	.link-active {
		@apply border-0 border-b-3 border-solid border-b-white;
	}

	.link-active.link-black {
		@apply border-0 border-b-3 border-solid border-b-black;
	}

	#hamburger {
		height: 18px;
		width: 30px;
		top: unset;
		margin-top: 35px;
		margin-right: 22px;
		cursor: pointer;
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
			flex-direction: row;
			background-color: transparent;
			padding: unset;
		}

		.links-hide {
			opacity: unset;
		}
	}
</style>
