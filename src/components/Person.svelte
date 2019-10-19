<script>
  export let name = "";
  export let quote = "";
</script>

<div class="bg-gray-800 p-16 text-white text-center elevation-10 mb-16">
  <section>
    <h4 class="my-8">{quote}</h4>
    <div class="w-64 mx-auto">
      <slot />
    </div>
    <div class="text-gray-300 italic text-sm pt-4">{name}</div>
  </section>
</div>
