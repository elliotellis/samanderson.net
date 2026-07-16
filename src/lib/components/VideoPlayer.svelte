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
</script>

<div class="video-container">
  {#if opened}
    <video 
      src={opened ? src : ''} 
      poster={thumbnail}
      bind:currentTime={currentTime}
      bind:duration={totalDuration}
      bind:paused
      bind:muted
    ></video>
  {:else}
    <img src={thumbnail} alt="">
  {/if}

  {#if active}
    <div class="controls-container active-controls">
      <div class="controls-strip">

        <button 
          class="playpause-onvideo-control" 
          aria-label={paused ? 'play' : 'pause'}
          onclick={() => paused = !paused}
        ></button>

        <button 
          class="playpause-control" 
          aria-label={paused ? 'play' : 'pause'}
          onclick={() => paused = !paused}
        >
          {#if paused}
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 14.4045C15 14.2187 15.1956 14.0978 15.3618 14.1809L34.5528 23.7764C34.737 23.8685 34.737 24.1315 34.5528 24.2236L15.3618 33.8191C15.1956 33.9022 15 33.7813 15 33.5955V14.4045Z" />
            </svg>
          {:else}
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="15" y="14" width="6" height="20" rx="0.25" />
              <rect x="27" y="14" width="6" height="20" rx="0.25" />
            </svg>
          {/if}
        </button>

        <div class="time-controls">
          <div class="progress-control" style:--progress={(currentTime / totalDuration * 100) + '%'}>
            <div 
              class="progress-bar"
              onpointerdown={e => {
                const div = e.currentTarget;
                function seek(e) {
                  const { left, width } = div.getBoundingClientRect();
                  let p = (e.clientX - left) / width;
                  if (p < 0) p = 0;
                  if (p > 1) p = 1;
                  currentTime = p * totalDuration;
                }
                seek(e);
                window.addEventListener('pointermove', seek);
                window.addEventListener('pointerup', () => {
                  window.removeEventListener('pointermove', seek);
                }, {
                  once: true
                });
              }}
            ></div>
            <div class="time-handle"></div>
          </div>
          <div class="time-display">
            &#x2212;{totalDuration ? format(totalDuration - currentTime) : '\u2012\u2012:\u2012\u2012'}
          </div>
        </div>

        <button 
          class="mute-control" 
          aria-label={muted ? 'unmute' : 'mute'}
          onclick={() => muted = !muted}
        >
          {#if muted}
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 35.3964C24 35.6192 23.7307 35.7307 23.5732 35.5732L16.873 28.873C16.8261 28.8261 16.7626 28.7998 16.6963 28.7998H12.25C12.1119 28.7998 12 28.6879 12 28.5498V19.4502C12 19.3121 12.1119 19.2002 12.25 19.2002H16.6963C16.7626 19.2002 16.8261 19.1739 16.873 19.127L23.5732 12.4268C23.7307 12.2693 24 12.3808 24 12.6036V35.3964Z" />
              <path d="M33.5604 20.0702C33.658 19.9727 33.8163 19.9727 33.9139 20.0702L34.9296 21.0858C35.0269 21.1834 35.0271 21.3418 34.9296 21.4393L32.369 23.9999L34.9296 26.5604C35.0271 26.658 35.027 26.8163 34.9296 26.9139L33.9139 27.9296C33.8163 28.0269 33.658 28.0271 33.5604 27.9296L30.9999 25.369L28.4393 27.9296C28.3418 28.0271 28.1834 28.0269 28.0858 27.9296L27.0702 26.9139C26.9727 26.8163 26.9727 26.658 27.0702 26.5604L29.6307 23.9999L27.0702 21.4393C26.9727 21.3418 26.9728 21.1834 27.0702 21.0858L28.0858 20.0702C28.1834 19.9727 28.3417 19.9727 28.4393 20.0702L30.9999 22.6307L33.5604 20.0702Z" />
            </svg>
          {:else}
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 35.3964C24 35.6192 23.7307 35.7307 23.5732 35.5732L16.873 28.873C16.8261 28.8261 16.7626 28.7998 16.6963 28.7998H12.25C12.1119 28.7998 12 28.6879 12 28.5498V19.4502C12 19.3121 12.1119 19.2002 12.25 19.2002H16.6963C16.7626 19.2002 16.8261 19.1739 16.873 19.127L23.5732 12.4268C23.7307 12.2693 24 12.3808 24 12.6036V35.3964Z" />
              <rect x="26" y="21" width="2" height="6" rx="0.25" />
              <rect x="30" y="17" width="2" height="14" rx="0.25" />
              <rect x="34" y="14" width="2" height="20" rx="0.25" />
            </svg>
          {/if}
        </button>

      </div>
    </div>
  {/if}

  {#if !active}
    <div class="controls-container inactive-controls">
      <button class="inactive-play-button" onclick={() => { active = !active; opened = true; paused = false; }}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0.250211C0 0.0643658 0.195578 -0.0565078 0.361803 0.0266048L19.5528 9.6221C19.737 9.71423 19.737 9.97718 19.5528 10.0693L0.361804 19.6648C0.195579 19.7479 0 19.627 0 19.4412V0.250211Z" />
        </svg>
        <!-- <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0.250212C0 0.0643662 0.195578 -0.0565078 0.361803 0.0266048L23.5528 11.6221C23.737 11.7142 23.737 11.9772 23.5528 12.0693L0.361804 23.6648C0.195578 23.7479 0 23.627 0 23.4412V0.250212Z" fill="white"/>
        </svg> -->
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
    --controls-size: 3rem;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0; 
    left: 0;
    display: flex;
    align-items: flex-end;
  }

  button {
    background-color: var(--key-colour);
    color: var(--background-colour);
    transition: background-color var(--standard-transition-duration);
  }

  button:hover {
    background-color: hsl(from var(--key-colour) h s calc(l - 25) ); /* to fix */
  }

  button svg path,
  button svg rect {
    fill: currentColor;
  }

  .inactive-controls {
    background-color: rgb(0 0 0 / 50%);
  }

  .inactive-play-button {
    width: 12rem;
    height: 4rem;
    padding: 0.5rem 0.6rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    font-weight: var(--fontweight-bold);
    text-align: left;
  }

  .inactive-play-button svg {
    display: inline-block;
    margin: 0.33rem 0.01rem;
  }

  .active-controls {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity var(--standard-transition-duration);
  }

  .active-controls:hover {
    opacity: 1;
  }

  .controls-strip {
    width: 100%;
    height: var(--controls-size);
    display: flex;
  }

  .controls-strip > * {
    height: 100%;
  }

  .playpause-control {
    width: var(--controls-size);
  }

  .playpause-onvideo-control {
    position: absolute;
    width: 100%;
    height: calc(100% - var(--controls-size));
    top: 0;
    background-color: transparent;
    cursor: pointer;
  }

  .playpause-onvideo-control:hover {
    background-color: transparent;
  }

  .time-controls {
    height: 100%;
    padding: 1rem;
    flex-grow: 1;
    display: flex;
    color: var(--background-colour);
    background-color: rgb(from var(--text-colour) r g b / 50%)
  }

  .time-controls > * {
    height: 100%;
  }

  .progress-control {
    flex-grow: 1;
    margin-right: 0.5rem;
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
  }

  .progress-bar {
    width: 100%;
    height: 0.5rem;
    background-color: rgb(from var(--background-colour) r g b / 50%);
    position: relative;
  }

  .progress-bar::before {
    content: '';
    display: block;
    width: var(--progress);
    height: 100%;
    background-color: var(--background-colour);
  }

  .time-display {
    width: 4rem;
    text-align: right;
    line-height: 1rem;
    user-select: none;
    -webkit-user-select: none;
    font-variant-numeric: tabular-nums;
  }

  .time-handle {
    position: absolute;
    top: 0;
    left: var(--progress);
    width: 0.25rem;
    height: 100%;
    background-color: var(--background-colour);
    box-shadow: 0 0 0.25rem rgb(from var(--text-colour) r g b / 33.3%);
    transition: transform 0.1s;
    pointer-events: none;
  }

  .time-controls:hover .time-handle {
    transform: scaleX(160%) scaleY(120%);
  }

</style>