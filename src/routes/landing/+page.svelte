<script>
  import { page } from '$app/state';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
  import ProjectsCollection from "$lib/components/ProjectsCollection.svelte";
  let { data } = $props();
</script>

<svelte:head>
  <!-- Page title -->
  <title>Sam Anderson &ndash; {data.siteSettings[0].siteSubheading}</title>
  <meta property="og:title" content="Sam Anderson &ndash; {data.siteSettings[0].siteSubheading}">
  <meta property="twitter:title" content="Sam Anderson &ndash; {data.siteSettings[0].siteSubheading}">
  <!-- Page url -->
  <meta property="og:url" content={'https://samanderson.net' + page.url.pathname}>
  <meta name="twitter:url" content="{{pageUrl}}">
  <!-- Page image -->
  <meta property="og:image" content="">
  <meta name="twitter:image" content="">
  <!-- Page description -->
  <meta property="og:description" content="{data.siteSettings[0].description}">
  <meta name="twitter:description" content="{data.siteSettings[0].description}">
  <!-- Site title -->
  <meta property="og:site_name" content="Sam Anderson">
  <!-- Site homepage -->
  <meta property="og:see_also" content="https://samanderson.net">
  <!-- Twitter card type -->
  <meta name="twitter:card" content="summary">
</svelte:head>

<Header collapsedByDefault={true} />

<main style="height: 100vh; padding: 0.5rem 0 0;">

  <section class="hero site-padding">
    <div class="text-container grid" style="margin-bottom: 2rem;">
      <h1>Sam&nbsp;Anderson<br/></h1>
      <h2>{data.siteSettings[0].siteSubheading}</h2>
      <p class="caption">
        <span><a href="mailto:me@samanderson.net">me@samanderson.net</a></span>
        <span>Full site coming soon</span>
      </p>
    </div>
    <div class="media-container">
      <video src={data.siteSettings[0].homepageAutoplayReel.url} muted autoplay loop playsinline></video>
    </div>
  </section>

</main>


<style>

  .caption {
    color: var(--text-colour-minor);
    margin-top: 1rem;
  }

  .caption span {
    display: inline-block;
    margin-right: 0.5rem;
  }
  
  .hero {
    height: calc(100vh - var(--nav-height-collapsed));
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