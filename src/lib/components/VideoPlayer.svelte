<script>
  let { src, thumbnail, alt } = $props();
</script>

<video src={src} poster={thumbnail} controls></video>

<style>
  video {
    width: 100%;
  }
</style>