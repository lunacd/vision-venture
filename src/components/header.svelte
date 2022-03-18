<script lang="ts">
    import Logo from '../images/vision-venture.png?webp';

    export let page;
</script>

<style lang="scss">
  #header {
    flex-direction: row;
    background-color: $cardinal;
  }

  #vv-logo {
    height: 64px;
    width: 64px;
    padding: 12px;
  }

  .container {
    display: flex;
    align-items: center;
  }

  .link {
    color: $white;
    text-decoration: none;
    font-family: $serif;
    font-size: 1.2rem;
    margin-left: 12px;
    margin-right: 12px;
    padding-bottom: 8px;
    padding-top: 8px;
  }

  .link-first {
    margin-left: auto;
  }

  .link-active {
    border-bottom: 3px solid $white;
  }
</style>

<div id="header">
    <div class="container">
        <a href="/">
            <img src={Logo} alt="Vision Venture logo" id="vv-logo">
        </a>
        <a href="/about" class="link link-first" class:link-active={page === "about"}>About the Project</a>
        <a href="/roadmap" class="link" class:link-active={page === "roadmap"}>Roadmap</a>
        <a href="/voices" class="link" class:link-active={page === "voices"}>Student Voices</a>
        <a href="/resources" class="link" class:link-active={page === "resources"}>Resources</a>
        <a href="/contact" class="link" class:link-active={page === "contact"}>Contact Us</a>
    </div>
</div>
