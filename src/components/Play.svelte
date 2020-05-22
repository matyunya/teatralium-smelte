

<script>
  import { Button, Icon } from "smelte";
  import { playing } from "../routes/_layout.svelte";

  export let mix = "";

  let player = null;

  $: src = `https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&autoplay=1&feed=/Teatralium/${mix}/`;

</script>

<button
  class="w-32 mx-auto relative overflow-hidden rounded-full"
  on:click={() => {
    if ($playing === src) {
      $playing === false;
    } else {
      $playing = src;
    }
  }}
>
  <Icon class="text-5xl text-primary-a400">play_circle_outline</Icon>
</button>

