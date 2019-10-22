<script>
  import { Chip } from "smelte";
  import Waypoint from "svelte-waypoint";
  import { fly } from "svelte/transition";
  import { goto } from "@sapper/app";

  import PostPreview from "components/PostPreview.svelte";
  import articles from "components/articles.js";

  export let selected = false;

  let page = 1;

  $: filtered = selected ? articles.filter(a => a.type === selected) : articles;
  $: items = filtered.slice(0, page * 10);

  function toggle(type) {
    return () => {
      if (type === "us") {
        goto("/about");
      } else {
        goto("/");
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
    class="flex items-center justify-around font-sans mx-auto w-full flex-wrap"
  >
    {#each chips as chip}
      <Chip
        selected={selected === chip.name}
        selectable={false}
        icon={chip.icon}
        on:click={toggle(chip.name)}>
        {chip.label}
      </Chip>
    {/each}
  </div>
</section>

<div class="pl-10 text-left flex flex-col mt-32">
  {#each items as post}
    <PostPreview {post} />
  {/each}
</div>

<Waypoint on:enter={() => (page += 1)} once={false} />
<slot />
