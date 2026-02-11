<script>
  import { page } from '$app/state';
  let { data } = $props();
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
  import ProjectsCollection from "$lib/components/ProjectsCollection.svelte";
</script>


<svelte:head>
  <!-- Page title -->
  <title>Sam Anderson &ndash; {data.siteSettings[0].siteSubheading}</title>
  <meta property="og:title" content={data.siteSettings[0].siteSubheading + ' &ndash; Sam Anderson'}>
  <meta property="twitter:title" content={data.siteSettings[0].siteSubheading + ' &ndash; Sam Anderson'}>
  <!-- Page url -->
  <meta property="og:url" content={'https://samanderson.net' + page.url.pathname}>
  <meta name="twitter:url" content={'https://samanderson.net' + page.url.pathname}>
  <!-- Page image -->
  {#if data.siteSettings[0].siteSharingImage}
    <meta property="og:image" content={data.siteSettings[0].siteSharingImage}>
    <meta name="twitter:image" content={data.siteSettings[0].siteSharingImage}>
  {/if}
  <!-- Page description -->
  {#if data.siteSettings[0].siteDescription}
    <meta property="og:description" content={data.siteSettings[0].siteDescription}>
    <meta name="twitter:description" content={data.siteSettings[0].siteDescription}>
  {/if}
  <!-- Site title -->
  <meta property="og:site_name" content="Sam Anderson">
  <!-- Site homepage -->
  <meta property="og:see_also" content="https://samanderson.net">
  <!-- Twitter card type -->
  <meta name="twitter:card" content="summary">
</svelte:head>

<Header collapsedByDefault={true} />

<main>

  <section class="hero site-padding">
    <div class="text-container grid">
      <h1>Sam&nbsp;Anderson<br/></h1>
      <h2>{data.siteSettings[0].siteSubheading}</h2>
    </div>
    <div class="media-container">
      <video muted autoplay loop playsinline>
        <!-- 16:9 format -->
        <source 
          src={data.siteSettings[0].homepageAutoplayReel.url}
          type="video/mp4"
          media="(min-width: 600px) and (min-height: 800px)"
        >
        <!-- 1:1 format by default -->
        <source
          src={data.siteSettings[0].homepageAutoplayReelMobile.url}
          type="video/mp4"
        >
      </video>
    </div>
  </section>

  <ProjectsCollection projects={data.projects} />

</main>

<Footer />

<style>
  .hero {
    --hero-min-total-height: 30rem;
    height: calc(100vh - var(--nav-height-collapsed));
    min-height: calc(var(--hero-min-total-height) - var(--nav-height-collapsed));
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
      grid-column: col-start / span 9;
    }
  }

  @media only screen and (min-width: 1200px) {
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
    min-height: calc(var(--hero-min-total-height) - 7.5rem - var(--nav-height-collapsed));
    flex-grow: 0;
    min-height: 0;
    display: flex;
    align-items: end;
    justify-content: end;
  }

  .media-container video {
    width: 100%;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }

</style>