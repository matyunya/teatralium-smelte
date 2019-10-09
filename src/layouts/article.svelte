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

  const post = {
    image,
    description,
    date,
    author,
    url,
    title,
    type
  };
</script>

<Head {post} />

<Date {post} />

<div>
  <slot />
</div>

<Share {post} />

<HomeLink />
