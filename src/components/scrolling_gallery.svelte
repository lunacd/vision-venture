<script lang="ts">
    import {spring} from 'svelte/motion';

    import ForwardCaret from '../images/forward-caret.svg';
    import {Episode} from '../utils/episode';

    const increment = 480;

    let innerContainer: HTMLDivElement;
    let outerContainer: HTMLDivElement;
    let translate = spring(0);
    let translateFinal = 0;
    let threshold = 0;

    $: if (innerContainer && outerContainer) threshold = innerContainer.scrollWidth - outerContainer.clientWidth;

    export let episodes: Episode[],
        play: (string) => void;
</script>

<style lang="scss">
  .outer {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .inner {
    display: flex;
    flex-direction: row;
    height: 100%;
    margin: 0 16px 0 16px;
    width: fit-content;
  }

  .caret {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 50px;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.6) 20%, rgba(255, 255, 255, 1) 100%);

    img {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      cursor: pointer;
    }
  }

  .backward-caret {
    left: 0;
    transform: scaleX(-1);
  }

  .image {
    border-radius: 16px;
    box-shadow: 0 .5rem 1rem rgba($black, .15);
    margin: 12px 24px 36px 24px;
    height: calc(100% - 48px);
    cursor: pointer;
  }

  .hide {
    display: none;
  }
</style>

<div class="outer" bind:this={outerContainer}>
    <div class="inner" style={`transform: translateX(-${$translate}px)`} bind:this={innerContainer}>
        {#each episodes as episode}
            <img src={episode.image} alt={episode.description} class="image"
                 on:click={() => {play(episode.youtubeLink)}}/>
        {/each}
    </div>
    <div class="caret backward-caret">
        <img src={ForwardCaret} alt="Forward caret"
             on:click={() => {
                 translateFinal = Math.max(translateFinal - increment, 0);
                 translate.set(translateFinal);
             }}
             class:hide={translateFinal === 0}/>
    </div>
    <div class="caret">
        <img src={ForwardCaret} alt="Forward caret"
             on:click={() => {
                 translateFinal = Math.min(translateFinal + increment, threshold);
                 translate.set(translateFinal);
             }}
             class:hide={translateFinal >= threshold}/>
    </div>
</div>
