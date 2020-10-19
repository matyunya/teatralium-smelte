<script>
  import questions from "./questions.js";
  import { writable } from "svelte/store";
  import { goto } from '@sapper/app';

  const current = writable(0);
  const winner = writable(false);

  let currentAnswer, answers = new Set();

  $: if ($current && currentAnswer !== undefined) {
    answers.add(currentAnswer);
    currentAnswer = undefined;

    if (window.innerWidth < 768) {
      const q = document.getElementById('q-' + $current);
      if (q) q.scrollIntoView();
    }
  }

  $: if ($current === 8) {
    const res = [...answers].map(i => i.split(':')[1]);

    $winner = res.sort((a, b) => res.filter(i => i === a).length - res.filter(i => i === b).length).pop();
    goto("/tests/idite_na_2020/" + $winner);
  }
</script>

<svelte:head>
  <script defer src="https://www.tiktok.com/embed.js"></script>
</svelte:head>

<style>
  li:hover {
    @apply italic;
  }

  @media screen and (min-width: 768px) {
    .half {
      @apply w-1/2 px-1;
    }
    .half-wrapper {
      @apply flex flex-wrap;
    }
  }
</style>

{#each "abcde" as res}
  <a href="/tests/idite_na_2020/{res}" class="hidden">{res}</a>
{/each}

{#if $current === 0}
  <p class="lead">
    А вот и традиционное гадание «Театралия». В России, несмотря ни на что, стартовал новый театральный сезон. Ответьте на вопросы и узнайте, с какого спектакля начать его будет приятнее всего.
  </p>
{/if}

<div class="py-16 text-lg bg-primary-50">
  <section>
    {#each questions as question, idx}
      <div class:block={idx === $current} class:hidden={idx !== $current}>
        <div id="q-{idx}" class="italic text-base text-center font-sans font-normal mb-2">{idx + 1}/8</div>

        <div class="mb-4 font-bold font-mono text-lg">
          {question.question}
        </div>

        <ul class="text-black list-none mx-0 mt-4" class:half-wrapper={idx === 5}>
          {#each question.answers as [answer, text]}
            <li class="mb-2 ml-0" class:half={idx === 5}>
              <input
                class="cursor-pointer mr-3"
                type="radio"
                on:change={() => $current += 1}
                bind:group={currentAnswer}
                value="{idx}:{answer}"
                id={answer}
              >
              <label class="cursor-pointer select-none" for={answer}>{@html text}</label>
            </li>
          {/each}
        </ul>
      </div>
    {/each}
  </section>
</div>
