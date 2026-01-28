<script>
  let { projects } = $props();
</script>

<section class="projects-collection-container grid site-padding" id="projects">

  {#each projects as project}
    <a class="project-item" href={'/projects/' + project.slug.current}>
      <div class="text-container">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
      <div class="media-container">
        <enhanced:img src={project.thumbnail.url} alt={project.thumbnail.alt} />
      </div>
    </a>
  {/each}

</section>

<style>
  .projects-collection-container {
    justify-items: stretch;
    row-gap: calc(4 * var(--site-xmargin));
  }

  .project-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-top: var(--standard-top-border);
    padding-top: 0.5rem;
    position: relative;
  }

  .project-item::before {
    content: '';
    display: block;
    position: absolute;
    top: -0.125rem; left: 0;
    width: 100%;
    height: 0;
    background-color: var(--key-colour);
    transition: height var(--standard-transition-duration) ease-in-out;
  }

  .project-item:hover::before {
    height: 0.25rem;
  }

  .media-container {
    position: relative;
  }

  .media-container::after {
    content: '';
    display: block;
    position: absolute;
    top: 0; left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--key-colour);
    opacity: 0;
    transition: opacity var(--standard-transition-duration) ease-in-out;
  }

  .project-item:hover .media-container::after {
    opacity: 0.25;
  }

  @media only screen and (min-width: 600px) {
    .projects-collection-container {
      row-gap: calc(2 * var(--site-xmargin));
    }
  }

  @media only screen and (min-width: 800px) {
    .project-item {
      grid-column: span 6;
    }
  }

  .text-container {
    padding-bottom: 1.5rem;
  }

  .text-container > * {
    max-width: 40rem;
  }

  h3 {
    color: var(--key-colour);
    margin-top: 0.125rem;
    margin-bottom: 0.25rem;
  }
  
  a {
    display: block;
    text-decoration: none;
  }
</style>