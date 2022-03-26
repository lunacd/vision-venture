<script lang="ts">
    import Header from '../components/header.svelte';
    import Logo from '../images/vision-venture-full.png?webp'
    import Vanishing from '../images/vanishing.svg';
    import CardImage from '../images/sample.png?webp'
</script>

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

  .large-heading {
    font-size: 6rem;
    line-height: 1.3;
  }

  .card {
    background-color: $cardinal;
    border-radius: 16px;
    color: $white;
    width: 100%;
    margin-top: 16px;
    padding: 5%;
    font-family: $sans;
    display: flex;
    flex-direction: row;

  }

  .card-header {
    font-size: 1.25rem;
  }

  .card-title {
    font-size: 2.5rem;
  }

  .card-image {
    margin-left: auto;
  }

  .card-text {
    margin-top: 32px;
    font-size: 1.25rem;
  }
</style>

<Header page="about"/>
<div id="landing-display">
    <img src={Vanishing} alt="Vanishing point illustration">
    <div class="heading-container">
        <img src={Logo} alt="Vision Venture"/>
    </div>
</div>
<div class="container">
    <div class="card">
        <div>
            <div class="card-header">WHO WE ARE</div>
            <div class="card-title">About the Project</div>
            <div class="card-text">Basic information about Vision Venture. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                velit ut convallis amet. Et purus purus eros, hendrerit mi dictum ut.
            </div>
            <div class="card-text">More information about Vision Venture. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                velit ut convallis amet. Et purus purus eros, hendrerit mi dictum ut.
            </div>
            <div class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae velit ut convallis amet. Et purus purus
                eros, hendrerit mi dictum ut.
            </div>
        </div>
        <img src={CardImage} alt="People studying" class="card-image"/>
    </div>
</div>
