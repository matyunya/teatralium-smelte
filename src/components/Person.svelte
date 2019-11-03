<script>
  export let name = "";
  export let quote = "";
  export let funny = false;
</script>

<style>
  .funny {
    text-shadow: -10px 0 rgba(0, 255, 255, 0.2), 10px 0 rgba(255, 0, 255, 0.2);
    @apply font-normal uppercase text-2xl tracking-widest;
  }
</style>

<div class="bg-gray-800 p-16 mt-32 text-white text-center elevation-10 mb-16">
  <section>
    <h4 class="my-8" class:funny>{quote}</h4>
    <div class="w-64 mx-auto">
      <slot />
    </div>
    <div class="text-gray-300 italic text-sm pt-4">{name}</div>
  </section>
</div>
