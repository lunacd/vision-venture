<script lang='ts'>
	import Header from '../components/header.svelte';
	import SmallCard from '../components/small_card.svelte';
	import Container from '../components/container.svelte';
</script>

<svelte:head>
	<title>Student Voices | Viterbi Vision Venture</title>
</svelte:head>

<style lang='scss'>
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

<Header page='voices' />
<div id='padding'></div>
<Container>
	<div class='title'>Student Voices</div>
	<SmallCard title='Start your journey' shadow={true}
						 paragraphs={["Maybe a small explanation of how they’re picked? or how they all have different visions?" +
                " Maybe some background on how the seasons are seperated? Short summary. Lorem ipsum dolor sit amet," +
                " consectetur adipiscing elit."]} />
</Container>
