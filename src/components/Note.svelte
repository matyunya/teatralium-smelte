<script>
  export let top = 0;
  export let left = false;
  export let bg = "primary-100";
</script>

<style>
  :global(em) {
    color: #333399;
    border-bottom: 1px dashed #333399;
  }

  .note {
    width: 200px;
    max-width: 200px;
  }

  .note :global(ul) {
    @apply text-black py-0;
  }

  .left {
    margin-left: -220px;
    float: left;
  }

  .right {
    margin-right: -220px;
    float: right;
  }

  @media (max-width: 640px) {
    .right,
    .left {
      margin-left: 0;
      margin-right: 0;
      float: none;
    }

    .note {
      width: 100%;
      max-width: 100%;
    }
  }
</style>

<div
  class="bg-{bg} mb-10 p-4 md:text-xs note block md:inline-block"
  class:left
  class:right={!left}
  style="margin-top: {top}px">
  <slot />
</div>
