<script>
  import { Chip } from "smelte";
  import Waypoint from "svelte-waypoint";
  import { fly } from "svelte/transition";
  import { goto } from "@sapper/app";

  import PostPreview from "components/PostPreview.svelte";
  import Masks from "components/Masks.svelte";
  import HomeLink from "components/HomeLink.svelte";
  import articles from "components/articles.js";

  export let selected = false;

  let page = 1;

  $: items = selected ? articles.filter(a => a.type === selected) : articles;
  // $: items = selected ? filtered.slice(0, page * 5) : filtered.slice(0, 5);
  // $: items = filtered.slice(0, page * 5);

  function toggle(type) {
    return () => {
      if (type === "us") {
        goto("/about");
      }

      return (selected = selected === type ? false : type);
    };
  }

  const chips = [
    { name: "article", label: "Тексты", icon: "directions_run" },
    { name: "interview", label: "Интервью", icon: "call" },
    { name: "mix", label: "Миксы", icon: "play_circle_filled" },
    { name: "play", label: "Пьесы", icon: "local_bar" },
    { name: "review", label: "«Рицензии»", icon: "restaurant_menu" },
    { name: "us", label: "Мы", icon: "pets" }
  ];
</script>

<section>
  <div
    in:fly={{ delay: 100 }}
    class="flex items-center justify-around font-sans mx-auto w-full flex-wrap">
    {#each chips as chip}
      <span class="my-2">
        <Chip
          selected={selected === chip.name}
          selectable={false}
          icon={chip.icon}
          on:click={toggle(chip.name)}>
          {chip.label}
        </Chip>
      </span>
    {/each}
  </div>
</section>

<div class="md:pl-10 text-left flex flex-col md:mt-32 sm:mt-10">
  {#each items as post, i}
    <PostPreview {post} />
    {#if i % 5 === 0 && i > 1}
      <Masks />
    {/if}
  {/each}
</div>

<slot />

<HomeLink />
