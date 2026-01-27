<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

<footer></footer>

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
			/* Colours */
      --c-b: rgb(255, 255, 255); /* Background colour */
			--c-bo: rgb(202, 198, 209);
      --c-f: rgb(35, 32, 46); /* Foreground colour */
			--c-g: rgb(104, 96, 116);
			--c-k: rgb(48, 45, 255);

			/* Typography */
      --t-f: 'Sam', 'Verdana', sans-serif; /* Typeface */
      --t-s: 20px; /* Type size */
      --t-l-body: 1.2; /* Body leading */
      --t-l-head: 1.1; /* Headings leading */
      --t-w-reg: 400; /* Regular weight value */
      --t-w-bold: 700; /* Bold weight value */

			/* Graphic styles */
			--g-b: 2px solid var(--c-f);

			/* Measurements */
			--m-site-padding: 2rem;
			--m-site-padding--mob: 1rem;
			--m-nav-height: 2.5rem;
			--m-nav-height--mob: 3.5rem;
			--m-nav-height-collapsed: 0.5rem;
			--m-transition-duration: 0.6s;

      font-size: var(--t-s);
    }

    body {
      font-family: var(--t-f);
      font-size: inherit;
      line-height: var(--t-l);
      font-style: normal;
      font-weight: var(--t-w-reg);
      text-rendering: optimizeLegibility;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      background-color: var(--c-b);
      color: var(--c-f);
      min-width: 320px;
      min-height: 100vh;
			margin: 0;
			padding: var(--m-nav-height-collapsed) 0 0;
      display: grid;
      grid-template-rows: auto 1fr auto;
    }

    i { font-style: italic; }
    b { font-weight: var(--t-w-bold); }

    a { color: var(--c-f); }
    a:hover { color: var(--c-f); }

		ul {
    	padding: 0;
    	margin: 0;
		}

    p {
      margin: 0;
    }

		h1 {
			margin: 0;
			font-size: 2rem;
    	line-height: var(--t-l-head);
			color: var(--c-k);
		}

		h2 {
			margin: 0;
			font-size: 1.5rem;
    	line-height: var(--t-l-head);
			font-weight: var(--t-w-reg);
		}

    h5 {
      margin: 0;
      font-size: 0.8rem;
			color: var(--c-k);
    }

		.site-padding {
			padding: 0 var(--m-site-padding--mob);
		}

		.grid {
			width: 100%;
			display: grid;
  		grid-template-columns: repeat(12, [col-start] 1fr);
  		gap: var(--m-site-padding--mob);
		}

		.grid > * {
			grid-column: col-start / span 12;
		}

    .subgrid {
      grid-template-columns: subgrid;
    }

    @media only screen and (min-width: 600px) {
      .site-padding {
        padding: 0 var(--m-site-padding);
      }
      .grid {
        gap: var(--m-site-padding);
      }
    }

		.content-section {
			border-top: var(--g-b);
      margin-bottom: 4rem;
		}

		.media-container img {
			width: 100%;
			display: block;
		}

		.debug {
			position: fixed;
			top: 0; right: 0;
			font-family: Arial;
			background-color: yellow;
			color: black;
			font-weight: 700;
			padding: 5px;
			opacity: 5%;
			max-width: 40%;
		}

		.debug:hover {
			opacity: 50%;
		}

		.debug::before {
			content: 'Debug information';
			font-weight: 400;
			font-size: 15px;
		}

		.debug-measure {
			position: fixed;
			top: 0; left: 0;
			background-color: orange;
		}

  } /* :global */

	footer {
		height: 1.25rem;
		margin-top: 4rem;
		background-color: var(--c-k);
    margin-left: var(--m-site-padding--mob);
	}

  @media only screen and (min-width: 600px) {
    footer {
      margin-left: var(--m-site-padding);
    }
  }

</style>