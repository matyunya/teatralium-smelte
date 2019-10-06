<script>
  import { fly } from "svelte/transition";
</script>

<div in:fly={{ delay: 100 }} class="mb-6 h-screen">
  <h1 class="text-center uppercase">Что хотел сказать автор?</h1>
  <h2 class="text-center small">Отвечает Эжен Ионеско.</h2>
</div>