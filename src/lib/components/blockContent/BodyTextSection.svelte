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

<style>
  @media only screen and (min-width: 800px) {
    .body-container {
      grid-column: span 9;
      order: 1;
    }
  }

  @media only screen and (min-width: 1200px) {
    .body-container {
      grid-column: span 10;
    }
  }

  @media only screen and (min-width: 800px) {
    .caption-container {
      grid-column: span 3;
    }
  }

  @media only screen and (min-width: 1200px) {
    .caption-container {
      grid-column: span 2;
    }
  }
</style>