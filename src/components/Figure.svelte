<script>
  export let author = "";
</script>

<figure class="mb-16 mt-8">
  <blockquote class="pl-8 italic {$$props.class || ''}">
    <slot />
  </blockquote>

  <figcaption class="text-sm text-right">
    <slot name="author">{author && author || ''}</slot>
  </figcaption>
</figure>
