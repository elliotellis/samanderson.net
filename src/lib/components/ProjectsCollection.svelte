<script>
  let { projects } = $props();
</script>

<section class="projects-collection-container grid site-padding">

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
    border-top: var(--g-b);
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
    margin: 0;
    color: var(--c-k);
    font-size: 1rem;
  }

  p { 
    margin: 0; 
    color: var(--c-f);
  }
  
  a {
    display: block;
    text-decoration: none;
  }

  .media-container {
    transition: opacity var(--m-transition-duration) ease-in-out;
  }

  .project-item:hover .media-container {
    opacity: 0.8;
  }
</style>