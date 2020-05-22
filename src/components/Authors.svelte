<script>
  import articles from "components/articles.js";
  import translit from "components/translit.js";

  const authors = [...new Set(articles.map(a => a.author) || [])]
    .filter(
      a => Boolean(a) && !["Театралий", "«За музыку отвечает»"].includes(a)
    )
    .reduce((acc, a) => [...acc, ...a.split(",")], [])
    .sort((a, b) => {
      const [, last1] = a.split(' ');
      const [, last2] = b.split(' ');

      if (last2 > last1) return -1;
      if (last2 < last1) return 1;
      return 0;
    });
</script>

{#each authors as author}
  <a class="block" href={translit(author)}>{author}</a>
{/each}
