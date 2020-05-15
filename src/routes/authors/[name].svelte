<script context="module">
  import allPosts from "components/articles.js";
  import translit from "components/translit.js";

	export async function preload(page, session) {
		const { name } = page.params;

		const filtered = ["tenkova", "boyko"].includes(name)
			? allPosts.filter(a => a.url === 'articles/nogi_zatekayut')
			: allPosts.filter(a => translit(a.author || '').includes(name));

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

<section class="pt-16 pb-32">
	<h6>Все авторы:</h6>
	<Authors />
</section>
