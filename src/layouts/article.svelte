<script>
  import { onMount } from "svelte";
  import Image from "svelte-image";
  import Date from "components/Date.svelte";
  import Share from "components/Share.svelte";
  import HomeLink from "components/HomeLink.svelte";
  import ColoredBg from "components/ColoredBg.svelte";
  import s from "components/subtitle";

  export let image = null;
  export let description = null;
  export let date = null;
  export let author = null;
  export let url = null;
  export let title = null;
  export let customTitle = null;
  export let subtitle = null;
  export const layout = "";
  export let type = null;
  export let hasCover = false;
  export const mix = null;
  export let coverClass = "";
  export let subClass = "";
  export let bgColor = "";

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

  onMount(() => {
    const lead = document.querySelector('.lead');

    lead.innerHTML = `<span class="hued">${lead.innerHTML[0]}</span>` + lead.innerHTML.slice(1);
  })
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
  <meta name="description" content="Театралий :: {title} :: {description}" />
  <title>{post.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:description" content="{post.description} | Театралий" />
  <meta property="og:url" content="https://teatralium.com/{post.url}" />
  <meta property="og:image" content="https://teatralium.com{post.image}" />
  <link rel="canonical" href="https://teatralium.com/{post.url}" />
  <meta property="og:title" content={post.title} />
  <meta
    name="keywords"
    content="Театралий, Театр, Современный Театр, Несовременный Театр, {post.title
      .split(' ')
      .filter(i => i.length > 1)
      .join(',')}" />
</svelte:head>

{#if !hasCover}
  <div class="mb-6 cover mx-auto flex flex-col justify-center {coverClass}">
    <h1 class="text-center uppercase mb-10 pt-10">
      <span class={subClass}>
        {@html customTitle || title.split(':')[0]}
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
        class="object-cover elevation-0 opacity-75 h-screen" />
    {:else if name === 'miloserdie'}
      <div
        alt={post.title}
        style="background-image: linear-gradient(white, #D473D4, black),
        url(/images/miloserdie/cover.jpg); background-blend-mode: difference;"
        class="bg-repeat h-screen" />
    {:else if name === 'playlist_komissara_vsevoloda_lisovskogo'}
      <div
        alt={post.title}
        style="background-image: linear-gradient(black, #D473D4),
        url(/images/otvechaet/lisovsky.gif); background-blend-mode: multiply;"
        class="bg-repeat h-screen opacity-50" />
    {:else if name === 'ya_posadil_derevo'}
      <div
        alt={post.title}
        style="background-image: linear-gradient(black, #D473D4),
        url(/images/otvechaet/avdeev_cover.jpg); background-blend-mode:
        multiply;"
        class="bg-repeat h-screen" />
    {:else if name === 'i_bratva_za_slova_otvechaet'}
      <div
        alt={post.title}
        style="background-image: linear-gradient(black, #D473D4),
        url(/images/otvechaet/elutin.jpg); background-blend-mode: multiply;"
        class="bg-repeat h-screen" />
    {:else if name === 'poteryanniy_kray'}
      <div
        alt={post.title}
        style="background-image: linear-gradient(black, #c960c9),
        url(/images/bogomolov/bogomolov_cover.jpg); background-blend-mode:
        multiply;"
        class="bg-repeat h-screen" />
    {:else if name === 'vsyo_dvizhetsya'}
      <div
        alt={post.title}
        style="background-image: linear-gradient(black, #D473D4),
        url(/images/shmykova/small.jpg); background-blend-mode: multiply;"
        class="bg-repeat h-screen" />
    {:else if name === 'pahom'}
      <div
        alt={post.title}
        style="background-image: linear-gradient(black, #D473D4),
        url(g/images/pahom/cover-600.jpg); background-blend-mode: multiply;"
        class="bg-repeat h-screen" />
    {:else if name === 'nogi_zatekayut'}
      <Image
        src="images/nogi/cover.jpg"
        alt={post.title}
        class="object-cover elevation-0 h-screen" />
    {:else if name === 'dokumentalnaya_horeografiya'}
      <Image
        src="images/dok_hor/cover.jpg"
        alt={post.title}
        class="object-cover elevation-0 h-screen" />
    {:else if name === 'zloveschaya_dolina'}
      <Image
        src="images/zloveschaya_dolina/cover.jpg"
        alt={post.title}
        class="object-cover elevation-0 h-screen" />
    {:else if name === '28dney'}
      <Image
        src="images/28dney/cover5.jpg"
        alt={post.title}
        class="object-cover elevation-0 h-screen" />
    {:else if name === 'ya_ne_boyus_skazat'}
      <Image
        src="images/yaneboyusskazat/cover.jpg"
        alt={post.title}
        class="object-cover elevation-0 h-screen" />
    {:else if name === 'iphuck'}
      <Image
        src="images/iphuck/333.jpg"
        alt={post.title}
        class="object-cover elevation-0 h-screen" />
    {:else if name === 'sheshepop'}
      <Image
        src="images/sheshepop/ccc.jpg"
        alt={post.title}
        class="object-cover elevation-0 h-screen" />
    {:else if name === 'vseh_toshnit'}
      <Image
        src="images/vseh_toshnit/cover.jpg"
        alt={post.title}
        class="object-cover elevation-0 h-screen" />
    {:else if name === 'pomolvka'}
      <Image
        src="images/pomolvka/cover3.jpg"
        alt={post.title}
        class="object-cover elevation-0 h-screen" />
    {:else if name === 'kritiki'}
      <Image
        src="images/kritiki/cover.jpg"
        alt={post.title}
        class="object-cover elevation-0 h-screen" />
    {:else if name === 'flanagan'}
      <Image
        src="images/hallie_flanagan/cover.jpg"
        alt={post.title}
        class="object-cover elevation-0 h-screen" />
    {:else if name === 'ya_rabotayu_v_teatre_zaytseva'}
      <Image
        src="images/zaytseva/cover-up.jpg"
        alt={post.title}
        class="object-cover elevation-0 h-screen" />
    {:else if name === 'contemporary_artists'}
      <Image
        class="object-cover"
        src="images/contemporary_artists/cover_contemporary.jpg"
        alt={post.title} />
    {:else if name === 'kon_ne_valyalsya'}
      <Image
        src="images/kon_ne_valyalsya/cover.jpg"
        alt={post.title}
        class="object-cover elevation-0 h-screen" />
    {:else if name === 'telegram_kanaly'}
      <Image
        src="images/telegram_kanaly/cover.jpg"
        alt={post.title}
        class="object-cover elevation-0 h-screen" />
    {:else if name === 'net_amnezii'}
      <Image
        src="images/sonet/2.jpg"
        alt={post.title}
        class="object-cover elevation-0 h-screen" />
    {:else if name === 'v_moskve_naprimer_analogov_net'}
      <Image
        src="images/naprimer/cover.jpg"
        alt={post.title}
        class="object-cover elevation-0 h-screen" />
    {:else if name === 'aktyora_nado_mordoy_v_govno'}
      <Image
        src="images/govno/cover.jpg"
        alt={post.title}
        class="object-cover elevation-0 h-screen" />
    {:else if name === 'neperevodimiy_russkiy_nadryv'}
      <Image
        src="images/np1.jpg"
        alt={post.title}
        class="object-cover elevation-0 h-screen" />
    {:else if name === 'nespyashie_v_teatre'}
      <div
        alt={post.title}
        style="background-image: linear-gradient(white, #D473D4),
        url(/images/nespyashie/zriteli/zritel-8.jpg); background-blend-mode:
        difference; background-size: 300px;"
        class="bg-repeat h-screen" />
    {:else if name === 'teatr_mody_v_sovetskoy_rossii'}
      <Image
        src="images/naryady/044.jpg"
        alt={post.title}
        class="object-cover elevation-0 h-screen" />
    {/if}
  </div>
{/if}

<div class="article-body" id={name}>
  <slot />
</div>

<Share {post} />

<HomeLink />

{#if bgColor}
  <ColoredBg colors={bgColor} />
{/if}
