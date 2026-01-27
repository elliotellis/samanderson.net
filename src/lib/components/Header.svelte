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
    margin: 0 var(--m-site-padding--mob);
    width: calc(100% - 2*var(--m-site-padding--mob));
    z-index: 2;
  }

  nav {
    height: var(--m-nav-height--mob);
    margin-left: -1rem;
    padding-right: 0;
    width: calc(100% + 1rem);
    background-color: var(--c-k);
    color: var(--c-b);
    transition: height var(--m-transition-duration) ease-in-out;
    overflow: hidden;
    gap: 0;
  }

  nav.collapsed {
    height: var(--m-nav-height-collapsed);
  }

  a {
    text-decoration: none;
    color: var(--c-b);
    transition: color var(--m-transition-duration) ease-in-out;
  }

  a:hover { color: var(--c-bo);  }

  ul {
    list-style-type: none;
    display: flex;
    align-items: end;
  }

  li {
    margin-right: 1rem;
  }

  .logo {
    padding-top: 0.5rem;
    font-weight: var(--t-w-bold);
  }

  .pages {
    align-items: start;
  }

  @media only screen and (min-width: 600px) {
    .site-header {
      margin: 0 var(--m-site-padding);
      width: calc(100% - 2*var(--m-site-padding))
    }

    nav {
      height: var(--m-nav-height);
      margin-left: -2rem;
      width: calc(100% + 2rem);
      grid-column: col-start / span 12;
      gap: var(--m-site-padding);
    }

    ul {
      height: 2.25rem;
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