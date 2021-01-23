<script>
  import { Chip, Icon } from "smelte";
  import { fly } from "svelte/transition";

  import PostPreview from "components/PostPreview.svelte";
  import Masks from "components/Masks.svelte";
  import articles from "components/articles.js";

  export let type = false;
  export let page = false;

  const segmentTypes = {
    articles: "article",
    interviews: "interview",
    music: "mix",
    plays: "play",
    reviews: "review",
    about: "about",
    tests: "test"
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
    {
      href: "/tests/",
      label: "Тесты",
      icon: "rowing",
      type: "test"
    },
    { href: "/about/", label: " ", icon: "pets", type: "about" }
  ];

  $: items = (type
    ? articles.filter(a => a && a.type === segmentTypes[type])
    : articles
  ).filter(a => !$page.path.includes(a.url));
</script>

<div class="mt-5 max-w-4xl mx-auto">
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
</div>

{#if $page && $page.path === '/'}
  <div
    class="w-full px-2 font-mono tracking widest pb-8"
    style="background: #FFF00A">
    <a href="/taboo_na_nelyubov/" class="no-underline">
      <section>
        <h2
          class="font-mono text-3xl uppercase tracking-widest text-center mb-8
          pt-8">
          «Табу на нелюбовь»
        </h2>
        <div class="text-center mb-8 text-sm">
          Спецпроект «Театралия» и Фонда «Четверг»
        </div>
        <div
          class="flex flex-col md:flex-row items-center justify-center text-sm">
          <img
            src="https://i.postimg.cc/Y0kZjMbT/2020-12-02-23-22-30.png"
            alt="ppPPp"
            class="w-64 mx-auto hued rounded-full skewed elevation-0 px-8" />
          <div class="mt-4 md:mt-0">
            <div>
              Общество требует от детей безусловной любви к родителям, от
              родителя — автоматической любви к своему ребенку. Нелюбовь к детям
              табуирована, и мы пытаемся понять, что нам делать с этим табу.
              Наши авторы — театроведы, блогеры, драматурги, режиссеры, родители
              и нет — разбираются, как говорить о сложных темах в театре, и
              делятся опытом. А мы ждем ваши пьесы, лучшая из которых будет
              поставлена.
            </div>
          </div>
        </div>
      </section>
    </a>
  </div>
{/if}

<div
  class="text-left flex flex-col mt-10"
  class:md:mt-32={!$page || $page.path !== '/'}>
  {#each items as post, i}
    <PostPreview {post} {i} />
    {#if i % 5 === 0 && i > 1}
      <Masks />
    {/if}
  {/each}
</div>
