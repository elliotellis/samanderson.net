<script>
  let { src, thumbnail, alt } = $props();
  let opened = $state(false);
  let active = $state(false);
  let currentTime = $state(0);
  let totalDuration = $state(0);
  let paused = $state(true);
  let muted = $state(false);

  function format(time) {
		if (isNaN(time)) return '...';

		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60);

		return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
	}

  function seek(e) {
    const { left, width } = div.getBoundingClientRect();
    let p = (e.clientX - left) / width;
    if (p < 0) p = 0;
    if (p > 1) p = 1;
    time = p * duration;
  }
</script>

<div class="video-container">
  <video 
    src={opened ? src : ''} 
    poster={thumbnail}
    bind:currentTime={currentTime}
    bind:duration={totalDuration}
    bind:paused
    bind:muted
		onended={() => { time = 0; }}
  ></video>

  <div class="controls-container active-controls">
    <div class="controls-strip">

      <button 
        class="active-playpause-control" 
		    aria-label={paused ? 'play' : 'pause'}
		    onclick={() => paused = !paused}
      >P</button>

      <div class="time-controls">
        <div class="progress-control">
          <div 
            class="progress-bar"
            style:width={(currentTime / totalDuration * 100) + '%'}
          ></div>
          <div 
            class="time-handle"
            onpointerdown={e => {
              const div = e.currentTarget;
              seek(e);
              window.addEventListener('pointermove', seek);
              window.addEventListener('pointerup', () => {
                window.removeEventListener('pointermove', seek);
              }, {
                once: true
              });
            }}
          ></div>
        </div>
        <div class="time-display">
          &#x2212;{totalDuration ? format(totalDuration - currentTime) : '\u2012\u2012:\u2012\u2012'}
        </div>
      </div>

      <button 
        class="mute-control" 
		    aria-label={muted ? 'unmute' : 'mute'}
		    onclick={() => muted = !muted}
      ></button>

    </div>
  </div>

  {#if !active}
    <div class="controls-container inactive-controls">
      <button class="inactive-play-button" onclick={() => { active = !active; opened = true; paused = false; }}>
        Play video
      </button>
    </div>
  {/if}

</div>

<style>

  .video-container {
    width: 100%;
    position: relative;
  }

  video {
    display: block;
    width: 100%;
    height: auto;
  }

  .controls-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0; 
    left: 0;
    display: flex;
    align-items: flex-end;
  }

  .controls-container.hidden {
    display: none;
  }

  button {
    color: var(--background-colour);
    transition: background-color var(--standard-transition-duration);
  }

  button:hover {
    background-color: hsl(from var(--key-colour) h s calc(l - 25) ); /* to fix */
  }

  .inactive-controls {
    background-color: rgb(0 0 0 / 50%);
  }

  .inactive-play-button {
    width: 12rem;
    height: 4rem;
    padding: 0.5rem 0.5rem 0.5rem 0.6rem;
    background-color: var(--key-colour);
    display: flex;
    align-items: flex-end;
    font-weight: var(--fontweight-bold);
  }

  .active-controls {
    --control-size: 3rem;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    position: absolute;
    top: 0;
    left: 0;
  }

  .active-controls > * {
    height: var(--control-size);
  }

  .active-playpause-control {
    width: var(--control-size);
  }

</style>