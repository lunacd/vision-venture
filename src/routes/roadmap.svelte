<script lang="ts">
    import Header from '../components/header.svelte';
    import RoadmapSection from '../components/roadmap_section.svelte';
    import SmallCard from '../components/small_card.svelte';
    import Container from '../components/container.svelte';
    import {Episode} from '../utils/episode';

    import GraduatingImage from '../images/graduating.svg';
    import WelcomeToWork from '../images/welcome-to-work.svg';
    import BeyondCubicle from '../images/beyond-cubicle.svg';
    import BiggerPicture from '../images/bigger-picture.svg';

    // Episode thumbnails
    // Season 1
    import S1E1 from '../images/thumbnails/s01e01.png?webp';

    let seasons = [
        // Season 1
        [
            // Section 1
            [new Episode('Trying out different things', S1E1, 'https://youtu.be/wrAO3b1J2PA')],
            // Section 2
            [],
            // Section 3
            [],
            // Section 4
            [],
        ],
    ];
    let currentSeason = seasons[seasons.length - 1];
</script>

<svelte:head>
    <title>Roadmap | Viterbi Vision Venture</title>
</svelte:head>

<style lang="scss">
  #padding {
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
<div id="padding"></div>
<Container>
    <div class="title">Vision Roadmap</div>
    <SmallCard title="Start your journey" shadow={true}
               paragraphs={["Browse our videos below! Short summary. Lorem ipsum dolor sit amet, consectetur adipiscing elit."]}/>
    <RoadmapSection image={GraduatingImage} title="You're graduating! ...Now what?" description="Graduating"
                    subtitle="Leaving the educational nest." episodes={currentSeason[0]} index={0}/>
    <RoadmapSection image={WelcomeToWork} title="Welcome to the working world!" description="Welcome to working world"
                    subtitle="-and adulthood." episodes={currentSeason[1]} index={1}/>
    <RoadmapSection image={BeyondCubicle} title="Working beyond the cubicle" description="Beyond the cubicle"
                    subtitle="There is more to work than just tasks and deadlines." episodes={currentSeason[2]}
                    index={2}/>
    <RoadmapSection image={BiggerPicture} title="The bigger picture" description="The bigger picture"
                    subtitle="Remembering that you have a life outside of work." episodes={currentSeason[3]} index={3}
                    last={true}/>
</Container>
