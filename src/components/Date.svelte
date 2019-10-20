<script>
  export let post = null;

  function text() {
    return post.type === "interview" ? "интервью" : "текст";
  }
</script>

<div class="date">
  {post.date || ''}
  {#if post.author}
    ,
    <a href="/authors/{[...(post.author || '').split(' ')].pop()}">
      {text()}:&nbsp;{post.author}
    </a>
  {/if}
</div>
