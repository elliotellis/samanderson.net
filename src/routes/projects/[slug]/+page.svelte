<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import BlockContent from '$lib/components/blockContent/BlockContent.svelte';
  let { data } = $props();
</script>

<svelte:head>
  <title>{data.project.title} &ndash; Sam Anderson</title>
  <meta property="og:title" content={data.project.title + ' &ndash; Sam Anderson'}>
  <meta property="twitter:title" content={data.project.title + ' &ndash; Sam Anderson'}>
  <!-- Page image -->
  {#if data.project.thumbnail.url}
    <meta property="og:image" content={data.project.thumbnail.url}>
    <meta name="twitter:image" content={data.project.thumbnail.url}>
  {/if}
  <!-- Page description -->
  {#if data.project.description}
    <meta property="og:description" content={data.project.description}>
    <meta name="twitter:description" content={data.project.description}>
  {/if}
</svelte:head>

<Header />

<article>

  <header class="page-title-area grid site-padding">
    <h1>{data.project.title}</h1>
    <h2>{data.project.description}</h2>
  </header>

  <BlockContent value={data.project.body} />

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
</style>