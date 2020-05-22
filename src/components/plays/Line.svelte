<script>
  export let by = '';
  export let action = '';
</script>

<style>
  .by {
    font-variant: small-caps;
    font-size: 1.2rem;
    color: #444;
  }

  .action {
    font-style: italic;
    font-variant: normal;
    padding-left: 0.5rem;
  }
</style>



<div class="pt-4">
  <div class="by">
    {by}{#if action} <span class="action">{action}.</span>{:else}.{/if}
  </div>
  <div class="pl-4"><slot /></div>
</div>
