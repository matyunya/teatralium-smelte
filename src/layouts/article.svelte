<script>
  import { onMount } from "svelte";
  import { Button, Icon } from "smelte";
  import Image from "svelte-image";

  import Head from "components/Head.svelte";
  import Date from "components/Date.svelte";
  import Share from "components/Share.svelte";
  import HomeLink from "components/HomeLink.svelte";
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
  export let coverClass = "";
  export let subClass = "";

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
        autoplay: false
      });
    }
  });

  const name = url.split('/')[1];
</script>

<style>
  @font-face {
    font-family: "Bodoni";
    src: url(/fonts/bodoni-italic.woff2);
    font-weight: normal;
    font-style: italic;
  }

  .cover {
    height: calc(100vh - 100px);
    max-width: 1200px;
  }
  .bg {
    z-index: -10;
    height: 100vh;
  }

  .bg :global(.wrapper) {
    margin-top: 0;
  }

  img {
    @apply object-cover w-screen h-screen;
    opacity: 1;
    animation: fadeIn 0.5s ease-out;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
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

{#if !hasCover}
  <div class="mb-6 cover mx-auto flex flex-col justify-center {coverClass}">
    <h1 class="text-center uppercase mb-10">
      <span class={subClass}>{@html title.split(':')[0]}</span>
    </h1>
    <h2 class="text-center small">
      <span class={subClass}>{@html s(post)}</span>
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

    <Date {post} />
  </div>

  <div class="absolute w-screen top-0 left-0 bg h-screen">
    {#if name === 'aktyory_truppy_na_otlyote'}
      <img
        src="images/blok/cover.jpg"
        alt={post.title}
      />
    {/if}
    {#if name === 'nogi_zatekayut'}
      <img
        src="images/nogi/cover.jpg"
        alt={post.title}
      />
    {/if}
    {#if name === 'dokumentalnaya_horeografiya'}
      <img
        src="images/dok_hor/cover.jpg"
        alt={post.title}
      />
    {/if}
    {#if name === 'zloveschaya_dolina'}
      <img
        src="images/zloveschaya_dolina/cover.jpg"
        alt={post.title}
      />
    {/if}
    {#if name === '28dney'}
      <img
        src="images/28dney/cover5.jpg"
        alt={post.title}
      />
    {/if}
    {#if name === 'ya_ne_boyus_skazat'}
      <img
        src="images/yaneboyusskazat/cover.jpg"
        alt={post.title}
      />
    {/if}
    {#if name === 'iphuck'}
      <img
        src="images/iphuck/333.jpg"
        alt={post.title}
      />
    {/if}
    {#if name === 'sheshepop'}
      <img
        src="images/sheshepop/ccc.jpg"
        alt={post.title}
      />
    {/if}
    {#if name === 'vseh_toshnit'}
      <img
        src="images/vseh_toshnit/cover.jpg"
        alt={post.title}
      />
    {/if}
    {#if name === 'pomolvka'}
      <img
        src="images/pomolvka/cover3.jpg"
        alt={post.title}
      />
    {/if}
    {#if name === 'kritiki'}
      <img
        src="images/kritiki/cover.jpg"
        alt={post.title}
      />
    {/if}
    {#if name === 'flanagan'}
      <img
        src="images/hallie_flanagan/cover.jpg"
        alt={post.title}
      />
    {/if}
    {#if name === 'ya_rabotayu_v_teatre_zaytseva'}
      <img
        src="images/zaytseva/cover-up.jpg"
        alt={post.title}
      />
    {/if}
    {#if name === 'contemporary_artists'}
      <img
        src="images/contemporary_artists/contemporary_cover.jpg"
        alt={post.title}
      />
    {/if}
    {#if name === 'kon_ne_valyalsya'}
      <img
        src="images/kon_ne_valyalsya/cover.jpg"
        alt={post.title}
      />
    {/if}
    {#if name === 'telegram_kanaly'}
      <img
        src="images/telegram_kanaly/cover.jpg"
        alt={post.title}
      />
    {/if}
    {#if name === 'net_amnezii'}
      <img
        src="images/sonet/2.jpg"
        alt={post.title}
      />
    {/if}
    {#if name === 'v_moskve_naprimer_analogov_net'}
      <img
        src="images/naprimer/cover.jpg"
        alt={post.title}
      />
    {/if}
    {#if name === 'aktyora_nado_mordoy_v_govno'}
      <img
        src="images/govno/cover.jpg"
        alt={post.title}
      />
    {/if}
    {#if name === 'teatr_mody_v_sovetskoy_rossii'}
      <img
        src="images/naryady/044.jpg"
        alt={post.title}
      />
    {/if}
  </div>
{/if}

<div>
  <slot />
</div>

<Share {post} />

<HomeLink />
