<script>
  let disabled = true;
  export let url = false;
  export let id = false;
  export let start = 0;
  export let desc = null;
  export let afterUrl = false;
  export let title = false;
</script>

<style>
  .disabled {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 100;
    transform: translate(-50%, -50%);
    background-image: url("/play.svg");
    width: 6rem;
    height: 6rem;
  }

  .wrapper {
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 25px;
    height: 0;
  }

  .abs {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>

<div
  class="wrapper cursor-pointer my-16 {$$props.class}"
  on:click={() => (disabled = false)}>
  {#if url && !id}
    <iframe
      class="abs"
      src={url}
      frameBorder="0"
      allowFullScreen
      title="video" />
  {:else if disabled}
    <span>
      <img
        class="abs"
        src="https://img.youtube.com/vi/{id}/0.jpg"
        alt="preview" />
      <div class="disabled" />
    </span>
  {:else}
    <iframe
      src="https://www.youtube.com/embed/{id}?autoplay=1&start={start}"
      title="video"
      frameBorder="0"
      allowFullScreen
      class="abs"
      allow="autoplay" />
  {/if}
</div>

<div class="small">
  <slot />
  {#if desc}
    {desc}
    {#if url && title}
      <a href={url}>{title}</a>
    {/if}
    {#if afterUrl}
      <span>{afterUrl}</span>
    {/if}
  {/if}
</div>
