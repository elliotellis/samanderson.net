<script>
  let { siteCredit } = $props();
</script>

<footer class="grid site-padding">
  {#if siteCredit}
    <div class="page-small-print">
      <p class="site-credit">
        Website by <a href="https://elliotellis.com" target="_blank">elliot ellis</a>
      </p>
    </div>
  {/if}
  <div class="footer-margin"></div>
</footer>

<style>
  footer {
		margin-top: 4rem;
  }

	.footer-margin {
		height: 1.25rem;
		background-color: var(--key-colour);
    margin-right: calc(0 - var(--site-xmargin));
	}

  .site-credit, .site-credit a {
    font-size: var(--typesize-caption);
    line-height: var(--leading-caption);
    color: var(--text-colour-minor);
  }
</style>