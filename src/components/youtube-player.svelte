<script lang='ts'>
	export let link: string;
</script>

<style lang='scss'>
  .youtube-container {
    position: fixed;
    width: 100%;
    overflow-x: hidden;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: $z-overlay;
  }

  .player {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  .hide {
    display: none;
  }

  .close {
    color: $white;
    position: absolute;
    left: 90%;
    top: 10%;
    transform: translateX(-50%) translateY(-50%);
    cursor: pointer;
  }
</style>

<div class='youtube-container' class:hide={link === undefined} on:click={() => {link = undefined;}}>
	<!--suppress HtmlDeprecatedAttribute -->
	<iframe class='player' width='560' height='315' src={link} title='YouTube video player' frameborder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowfullscreen></iframe>
	<div class='close' on:click={() => {link = undefined;}}>CLOSE</div>
</div>
