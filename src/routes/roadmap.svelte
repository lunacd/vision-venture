<script lang="ts">
    import Header from '../components/header.svelte';
    import RoadmapSection from '../components/roadmap_section.svelte';
    import Card from '../components/small-card.svelte';

    import GraduatingImage from '../images/graduating.svg';
    import WelcomeToWork from '../images/welcome-to-work.svg';
    import BeyondCubicle from '../images/beyond-cubicle.svg';
    import BiggerPicture from '../images/bigger-picture.svg';
</script>

<svelte:head>
    <title>Roadmap | Viterbi Vision Venture</title>
</svelte:head>

<style lang="scss">
  .container {
    // 88px to skip absolutely positioned header, and 16px actual margin
    margin-top: calc(88px + 16px);
  }

  .title {
    font-family: $sans;
    font-size: 3.5rem;
    text-align: center;
  }
</style>

<Header page="roadmap"/>
<div class="container">
    <div class="title">Vision Roadmap</div>
    <Card title="Start your journey" shadow={true}
          paragraphs={["Browse our videos below! Short summary. Lorem ipsum dolor sit amet, consectetur adipiscing elit."]}/>
    <RoadmapSection image={GraduatingImage} title="You're graduating! ...Now what?" description="Graduating"
                    subtitle="Leaving the educational nest." index={0}/>
    <RoadmapSection image={WelcomeToWork} title="Welcome to the working world!" description="Welcome to working world"
                    subtitle="-and adulthood." index={1}/>
    <RoadmapSection image={BeyondCubicle} title="Working beyond the cubicle" description="Beyond the cubicle"
                    subtitle="There is more to work than just tasks and deadlines." index={2}/>
    <RoadmapSection image={BiggerPicture} title="The bigger picture" description="The bigger picture"
                    subtitle="How not to forget that you have a life outside of work." index={3} last={true}/>
</div>
