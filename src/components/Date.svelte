<script>
  export let post = null;

  function text() {
    return post.type === "interview" ? "интервью" : "текст";
  }
</script>

<div class="date">
  {post.date || ''}
  {#if post.author && !['Театралий', '«За музыку отвечает»'].includes(post.author)}
    , {text()}:&nbsp;
    <a href="/authors/{[...(post.author || '').split(' ')].pop()}">
      {post.author}
    </a>
  {/if}
</div>
