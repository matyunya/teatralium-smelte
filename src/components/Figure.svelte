<script>
  export let author = '';
</script>

<figure class="mb-16 mt-8">
  <blockquote class="italic"><slot /></blockquote>
  {#if author} <figcaption class="text-sm text-right">{author}</figcaption> {/if}
</figure>