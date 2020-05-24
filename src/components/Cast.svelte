<style>
  .cast {
    @apply p-2 mb-10 px-4 pr-8 py-10 border border-primary-900;
  }

  :global(.cast strong) {
    @apply small-caps text-sm text-color-unset text-black border-none;
  }

  :global(.cast ul) {
    color: black;
  }

  :global(.cast ul li) {
    font-size: 0.9rem;
    padding-bottom: 0.45rem;
  }
</style>

<div class="cast font-mono">
  <h5 class="pt-4 italic text-center text-xl uppercase tracking-widest mb-8">Создатели</h5>
  <slot />
</div>
