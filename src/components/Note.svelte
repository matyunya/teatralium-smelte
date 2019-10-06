<script>
  export let top = 0;
  export let left = false;
  export let bg = "secondary-50";
</script>

<style>
  :global(em) {
    color: #333399;
    border-bottom: 1px dashed #333399;
  }

  .note {
    width: 250px;
    max-width: 250px;
  }

  .left {
    margin-left: -300px;
    float: left;
  }

  .right {
    margin-right: -300px;
    float: right;
  }
</style>

<div
  class="bg-{bg} mb-4 p-8 text-xs note inline-block"
  class:left
  class:right={!left}
  style="margin-top: {top}px">
  <slot />
</div>
