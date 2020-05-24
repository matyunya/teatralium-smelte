<script>
  export let status;
  export let error;

  const dev = process.env.NODE_ENV === "development";
</script>


<svelte:head>
  <title>{status}</title>
</svelte:head>

<div class="container mx-auto">
  <h1>{status}</h1>

  <p>{error.message}</p>

  <h2>****Попробуйте перезагрузить компьютер****</h2>

  {#if dev && error.stack}
    <pre>{error.stack}</pre>
  {/if}
</div>

<div class="my-56">
  <marquee
    bgcolor="lavender"
    class="text-primary-a400 my-16 text-5xl bg-primary-100">
    П Р О И З О Ш Л А КАКАЯ_ТО УЖАСНАЯ О Ш И Б К А
  </marquee>
</div>
