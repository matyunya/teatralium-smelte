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
    const q = document.getElementById('q-' + $current);
    if (q) q.scrollIntoView();
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
</style>

{#if $current === 0}
  <p class="lead">
    А вот и традиционное гадание «Театралия». В России, несмотря ни на что, стартовал новый театральный сезон. Ответьте на вопросы и узнайте, с какого спектакля начать его будет приятнее всего.
  </p>
{/if}

<div class="py-16 text-lg bg-primary-50">
  <section>
    {#each questions as question, idx}
      <div class:block={idx === $current} class:hidden={idx !== $current}>

        <div id="q-{idx}" class="mb-4 font-bold font-mono text-lg">
          {question.question}
        </div>

        <div class="italic text-base text-center font-sans font-normal">{idx + 1}/8</div>

        <ul class="text-black list-none mx-0 mt-4">
          {#each question.answers as [answer, text]}
            <li class="mb-2 ml-0">
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
