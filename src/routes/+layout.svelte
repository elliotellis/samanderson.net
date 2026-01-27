<script>
	import favicon from '$lib/assets/favicon.svg';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

<!-- <div class="debug-grid-overlay base100"></div> -->

<style>

  .debug-grid-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    opacity: 0.75;
    z-index: 5;
    background-image: linear-gradient(0deg, rgba(150,255,150,1) 0.0625rem, rgba(255,255,255,0) 0);
    background-size: 1rem 1rem;
  }

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

      --typesize-caption: 1rem;
      --leading-caption: 1.2rem;
      --typesize-body: 1.25rem;
      --leading-body: 1.5rem;
      --typesize-heading-small: 1.5rem;
      --leading-heading-small: 1.65rem;
      --typesize-heading-large: 2rem;
      --leading-heading-large: 2.25rem;

			--standard-top-border: 2px solid var(--colour-black);
			--site-xmargin-mob: 1rem;
			--site-xmargin-dtp: 2rem;
			--nav-height-mob: 4rem;
			--nav-height-dtp: 3rem;
			--nav-height-collapsed: 0.5rem;
			--standard-transition-duration: 0.6s;
    }

    body {
      --background-colour: var(--colour-white);
      --key-colour: var(--colour-blue);
      --text-colour: var(--colour-black);
      --text-colour-on-key: var(--colour-white);
      --text-colour-minor: var(--colour-grey);
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
			padding: var(--nav-height-collapsed) 0 0;
      display: grid;
      grid-template-rows: 1fr auto;

      /* for debugging only*/
      position: relative;
    }

    @media only screen and (min-height: 600px) {
      body {
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

		h1 {
			margin: 0;
			font-size: var(--typesize-heading-large);
    	line-height: var(--leading-heading-large);
			color: var(--key-colour);
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


</style>