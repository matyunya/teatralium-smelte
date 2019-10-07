<script>
  export let post = null;
</script>

{#if post.hideDate}
  <div class="date">
    {post.date}
    {#if post.author}, текст:&nbsp;{post.author}{/if}
  </div>
{/if}
