<script>
  import { PortableText } from '@portabletext/svelte';
  let { value } = $props();
</script>

<div class="body-container">
  
  <PortableText 
    value={value}
  />
    
</div>



<style>
  .body-container {
    padding-top: 0.75rem;
  }

  :global(.body-container > p:not(:first-child)) {
    text-indent: 1.5em;
  }

  @media only screen and (min-width: 800px) {
    .body-container {
      grid-column: span 9;
      order: 1;
    }
  }

  @media only screen and (min-width: 1200px) {
    .body-container {
      grid-column: span 10;
    }
  }
</style>