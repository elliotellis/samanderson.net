<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import VideoWithCaption from '$lib/components/blockContent/VideoWithCaption.svelte'
  import BodyTextSection from '$lib/components/blockContent/BodyTextSection.svelte'
  import BodyTextWithPortraitMedia from '$lib/components/blockContent/BodyTextWithPortraitMedia.svelte'
  import { PortableText } from '@portabletext/svelte';
  let { data } = $props();
</script>

<svelte:head>
  <title>{data.project.title} &ndash; Sam Anderson</title>
</svelte:head>

<Header />

<article>

  <header class="page-title-area grid site-padding">
    <h1>{data.project.title}</h1>
    <h2>{data.project.description}</h2>
  </header>

  <main class="project-main-content grid site-padding">
    <PortableText 
      value={data.project.body}
      
      components={{
        types: {
          videoWithCaption: VideoWithCaption,
          bodyText: BodyTextSection,
          bodyTextWithPortraitMedia: BodyTextWithPortraitMedia
        }
      }}
    />
  </main>

</article>

<Footer />

<style>
  .page-title-area {
    margin-top: 8rem;
    margin-bottom: 4rem;
    row-gap: 0;
  }

  @media only screen and (min-width: 1200px) {
    .page-title-area > * {
      grid-column: span 9;
    }
  }

  :global {

    .body-container {
      padding-top: 0.75rem;
    }

    .body-container > p:not(:first-child) {
      text-indent: 1.5em;
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