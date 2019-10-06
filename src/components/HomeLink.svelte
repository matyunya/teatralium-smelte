<script>
  import { fly } from "svelte/transition";
</script>

<style>
  @keyframes spin {
    0% {
      color: rgba(0, 255, 255, 1);
    }

    50% {
      color: rgba(255, 0, 255, 1);
    }

    0% {
      color: rgba(0, 255, 255, 1);
    }
  }
  a {
    color: rgba(0, 255, 255, 1);
    animation: spin 4s infinite;
  }
</style>

<div class="flex justify-center" in:fly={300}>
  <a class="no-underline text-5xl" href="/">♦</a>
</div>
