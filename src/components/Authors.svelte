<script>
  import articles from "components/articles.js";
  import translit from "components/translit.js";

  const authors = [...new Set(articles.map(a => a.author) || [])].filter(
    a => !!a && !["Театралий", "«За музыку отвечает»"].includes(a)
  );
</script>

{#each authors as author}
  <a class="block" href={translit(author)}>{author}</a>
{/each}