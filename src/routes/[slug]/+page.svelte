<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import BlockContent from '$lib/components/blockContent/BlockContent.svelte'
  let { data } = $props();
</script>

<svelte:head>
  <title>{data.page.title} &ndash; Sam Anderson</title>
</svelte:head>

<Header />

<article>

  <header class="page-title-area grid site-padding">
    {#if data.page.titleShown}
      <h1>{data.page.title}</h1>
    {/if}
    <h2>{data.page.description}</h2>
  </header>

  {#if data.page.body}
    <BlockContent value={data.page.body} />
  {/if}

</article>

<Footer siteCredit={data.page.slug.current === 'about'} />

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