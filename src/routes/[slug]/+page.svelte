<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import VideoWithCaption from '$lib/components/blockContent/VideoWithCaption.svelte'
  import BodyTextSection from '$lib/components/blockContent/BodyTextSection.svelte'
  import { PortableText } from '@portabletext/svelte';
  import { page } from '$app/state';
  let { data } = $props();
  console.log(data);
</script>

<Header />

<article>

  <header class="page-title-area grid site-padding">
    {#if data.page.titleShown}
      <h1>{data.page.title}</h1>
    {/if}
    <h2>{data.page.description}</h2>
  </header>

  {#if data.page.body}
  <main class="page-main-content grid site-padding">
    <PortableText 
      value={data.page.body}
      
      components={{
        types: {
          videoWithCaption: VideoWithCaption,
          bodyText: BodyTextSection
        }
      }}
    />
  </main>
  {/if}

</article>

<Footer siteCredit={page.url.pathname === '/about'} />

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