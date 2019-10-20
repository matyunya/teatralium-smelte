<script>
  import { Chip } from "smelte";
  import { fly } from "svelte/transition";
  import { goto } from "@sapper/app";

  import PostPreview from "components/PostPreview.svelte";
  import articles from "components/articles.js";

  export let selected = false;

  $: filtered = selected ? articles.filter(a => a.type === selected) : articles;

  function toggle(type) {
    return () => {
      if (type === "us") goto("/about");

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
    class="flex items-center justify-between font-sans mx-auto"
    style="width: 600px">
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
  {#each filtered as post}
    <PostPreview {post} />
  {/each}
</div>

<slot />
