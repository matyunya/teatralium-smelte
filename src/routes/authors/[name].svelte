<script context="module">
  import posts from "components/articles.js";

	export async function preload(page, session) {
		const { name } = page.params;

		const filtered = posts.filter(a => (a.author || '').includes(name));

		return {
			posts: filtered,
			name: filtered[0].author, 
		};
	}
</script>

<script>
	import PostPreview from "components/PostPreview.svelte";
	import Authors from "components/Authors.svelte";
	export let posts;
	export let name;
</script>

<svelte:head>
	<title>{name}</title>
</svelte:head>

<h5 class="text-center">Автор: {name}</h5>

<section>
	{#each posts as post}
		<PostPreview {post} />
	{/each}
</section>

<section class="pt-16">
	<h6>Все авторы:</h6>
	<Authors />
</section>