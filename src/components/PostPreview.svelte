<script>
  import { fade } from "svelte/transition";
  import s from "components/subtitle";
  export let post = {};

  function t({ title }) {
    if (title.includes(":")) {
      return title.split(":")[0];
    }

    return title;
  }
</script>

<a
  class="pt-10 px-4 no-underline"
  in:fade={{ duration: 100 }}
  out:fade={{ duration: 100 }}
  href="{post.url}/"
  rel="prefetch">
  <h2 class="my-0 py-0">
    {@html t(post)}
  </h2>
  <h5>
    {@html s(post)}
  </h5>
</a>
