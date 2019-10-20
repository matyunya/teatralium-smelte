<script>
  import Head from "components/Head.svelte";
  import Date from "components/Date.svelte";
  import Share from "components/Share.svelte";
  import HomeLink from "components/HomeLink.svelte";

  export let image = null;
  export let description = null;
  export let date = null;
  export let author = null;
  export let url = null;
  export let title = null;
  export let layout = "";
  export let type = null;
  export let hasCover = false;

  const post = {
    image,
    description,
    date,
    author,
    url,
    title,
    type,
  };
</script>

<Head {post} />

<Date {post} />

{#if !hasCover}
  <div class="mb-6 h-screen sm:px-32">
    <h1 class="text-center uppercase my-20">{title.split(':')[0]}</h1>
    <h2 class="text-center small">{title.split(':')[1] || ''}</h2>
  </div>
{/if}

<div>
  <slot />
</div>

<Share {post} />

<HomeLink />
