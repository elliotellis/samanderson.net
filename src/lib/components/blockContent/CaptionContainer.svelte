<script>
  import { PortableText } from '@portabletext/svelte';
  import Caption from '$lib/components/blockContent/Caption.svelte';
  import CaptionSubheading from '$lib/components/blockContent/CaptionSubheading.svelte';
  let { value } = $props();
</script>

<div class="caption-container">
  
  <PortableText 
    value={value}
    components={{
      block: {
        caption: Caption,
        captionSubheading: CaptionSubheading
      }
    }}
  />
    
</div>


<style>
  .caption-container {
    padding-top: 0.6rem;
  }

  :global(.caption-container p) {
    font-size: var(--typesize-caption);
    line-height: var(--leading-caption);
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