<script>
  let { collapsedByDefault = false } = $props();
  //let collapsedByDefault = props.collapsedByDefault;
  let scrollY = $state(0);
</script>

<svelte:window bind:scrollY={scrollY} />

<header class="site-header grid">
	<nav class="site-padding grid subgrid" class:collapsed={scrollY < 250 && collapsedByDefault == true ? true : false}>

      <ul class="logo">
        <li><a href="/">Sam&nbsp;Anderson</a></li>
      </ul>

      <ul class="pages">
        <li>
          <a href="/#projects">Projects</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
  </nav>
</header>

<style>
  .site-header {
    position: fixed;
    top: 0;
    left: 0;
    margin: 0 var(--site-xmargin);
    width: calc(100% - 2*var(--site-xmargin));
    z-index: 2;
    font-size: var(--typesize-body);
    line-height: var(--leading-body);
  }

  nav {
    width: calc(100% + var(--site-xmargin));
    height: var(--nav-height);
    margin-left: calc(-1 * var(--site-xmargin));
    background-color: var(--key-colour);
    color: var(--text-colour-on-key);
    transition: height var(--standard-transition-duration) ease-in-out;
    overflow: hidden;
    gap: 0;
  }

  nav.collapsed {
    height: var(--nav-height-collapsed);
  }

  a {
    text-decoration: none;
    color: var(--text-colour-on-key);
    transition: opacity var(--standard-transition-duration) ease-in-out;
  }

  a:hover { opacity: 0.75; }

  ul {
    list-style-type: none;
    display: flex;
    align-items: end;
    height: var(--nav-height-dtp);
    padding-bottom: 0.25rem;
  }

  li {
    margin-right: 1rem;
  }

  .logo {
    font-weight: var(--fontweight-bold);
  }

  .pages {
    align-items: start;
  }

  @media only screen and (min-width: 600px) {

    nav {
      grid-column: col-start / span 12;
      gap: var(--site-xmargin);
    }

    ul {
      height: var(--nav-height);
    }

    .logo { 
      grid-column: col-start / span 5; 
    }

    .pages { 
      grid-column: col-start 6 / span 7; 
      align-items: end;
    }
  }

  @media only screen and (min-width: 800px) {
    nav {
      grid-column: col-start / span 9;
    }

    .logo {
      grid-column: col-start / span 3;
    }

    .pages {
      grid-column: col-start 4 / span 6;
    }
  }

  @media only screen and (min-width: 1200px) {
    nav {
      grid-column: col-start / span 6;
    }

    .logo {
      grid-column: col-start / span 2;
    }

    .pages {
      grid-column: col-start 3 / span 4;
    }
  }
</style>