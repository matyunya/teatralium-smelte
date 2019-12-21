<script>
  import { Button, Icon } from "smelte";

  export let mix = "";

  let player = null;

  async function enableMix() {
    if (!window) return;

    player = await window.Mixcloud.FooterWidget(`/Teatralium/${mix}/`, {
      light: true,
      hide_artwork: true,
      autoplay: false
    });
  }

  $: if (mix) enableMix();
</script>

<div class="w-32 mx-auto relative overflow-hidden rounded-full pb-16">
  <Button
    class="mx-auto w-32 relative overflow-hidden"
    text
    light
    flat
    data-mixcloud-play-button="/Teatralium/{mix}/">
    <Icon
      style="animation: spin 4s infinite;"
      class="text-5xl text-primary-a400">
      play_circle_outline
    </Icon>
  </Button>
</div>
