<script>
  export let post = null;

  if (!post.image) {
    throw new Error("Head: no image");
  }

  if (!post.url) {
    throw new Error("Head: no url");
  }

  if (!post.title) {
    throw new Error("Head: no title");
  }
</script>

<svelte:head>
  <title>{post.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:description" content="{post.title} | Театралий" />
  <meta property="og:url" content="https://teatralium.com/{post.url}" />
  <meta property="og:image" content="https://teatralium.com/{post.image}" />
</svelte:head>
