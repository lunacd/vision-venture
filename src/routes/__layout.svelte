<!--A __layout.svelte file defines a common layout for all routes.
    The <slot/> tag defines where the route content should be placed.
    Refer to https://svelte.dev/docs#template-syntax-slot
-->

<!-- This file defines the required USC banner that shows on the top of all pages -->

<style lang="scss">
  #usc-banner {
    height: 60px;
    background-color: $black;
  }

  #usc-banner a {
    float: right;
    height: 38px;
    width: 176px;
    padding: 11px;
  }
</style>

<script>
    import Logo from '../images/usc-shield-name-white.png?webp';
</script>

<div id="usc-banner">
    <a href="https://www.usc.edu/" referrerpolicy="no-referrer">
        <img src={Logo} alt="USC Logo"/>
    </a>
</div>

<slot/>