<script>
  import { PortableText } from '@portabletext/svelte';
  import CaptionContainer from '$lib/components/blockContent/CaptionContainer.svelte'
  import BodyTextContainer from '$lib/components/blockContent/BodyTextContainer.svelte'
  let { portableText } = $props();
</script>

<section class="content-section body-text-section grid subgrid">
  <BodyTextContainer value={portableText.value.mainText} />
  <CaptionContainer value={portableText.value.caption} />
  {#if portableText.value.image}
  <div class="media-container">
    <enhanced:img src={portableText.value.image} alt={portableText.value.imageAlt} />
  </div>
  {/if}
</section>