<script>
  import Image from "svelte-image";
</script>

<style>
  .bg {
    z-index: -10;
    height: calc(100vh - 120px);
  }
</style>

<section class="mb-6 h-screen relative text-white">
  <h1 class="text-left uppercase mt-32 mb-16">
    <span class="bg-black">Актеры труппы на отлете</span>
  </h1>
  <h2 class="text-left small">
    <span class="bg-black">
      Александр Блок о репертуаре государственных театров
    </span>
  </h2>
</section>

<div class="absolute w-screen top-0 left-0 bg">
  <Image alt="blok" src="images/blok/cover.jpg" />
</div>
