<style>
  .cast {
    background: linear-gradient(lavender, lightGrey);
    @apply p-2 elevation-4 mb-10 px-4;
  }

  :global(.cast em) {
    @apply small-caps text-sm text-color-unset border-none;
  }

  :global(.cast ul) {
    color: black;
  }

  :global(.cast ul li) {
    font-size: 0.9rem;
    padding-bottom: 0.45rem;
  }
</style>

<div class="cast">
  <h5 class="pt-4 italic text-center">Создатели</h5>
  <slot />
</div>
