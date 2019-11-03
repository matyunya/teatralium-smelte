<script>
  import s from "components/subtitle";
  export let post = {};
  export let i = 0;

  function t({ title }) {
    if (title.includes(":")) {
      return title.split(":")[0];
    }

    return title;
  }
</script>

<a class="pt-10 px-4 no-underline" href="{post.url}/" rel="prefetch">
  <h2 class="my-0 py-0">
    {@html t(post)}
  </h2>
  <h5>
    {@html s(post)}
  </h5>
</a>
