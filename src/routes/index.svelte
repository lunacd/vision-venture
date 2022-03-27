<script lang="ts">
    import Header from '../components/header.svelte';
    import Card from '../components/card.svelte'

    import Logo from '../images/vision-venture-full.png?webp'
    import Vanishing from '../images/vanishing.svg';
    import CardImage from '../images/sample.png?webp'
</script>

<svelte:head>
    <title>Viterbi Vision Venture</title>
</svelte:head>

<style lang="scss">
  #landing-display {
    position: relative;
    top: 0;
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
</style>

<Header page="about"/>
<div id="landing-display">
    <img src={Vanishing} alt="Vanishing point illustration">
    <div class="heading-container">
        <div class="heading small-heading">Viterbi</div>
        <img src={Logo} alt="Vision Venture"/>
    </div>
</div>
<Card header="WHO WE ARE"
      title="About the Project"
      paragraphs={[
        "Basic information about Vision Venture. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae velit" +
        "ut convallis amet. Et purus purus eros, hendrerit mi dictum ut.",
        "More information about Vision Venture. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae velit" +
        "ut convallis amet. Et purus purus eros, hendrerit mi dictum ut.",
        "More information about Vision Venture. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae velit" +
        "ut convallis amet. Et purus purus eros, hendrerit mi dictum ut.",
      ]}
      image={CardImage}
/>
