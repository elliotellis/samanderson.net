<script>
  import { PortableText } from '@portabletext/svelte';
  import CaptionContainer from '$lib/components/blockContent/CaptionContainer.svelte'
  import VideoPlayer from '$lib/components/VideoPlayer.svelte'
  let { portableText } = $props();
</script>

<section class="content-section video-with-caption grid subgrid" class:portrait={portableText.value.portrait}>
  <CaptionContainer value={portableText.value.caption} />
  
  <div class="media-container">
    <VideoPlayer src={portableText.value.videoFile} thumbnail={portableText.value.thumbnail} alt={portableText.value.alt} />
  </div>
</section>

<!-- <pre>{JSON.stringify(portableText.value, null, 2)}</pre> -->

<style>
  

  @media only screen and (min-width: 800px) {
    
    .media-container {
      grid-column: span 9;
    }

    .video-with-caption.portrait {
      grid-column: span 9;
    }

    .video-with-caption.portrait .media-container {
      grid-column: span 6;
    }
  }

  @media only screen and (min-width: 1200px) {

    .media-container {
      grid-column: span 10;
    }

    .video-with-caption.portrait {
      grid-column: span 6;
    }

    .video-with-caption.portrait .media-container {
      grid-column: span 4;
    }
  }
</style>