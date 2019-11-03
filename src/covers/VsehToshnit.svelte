<script>
  import Image from "svelte-image";

  import Date from "components/Date.svelte";
</script>

<style>
  .bg {
    z-index: -10;
    height: calc(100vh - 200px);
  }
</style>

<section class="mb-6 h-screen relative text-white">
  <h1 class="text-left uppercase mt-32 mb-16 text-black">Голубой сад</h1>
  <h2 class="text-left small">
    <span class="bg-black">
      Темы гендера и&nbsp;сексуальности в российском театре
    </span>
  </h2>
</section>

<div class="absolute w-screen top-0 left-0 bg">
  <Image alt="blok" src="images/vseh_toshnit/cover.jpg" />
</div>
