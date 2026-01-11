<script>
  let { collapsedByDefault = false } = $props();
  //let collapsedByDefault = props.collapsedByDefault;
  let scrollY = $state(0);
</script>

<svelte:window bind:scrollY={scrollY} />

<div class="debug"></div>

<header class="grid">
	<nav class:collapsed={scrollY < 250 && collapsedByDefault == true ? true : false}>
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
  header {
    position: fixed;
    top: 0;
    left: 0;
    padding: 0 2rem;
  }

  nav {
    height: var(--m-nav-height);
    grid-column: col-start / span 6;
    display: grid;
    grid-template-columns: subgrid;
    margin-left: -2rem;
    padding: 0 2rem;
    background-color: var(--c-k);
    color: var(--c-b);
    transition: height var(--m-transition-duration);
    overflow-y: hidden;
  }

  nav.collapsed {
    height: var(--m-nav-height-collapsed);
  }

  a {
    text-decoration: none;
    color: var(--c-b);
    transition: color var(--m-transition-duration) ease-in-out;
  }

  a:hover { color: var(--c-bo); }

  ul {
    height: var(--m-nav-height);
    list-style-type: none;
    display: flex;
    padding: .25rem 0;
  }

  li {
    align-self: flex-end;
    margin-right: 1rem;
  }

  .logo {
    grid-column: col-start / span 2;
    font-weight: var(--t-w-bold);
  }

  .pages {
    grid-column: col-start 3 / span 4;
  }
</style>