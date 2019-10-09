<script>
  export let post = null;
</script>

<div class="date">
  {post.date}
  {#if post.author}, текст:&nbsp;{post.author}{/if}
</div>