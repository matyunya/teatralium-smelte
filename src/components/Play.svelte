<script>
  import { Button, Icon } from "smelte";

  export let mix = "";
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
