<script>
  import { PortableText } from '@portabletext/svelte';
  let { portableText } = $props();
</script>

<div class="caption">
  <PortableText value={portableText.value.caption}/>
</div>

<pre>
  {JSON.stringify(portableText.value, null, 2)}
</pre>