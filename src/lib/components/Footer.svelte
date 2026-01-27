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
		background-color: var(--c-k);
    margin-right: calc(0 - var(--m-site-padding-mob));
	}

  @media only screen and (min-width: 600px) {
    .footer-margin {
      margin-right: calc(0 - var(--m-site-padding));
    }
  }

  .site-credit, .site-credit a {
    font-size: 0.8rem;
    color: var(--c-g);
  }
</style>