<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import BlockContent from '$lib/components/blockContent/BlockContent.svelte'
  let { data } = $props();
</script>

<svelte:head>
  <title>{data.page.title} &ndash; Sam Anderson</title>
  <meta property="og:title" content={data.page.title + ' &ndash; Sam Anderson'}>
  <meta property="twitter:title" content={data.page.title + ' &ndash; Sam Anderson'}>
  <!-- Page image --
  {#if data.page.thumbnail.url}
    <meta property="og:image" content={data.page.thumbnail.url}>
    <meta name="twitter:image" content={data.page.thumbnail.url}>
  {/if}
  <!-- Page description -->
  {#if data.page.description}
    <meta property="og:description" content={data.page.description}>
    <meta name="twitter:description" content={data.page.description}>
  {/if}
  <!-- Site title -->
  <meta property="og:site_name" content="Sam Anderson">
  <!-- Site homepage -->
  <meta property="og:see_also" content="https://samanderson.net">
  <!-- Twitter card type -->
  <meta name="twitter:card" content="summary">
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