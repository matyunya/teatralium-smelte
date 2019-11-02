<script>
  import translit from "components/translit";
  export let post = null;

  function text() {
    return post.type === "interview" ? "интервью" : "текст";
  }

  function hasAuthor({ author }) {
    return author && !["«За музыку отвечает»"].includes(author);
  }

  function html() {
    if (post.author === "Театралий") {
      return `${text()}:&nbsp;${post.author}</a>`;
    }

    return `${text()}:&nbsp;<a href=${translit(post.author)}>${
      post.author
    }</a>`;
  }
</script>

<div class="date">
  <span>{post.date || ''}{hasAuthor(post) ? ',' : ''}</span>
  <span>
    {#if hasAuthor(post)}
      {@html html()}
    {/if}
  </span>
</div>
