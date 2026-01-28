<script>
  let { data } = $props();
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
  import ProjectsCollection from "$lib/components/ProjectsCollection.svelte";
</script>

<svelte:head>
  <title>Sam Anderson &ndash; Director, producer &amp; editor</title>
</svelte:head>

<Header collapsedByDefault={true} />

<main>

  <section class="hero site-padding">
    <div class="text-container grid">
      <h1>Sam&nbsp;Anderson<br/></h1>
      <h2>{data.siteSettings[0].siteSubheading}</h2>
    </div>
    <div class="media-container">
      <video src={data.siteSettings[0].homepageAutoplayReel.url} muted autoplay loop playsinline></video>
    </div>
  </section>

  <ProjectsCollection projects={data.projects} />

</main>

<Footer />

<style>
  .hero {
    height: calc(100vh - var(--nav-height-collapsed));
    margin-top: var(--nav-height-collapsed);
    overflow-y: hidden;
    padding-top: 1rem;
    padding-bottom: var(--site-xmargin);
    margin-bottom: 4rem;
    display: flex;
    flex-direction: column;
  }

  .text-container {
    height: 7rem;
    flex-shrink: 0;
    row-gap: 0;
    grid-auto-rows: min-content;

  }

  @media only screen and (min-width: 800px) {
    .text-container > * {
      grid-column: col-start / span 6;
    }
  }

  h2 {
    font-size: var(--typesize-heading-large);
    line-height: var(--leading-heading-large);
  }

  .media-container {
    height: calc(100vh - 7.5rem - var(--nav-height-collapsed));
    flex-grow: 0;
    min-height: 0;
  }

  .media-container video {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: bottom;
  }

</style>