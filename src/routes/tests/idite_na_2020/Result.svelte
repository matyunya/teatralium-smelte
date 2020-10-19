<script>
  import results from "./results.js";
  import Share from "components/Share.svelte";

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
  <h3 class="font-mono">
    <small class="italic font-normal font-serif">идите на...</small><br> {winner.heading}
    <span class="font-5xl">{winner.emoji}</span>
  </h3>


  <div class="text-lg">{@html winner.text}</div>
{/if}

<Share url="tests/idite_na/{id}" />
