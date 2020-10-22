<script>
  import results from "./results.js";

  const mapping = 'abcde';

  export let id;

  $: winner = results[mapping.indexOf(id)];
</script>

<svelte:head>
  <meta property="og:image" content={winner.image} />
  <meta property="og:title" content={winner.share} />
  <meta property="og:description" content={winner.desc} />
</svelte:head>

{#if winner}
  <h4 class="font-xl font-serif">Идите на...</h4>
  <div class="font-mono border-dashed border-alert-800 border-4 p-4">
    <h3 class="text-center font-mono text-3xl">{winner.heading}</h3>

    <div class="text-lg text-secondary-700 font-mono mt-8">
      <div class="text-center" style="font-size: 12rem; line-height: 1.2">{winner.emoji}</div>
      {@html winner.text}
    </div>
  </div>
{/if}

<section class="flex border-secondary-300 border-4 p-4 justify-between items-center mb-32 mt-12 flex-col">
  <span class="text-gray-600 text-xl uppercase font-bold px-3">поделитесь результатом:</span>
  <a
    class="gradient text-lg md:text-2xl px-3"
    href="https://www.facebook.com/sharer/sharer.php?u=https://www.teatralium.com/tests/idite_na_2020/{id}">
    facebook
  </a>
  <a
    class="gradient text-lg md:text-2xl px-3"
    href="http://vkontakte.ru/share.php?url=https://www.teatralium.com/tests/idite_na_2020/{id}">
    vkontakte
  </a>
</section>
