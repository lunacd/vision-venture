<script lang="ts">
    import Header from '../components/header.svelte';
    import Vanishing from '../images/vanishing.svg'
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
    top: 15%;
    right: 15%;
  }

  .heading {
    color: $white;
    position: relative;
    z-index: $z-content;
    font-family: $sans;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .small-heading {
    font-weight: 300;
    font-size: 2rem;
  }

  .large-heading {
    font-size: 4rem;
    line-height: 1.3;
  }
</style>

<Header page="about"/>
<div id="landing-display">
    <img src={Vanishing} alt="Vanishing point illustration">
    <div class="heading-container">
        <h3 class="heading small-heading">VITERBI</h3>
        <h1 class="heading large-heading">Vision<br/>Venture</h1>
    </div>
</div>

