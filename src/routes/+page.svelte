<script>
  let { data } = $props();
	import Header from '$lib/components/Header.svelte';
  import ProjectsCollection from "$lib/components/ProjectsCollection.svelte";
  console.log(data);
</script>

<svelte:head>
  <title>Sam Anderson &ndash; Director, producer &amp; editor</title>
</svelte:head>

<Header collapsedByDefault={true} />

<div class="debug">
  {JSON.stringify(data, null, 2)}
</div>

<main>

  <section class="hero">
    <div class="text-container">
      <h1>Sam&nbsp;Anderson<br/></h1>
      <h2>{data.siteSettings[0].siteSubheading}</h2>
    </div>
    <div class="media-container">
      <video src={data.siteSettings[0].homepageAutoplayReel.url} muted autoplay loop></video>
    </div>
  </section>

  <ProjectsCollection />

</main>

<style>
  .hero {
    height: calc(100vh - var(--m-nav-height-collapsed));
    overflow-y: hidden;
    padding-top: 1rem;
    margin-bottom: 4rem;
    display: flex;
    flex-direction: column;
  }

  .text-container {
    height: 7rem;
    flex-shrink: 0;
  }

  .media-container {
    height: calc(100vh - 7.5rem - var(--m-nav-height-collapsed));
    flex-grow: 0;
    min-height: 0;
  }

  .media-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .media-container video {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: bottom;
  }

</style>