<script>
  import { fly } from "svelte/transition";

  export let post = null;
</script>

<div class="small-caps text-center text-sm py-6 font-sans" in:fly={{ delay: 150 }}>
  {post.date}, текст:&nbsp;<b>{post.author}</b>
</div>