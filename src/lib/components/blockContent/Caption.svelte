<script>
  import { PortableText } from '@portabletext/svelte';
  let { portableText } = $props();
</script>

<p class="caption">
  <PortableText value={portableText.value}/>
</p>