<script>
  import { PortableText } from '@portabletext/svelte';
  import Caption from '$lib/components/blockContent/Caption.svelte'
  import CaptionSubheading from '$lib/components/blockContent/CaptionSubheading.svelte'
  import VideoPlayer from '$lib/components/VideoPlayer.svelte'
  let { portableText } = $props();
</script>

<section class="content-section body-text-with-portrait-media grid subgrid">
  <div class="media-container">
    <VideoPlayer src={portableText.value.videoFile} thumbnail={portableText.value.thumbnail} alt={portableText.value.alt} />
  </div>
  <div class="text-container">
    <div class="body-container">
      <PortableText value={portableText.value.mainText} />
    </div>
    <div class="caption-container">
      <PortableText 
        value={portableText.value.caption}
        components={{
          block: {
            caption: Caption,
            captionSubheading: CaptionSubheading
          }
        }}
      />
    </div>
  </div>
</section>

<style>
  @media only screen and (min-width: 800px) {
    .text-container {
      grid-column: span 6;
    }
    .media-container {
      grid-column: span 6;
      order: 1;
    }
  }
</style>