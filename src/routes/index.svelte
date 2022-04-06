<script lang="ts">
    import Header from '../components/header.svelte';
    import Card from '../components/card.svelte';
    import Container from '../components/container.svelte';

    import Logo from '../images/vision-venture-full.svg';
    import Vanishing from '../images/vanishing.svg';
    import CardImage from '../images/sample.png?webp';
    import Roadmap from '../images/roadmap.svg';
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
    top: 25%;
    left: 20%;
    width: 38%;
    transform: translateX(-50%) translateY(-50%);
  }

  .image {
    width: 100%;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .title {
    margin-top: 32px;
    margin-bottom: 16px;
    color: $cardinal;
    font-family: $sans;
    font-size: 2.5rem;
  }

  .student-container {
    display: flex;
  }

  .student-section {
    width: 50%;
    padding: 16px;
    display: flex;
  }

  .button {
    background-color: $cardinal;
    padding: 16px;
    border-radius: 8px;
    color: $white;
    text-decoration: none;
    margin: 0 auto 0 auto;
  }
</style>

<Header page="about"/>
<Container color="cardinal">
    <div id="landing-display">
        <img src={Vanishing} alt="Vanishing point illustration">
        <div class="heading-container">
            <img src={Logo} alt="Vision Venture" class="image"/>
        </div>
    </div>
</Container>

<Container>
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
</Container>

<Container color="gold">
    <img src={Roadmap} alt="Vision Venture roadmap" class="image" id="roadmap"/>
</Container>

<Container>
    <div class="title">Hear from our Students!</div>
    <div class="student-container">
        <div class="student-section">
            <a class="button" href="/roadmap">Check out Vision Roadmap</a>
        </div>
        <div class="student-section">
            <a class="button" href="/voices">More Student Voices</a>
        </div>
    </div>
    <div class="title">Meet the Team!</div>
</Container>


