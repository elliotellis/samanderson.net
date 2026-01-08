<script>
	import Header from '$lib/components/Header.svelte';
  import ProjectsCollection from "$lib/components/ProjectsCollection.svelte";
</script>

<svelte:head>
  <title>Sam Anderson – Director, producer &amp; editor</title>
</svelte:head>

<Header collapsedByDefault={true} />

<main>

  <section class="hero">
    <div class="text-container">
      <h1>Sam Anderson<br/></h1>
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
    padding-top: 0.75rem;
    margin-bottom: 4rem;
  }

  .text-container {
    padding-bottom: 3rem;
  }

</style>