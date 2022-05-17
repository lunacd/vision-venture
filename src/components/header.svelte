<script lang="ts">
	import Container from '../components/container.svelte';

	import Logo from '../images/vision-venture.png?webp';

	export let page: string;
</script>

<div id="header">
	<Container>
		<div class="header-container">
			<a href="/">
				<img src={Logo} alt="Vision Venture logo" class:hide={page === 'about'} id="vv-logo" />
			</a>
			<a
				href="/"
				class="link link-first"
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
	</Container>
</div>

<style lang="scss">
	#header {
		position: absolute;
		top: 60px;
		left: 0;
		right: 0;
		z-index: $z-content;
	}

	.header-container {
		display: flex;
		align-items: center;
		flex-direction: column;
		height: 88px;
		margin-right: 4px;
	}

	.link {
		color: $white;
		text-decoration: none;
		font-family: $sans;
		font-size: 1.2rem;
		margin-left: 24px;
		padding-bottom: 8px;
		padding-top: 8px;
	}

	.link-black {
		color: $black;
	}

	.link-first {
		margin-left: auto;
	}

	.link-active {
		border-bottom: 3px solid $white;
		margin-top: 3px;
	}

	.link-active.link-black {
		border-bottom: 3px solid $black;
	}

	#vv-logo {
		height: 64px;
		width: 64px;
		margin: 12px 0 12px 0;
	}

	.hide {
		display: none;
	}

	@media (min-width: 768px) {
		.header-container {
			flex-direction: row;
		}
	}
</style>
