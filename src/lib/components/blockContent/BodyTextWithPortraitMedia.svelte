<script>
  import { PortableText } from '@portabletext/svelte';
  import Caption from '$lib/components/blockContent/Caption.svelte'
  import CaptionSubheading from '$lib/components/blockContent/CaptionSubheading.svelte'
  import VideoPlayer from '$lib/components/VideoPlayer.svelte'
  let { portableText } = $props();
</script>

<section class="content-section body-text-with-portrait-media grid subgrid">
  <div class="media-container">
    {#if portableText.value.videoFile}
      <VideoPlayer src={portableText.value.videoFile} poster={portableText.value.thumbnail} alt={portableText.value.thumbnailAlt} />
    {/if}
    {#if portableText.value.image}
      <enhanced:img src={portableText.value.image} alt={portableText.value.imageAlt} />
    {/if}
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
  .body-container {
    margin-bottom: 2rem;
  }
  
  @media only screen and (min-width: 800px) {
    .text-container {
      grid-column: span 6;
    }
    .media-container {
      grid-column: span 6;
      order: 1;
    }
  }
  
  @media only screen and (min-width: 1200px) {
    .text-container {
      grid-column: span 7;
    }
    .media-container {
      grid-column: span 5;
    }
  }
</style>

{#if portableText.value.image}
  <style>
    @media only screen and (max-width: 799px) {
      .media-container {
        order: 1;
      }
    }
  </style>
{/if}