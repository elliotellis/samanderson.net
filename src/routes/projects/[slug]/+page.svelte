<script>
  import Header from '$lib/components/Header.svelte';
  import VideoWithCaption from '$lib/components/blockContent/VideoWithCaption.svelte'
  import BodyTextSection from '$lib/components/blockContent/BodyTextSection.svelte'
  import { PortableText } from '@portabletext/svelte';
  let { data } = $props();
</script>

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
          bodyText: BodyTextSection
        }
      }}
    />
  </main>

</article>

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
</style>