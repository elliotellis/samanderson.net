<script>
  import { PortableText } from '@portabletext/svelte';
  let { portableText } = $props();
</script>

<h5>
  <PortableText value={portableText.value}/>
</h5>

<style>
  h5:not(:first-child) {
    margin-top: 0.6rem;
  }
</style>