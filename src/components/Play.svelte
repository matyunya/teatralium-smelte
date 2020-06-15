<script>
  import { Button, Icon } from "smelte";
  import { scale } from "svelte/transition";
  import { playing, paused } from "../routes/_layout.svelte";

  export let mix = "";

  let player = null;
  $: console.lo;

  $: src = `/Teatralium/${mix}/`;
</script>

<div class="flex items-center justify-center my-10 mb-20">
  <span class="rounded-full bg-white-transLight px-4">
    <button
      transition:scale
      class="w-64 rounded-full m-auto select-none"
      on:click={() => {
        if ($playing !== src) {
          $playing = src;
          $paused = false;
        } else {
          $paused = !$paused;
        }
      }}>
      <i
        class="material-icons text-5xl transition text-primary-500
        hover:text-secondary-500">
        {$playing === src && !$paused ? 'pause' : 'play_arrow'}
      </i>
    </button>
  </span>
</div>
