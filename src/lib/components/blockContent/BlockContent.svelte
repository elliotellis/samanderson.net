<script>
  import VideoWithCaption from '$lib/components/blockContent/VideoWithCaption.svelte'
  import BodyTextSection from '$lib/components/blockContent/BodyTextSection.svelte'
  import BodyTextWithPortraitMedia from '$lib/components/blockContent/BodyTextWithPortraitMedia.svelte'
  import { PortableText } from '@portabletext/svelte';
  let { value } = $props();
</script>

<main class="block-content grid site-padding">
  <PortableText 
    value={value}
    
    components={{
      types: {
        videoWithCaption: VideoWithCaption,
        bodyText: BodyTextSection,
        bodyTextWithPortraitMedia: BodyTextWithPortraitMedia
      }
    }}
  />
</main>

<style>


  :global {

    .body-container {
      padding-top: 0.75rem;
    }

    .body-container > p:not(:first-child) {
      text-indent: 1lh;
    }


    .caption-container {
      padding-top: 0.6rem;
    }

    .caption-container p {
      font-size: var(--typesize-caption);
      line-height: var(--leading-caption);
    }

    h5:not(:first-child) {
      margin-top: 0.6rem;
    }
  }
</style>