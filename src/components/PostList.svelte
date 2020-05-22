<script>
  import { Chip, Icon } from "smelte";
  import { fly } from "svelte/transition";

  import PostPreview from "components/PostPreview.svelte";
  import Masks from "components/Masks.svelte";
  import HomeLink from "components/HomeLink.svelte";
  import articles from "components/articles.js";

  export let type = false;
  export let page = false;

  const segmentTypes = {
    articles: "article",
    interviews: "interview",
    music: "mix",
    plays: "play",
    reviews: "review",
    about: "about"
  };

  const chips = [
    {
      href: "/articles/",
      label: "Тексты",
      icon: "directions_run",
      type: "article"
    },
    {
      href: "/interviews/",
      label: "Интервью",
      icon: "call",
      type: "interview"
    },
    {
      href: "/music/",
      label: "Миксы",
      icon: "play_circle_filled",
      type: "mix"
    },
    { href: "/plays/", label: "Пьесы", icon: "local_bar", type: "play" },
    {
      href: "/reviews/",
      label: "«Рицензии»",
      icon: "restaurant_menu",
      type: "review"
    },
    { href: "/about/", label: " ", icon: "pets", type: "about" }
  ];

  $: items = (type
    ? articles.filter(a => a && a.type === segmentTypes[type])
    : articles
  ).filter(a => !$page.path.includes(a.url));
</script>

<section class="mt-5">
  <div
    in:fly={{ delay: 100 }}
    class="flex items-center justify-around mx-auto w-full flex-wrap">
    {#each chips as chip}
      <span class="my-2">
        <a href={segmentTypes[type] === chip.type ? '/' : chip.href}>
          {#if chip.type === 'about'}
            <Icon
              class="ml-2 rounded-full hover:bg-primary-100 bg-gray-300 text-sm
              p-3">
              pets
            </Icon>
          {:else}
            <Chip
              add="uppercase"
              selected={segmentTypes[type] === chip.type}
              selectable={false}
              icon={chip.icon}>
              {chip.label}
            </Chip>
          {/if}
        </a>
      </span>
    {/each}
  </div>
</section>

<div class="md:pl-10 text-left flex flex-col mt-10 md:mt-32">
  {#each items as post, i}
    <PostPreview {post} {i} />
    {#if i % 5 === 0 && i > 1}
      <Masks />
    {/if}
  {/each}
</div>
