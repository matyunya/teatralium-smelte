<script>
  import { fly } from "svelte/transition";

  
</script>

<style>
  :global(.gradient) {
    text-transform: uppercase;
    letter-spacing: 0.5em;
    background: #333399;
    background: linear-gradient(to bottom, blue, #DF00FF, #DF00FF);
    font-weight: 100;
    background-clip: text;
    vertical-align: middle;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>

<a in:fly class="no-underline" href="/">
  <div class="flex items-center justify-center">
    <h4 class="gradient pt-0 mt-3">
      ♦Театралий♦
    </h4>
  </div>
</a>