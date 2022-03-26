<script lang="ts">
    import Header from '../components/header.svelte';
    import Logo from '../images/vision-venture-full.png?webp'
    import Vanishing from '../images/vanishing.svg';
</script>

<style lang="scss">
  #landing-display {
    position: absolute;
    top: 60px;
    left: 0;
    z-index: $z-background;
    width: 100%;
  }

  #landing-display img {
    width: 100%;
  }

  .heading-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 30%;
    right: 25%;
    width: 35%;
    transform: translateX(50%) translateY(-50%);
  }

  .heading-container img {
    width: 100%;
  }

  .heading {
    color: $white;
    position: relative;
    z-index: $z-content;
    font-family: $serif;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .small-heading {
    font-weight: 300;
    font-size: 2rem;
  }

  .large-heading {
    font-size: 6rem;
    line-height: 1.3;
  }
</style>

<Header page="about"/>
<div id="landing-display">
    <img src={Vanishing} alt="Vanishing point illustration">
    <div class="heading-container">
        <img src={Logo} alt="Vision Venture"/>
    </div>
</div>
