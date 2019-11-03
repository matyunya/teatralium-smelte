<script>
  import { onMount } from "svelte";
  import { Button, Icon } from "smelte";
  import Head from "components/Head.svelte";
  import Date from "components/Date.svelte";
  import Share from "components/Share.svelte";
  import HomeLink from "components/HomeLink.svelte";
  import Waypoint from "svelte-waypoint";
  import Loadable from "svelte-loadable";
  import s from "components/subtitle";

  export let image = null;
  export let description = null;
  export let date = null;
  export let author = null;
  export let url = null;
  export let title = null;
  export let subtitle = null;
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

  onMount(() => {
    if (type === "mix" && window.Mixcloud) {
      player = window.Mixcloud.FooterWidget(`/Teatralium/${mix}/`, {
        light: true,
        hide_artwork: true,
        autoplay: false,
      });

    }
  });
</script>

<style>
  @font-face {
    font-family: "Bodoni";
    src: url(/fonts/bodoni-italic.woff2);
    font-weight: normal;
    font-style: italic;
  }

  .cover {
    height: calc(100vh - 120px);
  }
</style>

<svelte:head>
  <link
    rel="preload"
    href="fonts/bodoni-italic.woff2"
    as="font"
    type="font/woff2" />
</svelte:head>
<Head {post} />

<Date {post} />

{#if !hasCover}
  <div class="mb-6 cover sm:px-32 flex flex-col justify-center">
    <h1 class="text-center uppercase mb-10">
      {@html title.split(':')[0]}
    </h1>
    <h2 class="text-center small">
      {@html s(post)}
    </h2>

    {#if type === 'mix'}
      <div class="w-32 mx-auto relative overflow-hidden rounded-full">
        <Button
          class="mx-auto w-32 relative overflow-hidden"
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

<Waypoint>
  <Loadable loader={() => import('../routes/index.svelte')} />
</Waypoint>
