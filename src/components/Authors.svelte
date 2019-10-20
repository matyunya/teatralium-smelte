<script>
  import articles from "components/articles.js";

  const authors = [...new Set(articles.map(a => a.author) || [])].filter(
    a => !!a && !["Театралий", "«За музыку отвечает»"].includes(a)
  );
</script>

{#each authors as author}
  <a href="/authors/{[...(author || '').split(' ')].pop()}">{author}</a>
  <br />
{/each}
