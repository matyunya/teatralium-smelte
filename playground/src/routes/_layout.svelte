<script>

</script>

<style>
  main {
    height: 100vh;
    overflow: hidden;
  }
</style>

{#if process.browser}
  <main>
    <slot />
  </main>
{/if}
