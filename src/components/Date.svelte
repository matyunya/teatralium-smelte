<script>
  import translit from "components/translit";
  export let post = null;

  function text() {
    return post.type === "interview" ? ", интервью" : ", текст";
  }

  function hasAuthor({ author }) {
    return author && !["Театралий", "«За музыку отвечает»"].includes(author);
  }

  function html() {
    return `${text()}:&nbsp;<a href=${translit(post.author)}>${post.author}</a>`;
  }
</script>

<div class="date">
  {post.date || ''}
  {#if hasAuthor(post)}
    {@html html()}
  {/if}
</div>
