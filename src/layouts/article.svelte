<script>
  import { onMount } from "svelte";
  import { Button, Icon } from "smelte";
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
  export let mix = null;

  export let player = null;

  const post = {
    image,
    description,
    date,
    author,
    url,
    title,
    type
  };

  onMount(async () => {
    if (type === "mix" && window.Mixcloud) {
      player = await window.Mixcloud.FooterWidget(`/Teatralium/${mix}/`, {
        light: true,
        hide_artwork: true,
        autoplay: true
      });
    }
  });
</script>

<Head {post} />

<Date {post} />

{#if !hasCover}
  <div class="mb-6 h-screen sm:px-32">
    <h1 class="text-center uppercase my-20">{title.split(':')[0]}</h1>
    <h2 class="text-center small">{title.split(':')[1] || ''}</h2>

    {#if type === 'mix'}
      <div class="w-64 mx-auto relative">
        <Button
          class="mx-auto w-64"
          text
          light
          flat
          data-mixcloud-play-button="/Teatralium/{mix}/">
          <Icon class="text-5xl text-primary-900">play_circle_outline</Icon>
        </Button>
      </div>
    {/if}
  </div>
{/if}

<div>
  <slot />
</div>

<Share {post} />

<HomeLink />
