<script>
  import { page } from '$app/state';
	import favicon from '$lib/assets/favicon.svg';
	import faviconPng1x from '$lib/assets/favicon.png';
	import faviconPng2x from '$lib/assets/favicon@2x.png';
	let { children } = $props();
  const showBaselineGrid = false;
</script>

<svelte:head>
  <meta property="og:locale" content="en_GB">
	<link rel="icon" type="image/png" href={faviconPng1x} />
	<link rel="icon" type="image/png" href={faviconPng2x} />
	<link rel="icon" href={favicon} />
  <link rel="canonical" href={'https://samanderson.net' + page.url.pathname} />
  <meta property="og:url" content={'https://samanderson.net' + page.url.pathname}>
  <meta name="twitter:url" content={'https://samanderson.net' + page.url.pathname}>
  <meta property="og:site_name" content="Sam Anderson">
  <meta property="og:see_also" content="https://samanderson.net">
  <meta name="twitter:card" content="summary">
  <script defer src="https://cloud.umami.is/script.js" data-website-id="c99b450e-38ce-4bff-a442-cf462f8a6a5e"></script>
</svelte:head>

{@render children()}

{#if showBaselineGrid}
  <style>
    body {
      background-image: 
        linear-gradient(to top, 
          rgba(0,255,255,1) 0, 
          transparent 1px 50%, 
          rgba(0,255,255,0.333) 50%, 
          transparent calc(50% + 1px) 100%
        );
      background-repeat: repeat-y;
      background-size: 100% 1rem;
    }
  </style>
{/if}

<style>

  @font-face {
		font-family: 'Sam';
		src: url('$lib/fonts/regular.woff2') format('woff2');
		font-weight: 400;
		font-style: normal;
	}

  @font-face {
		font-family: 'Sam';
		src: url('$lib/fonts/italic.woff2') format('woff2');
		font-weight: 400;
		font-style: italic;
	}

	@font-face {
		font-family: 'Sam';
		src: url('$lib/fonts/bold.woff2') format('woff2');
		font-weight: 700;
		font-style: normal;
	}

	:global {
		*, *::before, *::after {
      box-sizing: border-box;
    }

    :root {
      --colour-white: rgb(255, 255, 255);
			--colour-offwhite: rgb(202, 198, 209);
      --colour-black: rgb(35, 32, 46); 
			--colour-grey: rgb(104, 96, 116);
			--colour-blue: rgb(48, 45, 255);

      --typeface: 'Sam', 'Verdana', sans-serif;
      --fontweight-reg: 400; 
      --fontweight-bold: 700;
      --leading-base: 1.2em;

      --typesize-caption-dtp: 1rem;
      --leading-caption-dtp: 1.25rem;
      --typesize-body-dtp: 1.25rem;
      --leading-body-dtp: 1.5rem;
      --typesize-heading-small-dtp: 1.6rem;
      --leading-heading-small-dtp: 1.75rem;
      --typesize-heading-large-dtp: 2rem;
      --leading-heading-large-dtp: 2.25rem;

      --typesize-caption-mob: 0.83rem;
      --leading-caption-mob: 1rem;
      --typesize-body-mob: 1.05rem;
      --leading-body-mob: 1.25rem;
      --typesize-heading-small-mob: 1.35rem;
      --leading-heading-small-mob: 1.5rem;
      --typesize-heading-large-mob: 1.75rem;
      --leading-heading-large-mob: 2rem;

			--standard-top-border: 2px solid var(--colour-black);
			--site-xmargin-mob: 1rem;
			--site-xmargin-dtp: 2rem;
			--nav-height-mob: 4.75rem;
			--nav-height-dtp: 3rem;
			--nav-height-collapsed: 0.5rem;
			--standard-transition-duration: 0.5s;
    }

    body {
      --background-colour: var(--colour-white);
      --key-colour: var(--colour-blue);
      --text-colour: var(--colour-black);
      --text-colour-on-key: var(--colour-white);
      --text-colour-minor: var(--colour-grey);

      --typesize-caption: var(--typesize-caption-mob);
      --leading-caption: var(--leading-caption-mob);
      --typesize-body: var(--typesize-body-mob);
      --leading-body: var(--leading-body-mob);
      --typesize-heading-small: var(--typesize-heading-small-mob);
      --leading-heading-small: var(--leading-heading-small-mob);
      --typesize-heading-large: var(--typesize-heading-large-mob);
      --leading-heading-large: var(--leading-heading-large-mob);

      --site-xmargin: var(--site-xmargin-mob);
      --nav-height: var(--nav-height-mob);

      font-family: var(--typeface);
      line-height: var(--leading-base);
      text-rendering: optimizeLegibility;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      background: var(--background-colour);
      color: var(--text-colour);
      min-width: 320px;
      min-height: 100vh;
			margin: 0;
      display: grid;
      grid-template-rows: 1fr auto;
      position: relative;
    }

    @media only screen 
      and (min-width: 600px)
      and (min-height: 600px) {
      body {
        --typesize-caption: var(--typesize-caption-dtp);
        --leading-caption: var(--leading-caption-dtp);
        --typesize-body: var(--typesize-body-dtp);
        --leading-body: var(--leading-body-dtp);
        --typesize-heading-small: var(--typesize-heading-small-dtp);
        --leading-heading-small: var(--leading-heading-small-dtp);
        --typesize-heading-large: var(--typesize-heading-large-dtp);
        --leading-heading-large: var(--leading-heading-large-dtp);

        --site-xmargin: var(--site-xmargin-dtp);
        --nav-height: var(--nav-height-dtp);
      }
    }

    i { font-style: italic; }
    b { font-weight: var(--fontweight-bold); }

    a { color: var(--text-colour); }
    a:hover { color: var(--text-colour); }

    a[target="_blank"]:after {
      content: '\2197';
    }

    button {
      border: none;
      background: transparent;
      margin: 0;
      padding: 0;
      color: inherit;
      font: inherit;
      cursor: pointer;
    }

		h1 {
			margin: 0;
			color: var(--key-colour);
			font-size: var(--typesize-heading-large);
    	line-height: var(--leading-heading-large);
		}

		h2 {
			margin: 0;
			font-size: var(--typesize-heading-small);
    	line-height: var(--leading-heading-small);
			font-weight: var(--fontweight-reg);
		}

    h3 {
      margin: 0;
      font-size: var(--typesize-body);
      line-height: var(--leading-body);
    }

    h5 {
      margin: 0;
      font-size: var(--typesize-caption);
      line-height: var(--leading-caption);
			color: var(--key-colour);
    }

    p {
      margin: 0;
      font-size: var(--typesize-body);
      line-height: var(--leading-body);
    }

    .caption {
      font-size: var(--typesize-caption);
      line-height: var(--leading-caption);
    }

		ul {
    	padding: 0;
    	margin: 0;
		}

		.site-padding {
			padding: 0 var(--site-xmargin);
		}

		.grid {
			width: 100%;
			display: grid;
  		grid-template-columns: repeat(12, [col-start] 1fr);
  		gap: var(--site-xmargin);
		}

		.grid > * {
			grid-column: col-start / span 12;
		}

    .subgrid {
      grid-template-columns: subgrid;
    }

		.content-section {
			border-top: var(--standard-top-border);
      margin-bottom: 4rem;
		}

    .body-container > * {
      max-width: 48rem;
    }

		.media-container img {
			width: 100%;
			display: block;
		}

  } /* :global */


</style>