<script>
  import { stores } from "@sapper/app";
  import { onMount } from "svelte";

  import Tabs from "components/Tabs";
  import Button from "components/Button";
  import { Spacer } from "components/Util";
  import List from "components/List";
  import ListItem from "components/List/ListItem.svelte";
  import NavigationDrawer from "components/NavigationDrawer";
  import ProgressLinear from "components/ProgressLinear";

  import PostList from "components/PostList.svelte";
  import Title from "components/Title.svelte";
  import HomeLink from "components/HomeLink.svelte";

  export let segment;

  const { preloading, page } = stores();

  $: path = $page.path;
</script>

<svelte:head>
  <title>Театралии всех стран, соединяйтесь!</title>
  <meta name="mobile-web-app-capable" content="yes" />
  <meta name="description" content="Театралии всех стран, соединяйтесь!" />
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
    content="«Театр — единственная возможность цивилизованной дискуссии» |
    Театралий" />

  <link rel="sitemap" type="application/xml" href="//sitemap.xml" />
</svelte:head>

{#if $preloading}
  <ProgressLinear app />
{/if}

<Title />

<main class="mx-auto mb-40 mt-4 md:mt-0">
  {#if segment === 'about'}
    <PostList type={segment} />
  {/if}

  <slot />

  {#if segment !== 'about'}
    <PostList type={segment} />
  {/if}
</main>
