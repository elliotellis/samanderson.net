<script>
  import Header from '$lib/components/Header.svelte';
  import VideoWithCaption from '$lib/components/blockContent/VideoWithCaption.svelte'
  import { PortableText } from '@portabletext/svelte';
  let { data } = $props();
  console.log(data);
</script>

<Header />

<article>

  <header class="page-title-area">
    <h1>{data.project.title}</h1>
    <h2>{data.project.description}</h2>
  </header>

  <main>
    <PortableText 
      value={data.project.body}
      
      components={{
        types: {
          videoWithCaption: VideoWithCaption
        }
      }}
    />
  </main>

</article>

