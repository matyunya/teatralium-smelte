<script>
  import { onMount, onDestroy } from "svelte";

  export let colors = "";

  onMount(() => {
    if (!process.browser) return;

    document.body.style.background = `linear-gradient(white, white, ${colors})`;
  });

  onDestroy(() => {
    if (!process.browser) return;

    document.body.style.background = "transparent";
  });
</script>
