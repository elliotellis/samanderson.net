<script>
	import Header from '$lib/components/Header.svelte';
  import ProjectsCollection from "$lib/components/ProjectsCollection.svelte";
</script>

<svelte:head>
  <title>Sam Anderson – Director, producer &amp; editor</title>
</svelte:head>

<Header collapsedByDefault={true} />

<div class="debug-measure" style="width: 2rem; height: 1.25rem; top: 0.5rem;"></div>

<main>

  <section class="hero">
    <div class="text-container">
      <h1>Sam&nbsp;Anderson<br/></h1>
      <h2>Director, producer &amp; editor</h2>
    </div>
    <div class="media-container">
      <img src="https://placehold.co/160x90" alt="123">
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

</style>