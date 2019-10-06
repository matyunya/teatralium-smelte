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

  import Title from "components/Title.svelte";

  import {
    right,
    elevation,
    persistent,
    showNav,
    showNavMobile,
    breakpoint
  } from "smelte/src/stores.js";

  const { preloading, page } = stores();

  let selected = "";
  const bp = breakpoint();
  $: path = $page.path;
</script>

<svelte:head>
  <title>Театралии всех стран, соединяйтесь!</title>
  <meta name="mobile-web-app-capable" content="yes"/>
  <meta name="description" content="Театралии всех стран, соединяйтесь!"/>
  <meta name="keywords" content="театр, театралий, teatralium, современный театр, несовременный театр"/>
  <meta property="fb:app_id" content="1528916173863908"/>
  <meta name="msapplication-TileColor" content="#ffffff"/>
  <meta name="theme-color" content="#ffffff"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta property="og:title" content="«Театр — единственная возможность цивилизованной дискуссии» | Театралий"/>
  
  <link rel="sitemap" type="application/xml" href="//sitemap.xml"/>
</svelte:head>

{#if $preloading}
  <ProgressLinear app />
{/if}

<Title />

<main
  class="mx-auto mb-40 mt-6 relative"
>
  <slot />
</main>