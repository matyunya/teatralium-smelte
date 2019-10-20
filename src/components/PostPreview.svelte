<script>
  import { fade } from "svelte/transition";
  export let post = {};
</script>

<a
  class="p-10"
  in:fade={{ duration: 100 }}
  out:fade={{ duration: 100 }}
  href="{post.url}"
  rel="prefetch">
  <h2 class="my-0 py-0">{post.title}</h2>
  <h5>{post.description}</h5>
</a>
