<script context="module">
  import { writable } from "svelte/store";

  export const playing = writable(false);
  export const paused = writable(false);

  let widget;
</script>

<script>
  import { stores } from "@sapper/app";
  import { onMount } from "svelte";
  import { scale } from "svelte/transition";
  import ProgressLinear from "components/ProgressLinear";

  import PostList from "components/PostList.svelte";
  import Title from "components/Title.svelte";

  export let segment;

  onMount(() => {
    window.history.scrollRestoration = "auto";
  });

  const { preloading, page } = stores();
</script>

<svelte:head>
  <title>Интересней, чем в театре</title>
  <meta name="mobile-web-app-capable" content="yes" />
  <meta name="description" content="Интересней, чем в театре" />
  <meta
    name="keywords"
    content="театр, театралий, teatralium, современный театр, несовременный
    театр" />
  <meta property="fb:app_id" content="1528916173863908" />
  <meta name="msapplication-TileColor" content="#ffffff" />
  <meta name="theme-color" content="#ffffff" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta
    property="og:title"
    content="Театралий *** Интересней, чем в театре ***" />

  <link rel="sitemap" type="application/xml" href="//sitemap.xml" />
</svelte:head>

{#if $playing}
  <button
    transition:scale
    class="fixed top-0 right-0 mr-20 mt-20"
    on:click={() => ($paused = !$paused)}>
    <i
      class="material-icons text-2xl opacity-50 hover:opacity-100 transition
      text-primary-500 hover:text-secondary-500">
      {$paused ? 'play_arrow' : 'pause'}
    </i>
  </button>
{/if}

{#if $preloading}
  <ProgressLinear app />
{/if}

<Title />

<a class="hidden" href="/taboo_na_nelyubov">dd</a>

<main class="mx-auto mb-0 mt-4 md:mt-0">
  {#if ['about', 'authors'].includes(segment)}
    <PostList type={segment} {page} />
  {/if}

  <slot />

  {#if !['about', 'authors'].includes(segment)}
    <PostList type={segment} {page} />
  {/if}
</main>

<div class="mt-16">
  <marquee bgcolor="lavender" class="uppercase text-primary-500">
    ***** Пишите нам на
    <a href="mailto:meow@teatralium.com">meow@teatralium.com</a>
    *****
  </marquee>
</div>
