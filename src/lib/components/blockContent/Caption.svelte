<script>
  import { PortableText } from '@portabletext/svelte';
  let { portableText } = $props();
</script>

<p class="caption">
  <PortableText value={portableText.value}/>
</p>

<style>
  .caption {
    font-size: 0.8rem;
  }
</style>