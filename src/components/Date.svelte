<script>
  export let post = null;

  function text() {
    return post.type === "interview" ? "интервью" : "текст";
  }
</script>

<div class="date">
  {post.date || ''}
  {#if post.author}, {text()}:&nbsp;{post.author}{/if}
</div>
