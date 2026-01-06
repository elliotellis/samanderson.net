<script>
  import { innerHeight, scrollY } from 'svelte/reactivity/window';
  let props = $props();
  let collapsedByDefault = props.collapsedByDefault;
  let isCollapsed = $state(false);
  if (collapsedByDefault) { isCollapsed = true; }
  function toggleHeader() { isCollapsed = !isCollapsed; }
  if (scrollY > document.querySelector("section.hero").offsetHeight) {
    toggleHeader()
  }
  // none of this works, i think it will have to be something
  // to do with <svelte:window> maybe idk im too tired
</script>

<header class="grid">
	<nav class={isCollapsed ? 'collapsed' : ''}>
    <ul class="logo">
      <li><a href="/">Sam Anderson</a></li>
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
    height: 2.5rem;
    grid-column: col-start / span 6;
    display: grid;
    grid-template-columns: subgrid;
    margin-left: -2rem;
    padding: .25rem 2rem;
    background-color: var(--c-k);
    color: var(--c-b);
    transition: height var(--m-transition-duration);
    overflow-y: hidden;
  }

  nav > * {
    transition: opacity var(--m-transition-duration);
  }

  nav.collapsed {
    height: 0.5rem;
  }

  nav.collapsed > * {
    opacity: 0;
  }

  a {
    text-decoration: none;
    color: var(--c-b);
    transition: color var(--m-transition-duration);
  }

  a:hover { color: var(--c-bo); }

  ul {
    list-style-type: none;
    display: flex;
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