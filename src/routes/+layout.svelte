<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

<style>
	:global {
		*, *::before, *::after {
      box-sizing: border-box;
    }

    :root {
			/* Colours */
      --c-b: rgb(255, 255, 255); /* Background colour */
			--c-bo: rgb(229, 225, 235);
      --c-f: rgb(35, 32, 46); /* Foreground colour */
			--c-g: rgb(104, 96, 116);
			--c-k: rgb(100, 58, 227);

			/* Typography */
      --t-f: 'Focal Maxi Trial', 'Neue Haas Unica Pro', sans-serif; /* Typeface */
      --t-s: 20px; /* Type size */
      --t-l-body: 1.2; /* Body leading */
      --t-l-head: 1.1; /* Headings leading */
      --t-w-reg: 400; /* Regular weight value */
      --t-w-bold: 700; /* Bold weight value */

			/* Graphic styles */
			--g-b: 2px solid var(--c-f);

			/* Measurements */
			--m-nav-height: 2.5rem;
			--m-transition-duration: 1s;

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
			padding: var(--m-nav-height) 0 0;
    }

    i { font-style: italic; }
    b { font-weight: var(--t-w-bold); }

    a { color: var(--c-f); }
    a:hover { color: var(--c-f); }

		ul {
    	padding: 0;
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
			font-size: 2rem;
    	line-height: var(--t-l-head);
			font-weight: var(--t-w-reg);
		}

		section {
			padding: 2rem;
		}

		.media-container img {
			width: 100%;
		}

		.grid {
			width: 100%;
			display: grid;
  		grid-template-columns: repeat(12, [col-start] 1fr);
  		gap: 2rem;
		}

		.grid > * {
			grid-column: col-start / span 12;
		}

		.debug {
			position: fixed;
			top: 0;right: 0;
			font-family: Arial;
			background-color: yellow;
			color: black;
			font-weight: 700;
			padding: 5px;
		}

		.debug::before {
			content: 'Debug information';
			font-weight: 400;
			font-size: 15px;
		}

  } /* :global */
</style>