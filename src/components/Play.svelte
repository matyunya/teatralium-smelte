<script context="module">
  let widget;
</script>

<script>
  import { onMount } from "svelte";
  import { Button, Icon } from "smelte";
  import { scale } from "svelte/transition";
  import { playing, paused } from "../routes/_layout.svelte";

  export let mix = "";

  $: src = `/Teatralium/${mix}/`;
</script>

<div class="flex items-center justify-center my-10 mb-20">
  <span class="rounded-full bg-white-transLight px-4">
    <iframe
      title="player"
      class="w-full"
      height="400"
      src="https://www.mixcloud.com/widget/iframe/?light=1&autoplay=0&feed={src}"
      frameborder="0"
      allow="autoplay" />
  </span>
</div>
