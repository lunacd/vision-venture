<!-- 
	Container to limit element width to a maximum and adds appropriate margins.

	Created by Haowen Liu in 2022.
 -->
<script lang="ts">
	export let paddingClass: string = 'px-8';
</script>

<div class="w-full">
	<div class={`inner ${paddingClass}`}>
		<slot />
	</div>
</div>

<style lang="postcss">
	.inner {
		@apply mx-auto w-full;
		max-width: 1320px;
	}
</style>
