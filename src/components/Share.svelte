<script>
  export let post = null;

  if (!post.url) {
    throw new Error("Share: no post url");
  }
</script>

<style>
  section {
    letter-spacing: 0.2rem;
    width: 600px;
    margin: 0 auto;
  }
</style>

<section class="flex justify-between items-center small-caps py-32 sm:flex-col">
  <span class="text-gray-600 text-sm px-3">поделиться:</span>
  <a
    class="gradient text-md px-3"
    href="https://www.facebook.com/sharer/sharer.php?u=https://www.teatralium.com/{post.url}">
    facebook
  </a>
  <a
    class="gradient text-md px-3"
    href="http://vkontakte.ru/share.php?url=https://www.teatralium.com/{post.url}">
    vkontakte
  </a>
</section>
