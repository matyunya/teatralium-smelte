<script>
  export let status;
  export let error;

  const dev = process.env.NODE_ENV === "development";
</script>

<style>
  h1,
  p {
    @apply mx-auto my-0;
  }
</style>

<svelte:head>
  <title>{status}</title>
</svelte:head>

<h1>{status}</h1>

<p>{error.message}</p>

{#if dev && error.stack}
  <pre>{error.stack}</pre>
{/if}

<div class="my-56">
  <marquee
    bgcolor="lavender"
    class="text-primary-a400 my-16 text-5xl bg-primary-100">
    П Р О И З О Ш Л А КАКАЯ_ТО УЖАСНАЯ О Ш И Б К А
  </marquee>
</div>
