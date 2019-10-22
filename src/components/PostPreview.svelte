<script>
  import { fade } from "svelte/transition";
  export let post = {};

  function t({ title }) {
    if (title.includes(':')) {
      return title.split(':')[0];
    }

    return title;
  }
  
  function s({ title, subtitle, description }) {
    if (title.includes(':')) {
      const tl = title.split(':')[1].trim();
      return `${tl[0].toUpperCase()}${tl.slice(1)}`;
    }

    if (subtitle) return subtitle;

    return post.description.substr(-1) === '.' ? post.description.slice(0, -1) : post.description;
  }
</script>

<a
  class="pt-10 px-4 no-underline"
  in:fade={{ duration: 100 }}
  out:fade={{ duration: 100 }}
  href="{post.url}/"
  rel="prefetch">
  <h2 class="my-0 py-0">{t(post)}</h2>
  <h5>{s(post)}</h5>
</a>
