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
  }

  .project-item {
    display: block;
    border-top: var(--standard-top-border);
    padding-top: 0.5rem;
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

  .media-container {
    transition: opacity var(--standard-transition-duration) ease-in-out;
  }

  .project-item:hover .media-container {
    opacity: 0.75;
  }
</style>