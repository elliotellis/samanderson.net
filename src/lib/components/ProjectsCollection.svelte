<script>
  let { projects } = $props();
</script>

<section class="projects-collection-container grid">

  {#each projects as project}
    <a class="project-item" href={'/projects/' + project.slug.current}>
      <div class="text-container">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
      <div class="media-container">
        <img src="https://placehold.co/160x90" alt="123">
      </div>
    </a>
  {/each}

  <a class="project-item" href="#">
    <div class="text-container">
      <h3>The FA / England national football&nbsp;teams</h3>
      <p>Shaping the tone, pace and visual identity of England Football’s digital storytelling across YouTube & social platforms.</p>
    </div>
    <div class="media-container">
      <img src="https://placehold.co/160x90" alt="123">
    </div>
  </a>

  <a class="project-item" href="#">
    <div class="text-container">
      <h3>The FA / England national football&nbsp;teams</h3>
      <p>Shaping the tone, pace and visual identity of England Football’s digital storytelling across YouTube & social platforms.</p>
    </div>
    <div class="media-container">
      <img src="https://placehold.co/160x90" alt="123">
    </div>
  </a>

  <a class="project-item" href="#">
    <div class="text-container">
      <h3>The FA / England national football&nbsp;teams</h3>
      <p>Shaping the tone, pace and visual identity of England Football’s digital storytelling across YouTube & social platforms.</p>
    </div>
    <div class="media-container">
      <img src="https://placehold.co/160x90" alt="123">
    </div>
  </a>

  <a class="project-item" href="#">
    <div class="text-container">
      <h3>The FA / England national football&nbsp;teams</h3>
      <p>Shaping the tone, pace and visual identity of England Football’s digital storytelling across YouTube & social platforms.</p>
    </div>
    <div class="media-container">
      <img src="https://placehold.co/160x90" alt="123">
    </div>
  </a>

  <a class="project-item" href="#">
    <div class="text-container">
      <h3>The FA / England national football&nbsp;teams</h3>
      <p>Shaping the tone, pace and visual identity of England Football’s digital storytelling across YouTube & social platforms.</p>
    </div>
    <div class="media-container">
      <img src="https://placehold.co/160x90" alt="123">
    </div>
  </a>


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

  a:hover h3 {  }
</style>