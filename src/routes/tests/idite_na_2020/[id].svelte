<script context="module">
	export async function preload(page) {
    const { id } = page.params;

		return { id };
	}
</script>

<script>
	import Result from "./Result.svelte";

	export let id;
</script>

<section class="mb-24">
  <Result {id} />
</section>
