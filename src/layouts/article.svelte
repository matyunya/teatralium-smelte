<script>
  import { onMount, setContext } from "svelte";
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

  const post = {
    image,
    description,
    date,
    author,
    url,
    title,
    subtitle,
    type
  };

  const name = url.split("/")[1];
</script>

<style>
  @font-face {
    font-family: "Bodoni";
    src: url(/fonts/bodoni-italic.woff2);
    font-weight: normal;
    font-style: italic;
  }

  .cover {
    height: 100vh;
    max-width: 1200px;
  }

  .cover h1 {
    font-size: 3.75rem;
  }

  .bg {
    z-index: -10;
    height: 100vh;
  }

  .bg :global(.wrapper),
  .bg :global(.wrapper div) {
    margin-top: 0;
    @apply h-screen;
  }

  .cover :global(img) {
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
      <span class={subClass}>
        {@html title.split(':')[0]}
      </span>
    </h1>
    <h2 class="text-center small">
      <span class={subClass}>
        {@html s(post)}
      </span>
    </h2>

    <Date {post} />
  </div>

  <div class="absolute w-screen top-0 left-0 bg h-screen">
    {#if name === 'aktyory_truppy_na_otlyote'}
      <Image
        src="images/blok/cover.jpg"
        alt={post.title}
        class="object-cover elevation-0 h-screen" />
    {/if}
    {#if name === 'nogi_zatekayut'}
      <Image
        src="images/nogi/cover.jpg"
        alt={post.title}
        class="object-cover elevation-0 h-screen" />
    {/if}
    {#if name === 'dokumentalnaya_horeografiya'}
      <Image
        src="images/dok_hor/cover.jpg"
        alt={post.title}
        class="object-cover elevation-0 h-screen" />
    {/if}
    {#if name === 'zloveschaya_dolina'}
      <Image
        src="images/zloveschaya_dolina/cover.jpg"
        alt={post.title}
        class="object-cover elevation-0 h-screen" />
    {/if}
    {#if name === '28dney'}
      <Image
        src="images/28dney/cover5.jpg"
        alt={post.title}
        class="object-cover elevation-0 h-screen" />
    {/if}
    {#if name === 'ya_ne_boyus_skazat'}
      <Image
        src="images/yaneboyusskazat/cover.jpg"
        alt={post.title}
        class="object-cover elevation-0 h-screen" />
    {/if}
    {#if name === 'iphuck'}
      <Image
        src="images/iphuck/333.jpg"
        alt={post.title}
        class="object-cover elevation-0 h-screen" />
    {/if}
    {#if name === 'sheshepop'}
      <Image
        src="images/sheshepop/ccc.jpg"
        alt={post.title}
        class="object-cover elevation-0 h-screen" />
    {/if}
    {#if name === 'vseh_toshnit'}
      <Image
        src="images/vseh_toshnit/cover.jpg"
        alt={post.title}
        class="object-cover elevation-0 h-screen" />
    {/if}
    {#if name === 'pomolvka'}
      <Image
        src="images/pomolvka/cover3.jpg"
        alt={post.title}
        class="object-cover elevation-0 h-screen" />
    {/if}
    {#if name === 'kritiki'}
      <Image
        src="images/kritiki/cover.jpg"
        alt={post.title}
        class="object-cover elevation-0 h-screen" />
    {/if}
    {#if name === 'flanagan'}
      <Image
        src="images/hallie_flanagan/cover.jpg"
        alt={post.title}
        class="object-cover elevation-0 h-screen" />
    {/if}
    {#if name === 'ya_rabotayu_v_teatre_zaytseva'}
      <Image
        src="images/zaytseva/cover-up.jpg"
        alt={post.title}
        class="object-cover elevation-0 h-screen" />
    {/if}
    {#if name === 'contemporary_artists'}
      <Image
        src="images/contemporary_artists/cover_contemporary.jpg"
        alt={post.title} />
    {/if}
    {#if name === 'kon_ne_valyalsya'}
      <Image
        src="images/kon_ne_valyalsya/cover.jpg"
        alt={post.title}
        class="object-cover elevation-0 h-screen" />
    {/if}
    {#if name === 'telegram_kanaly'}
      <Image
        src="images/telegram_kanaly/cover.jpg"
        alt={post.title}
        class="object-cover elevation-0 h-screen" />
    {/if}
    {#if name === 'net_amnezii'}
      <Image
        src="images/sonet/2.jpg"
        alt={post.title}
        class="object-cover elevation-0 h-screen" />
    {/if}
    {#if name === 'v_moskve_naprimer_analogov_net'}
      <Image
        src="images/naprimer/cover.jpg"
        alt={post.title}
        class="object-cover elevation-0 h-screen" />
    {/if}
    {#if name === 'aktyora_nado_mordoy_v_govno'}
      <Image
        src="images/govno/cover.jpg"
        alt={post.title}
        class="object-cover elevation-0 h-screen" />
    {/if}
    {#if name === 'teatr_mody_v_sovetskoy_rossii'}
      <Image
        src="images/naryady/044.jpg"
        alt={post.title}
        class="object-cover elevation-0 h-screen" />
    {/if}
  </div>
{/if}

<div class="article-body">
  <slot />
</div>

<Share {post} />

<HomeLink />
