<script lang="ts">
    import Logo from '../images/vision-venture.png?webp'

    export let page: string;
</script>

<style lang="scss">
  #header {
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    z-index: $z-content;
  }

  .container {
    display: flex;
    align-items: center;
    flex-direction: row;
    height: 88px;
  }

  .link {
    color: $white;
    text-decoration: none;
    font-family: $sans;
    font-size: 1.2rem;
    margin-left: 12px;
    margin-right: 12px;
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
  }

  .link-active.link-black {
    border-bottom: 3px solid $black;
  }

  #vv-logo {
    height: 64px;
    width: 64px;
    padding: 12px;
  }

  .hide {
    display: none;
  }
</style>

<div id="header">
    <div class="container">
        <a href="/">
            <img src={Logo} alt="Vision Venture logo" class:hide={page === "about"} id="vv-logo"/>
        </a>
        <a href="/" class="link link-first" class:link-active={page === "about"} class:link-black={page !== "about"}>
            About the Project
        </a>
        <a href="/roadmap" class="link" class:link-active={page === "roadmap"} class:link-black={page !== "about"}>
            Roadmap
        </a>
        <a href="/voices" class="link" class:link-active={page === "voices"} class:link-black={page !== "about"}>
            Student Voices
        </a>
        <a href="/resources" class="link" class:link-active={page === "resources"} class:link-black={page !== "about"}>
            Resources
        </a>
        <a href="/contact" class="link" class:link-active={page === "contact"} class:link-black={page !== "about"}>
            Contact Us
        </a>
    </div>
</div>
