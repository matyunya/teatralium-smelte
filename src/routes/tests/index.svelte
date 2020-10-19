<script>
  import { fly } from "svelte/transition";
</script>

<div transition:fly>
  <slot />
</div>
