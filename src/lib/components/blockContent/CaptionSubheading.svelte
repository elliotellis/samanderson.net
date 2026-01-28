<script>
  import { PortableText } from '@portabletext/svelte';
  let { portableText } = $props();
</script>

<h5>
  <PortableText value={portableText.value}/>
</h5>