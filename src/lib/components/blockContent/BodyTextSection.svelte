<script>
  import { PortableText } from '@portabletext/svelte';
  import Caption from '$lib/components/blockContent/Caption.svelte'
  import CaptionSubheading from '$lib/components/blockContent/CaptionSubheading.svelte'
  let { portableText } = $props();
</script>

<section class="content-section body-text-section grid subgrid">
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
  {#if portableText.value.image}
  <div class="media-container">
    <enhanced:img src={portableText.value.image} alt={portableText.value.imageAlt} />
  </div>
  {/if}
</section>

{#if portableText.value.image}
  <style>
    @media only screen and (min-width: 800px) {
      .caption-container { grid-column: col-start 1 / span 3; order: 1; }
      .body-container {    grid-column: col-start 4 / span 6; order: 2; }
      .media-container {   grid-column: col-start 10 / span 3; order: 3; }
    }

    @media only screen and (min-width: 1200px) {
      .caption-container { grid-column: col-start 1 / span 2; order: 1; }
      .body-container {    grid-column: col-start 3 / span 6; order: 2; }
      .media-container {   grid-column: col-start 10 / span 3; order: 3; }
    }
  </style>
{:else}
  <style>
    @media only screen and (min-width: 800px) {
      .caption-container { grid-column: col-start 1 / span 3; order: 1; }
      .body-container {    grid-column: col-start 4 / span 9; order: 2; }
    }

    @media only screen and (min-width: 1200px) {
      .caption-container { grid-column: col-start 1 / span 2; order: 1; }
      .body-container {    grid-column: col-start 3 / span 10; order: 2; }
    }
  </style>
{/if}