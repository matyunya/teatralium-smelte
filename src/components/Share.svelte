<script>
  export let url = null;

  if (!url) {
    throw new Error("Share: no post url");
  }
</script>

<style>
  section {
    letter-spacing: 0.2rem;
    margin: 0 auto;
  }
</style>

<section class="pt-16 mb-2">

  <div class="bg-primary-100 p-1 font-mono text-center py-12">
    <img
      src="https://s3.amazonaws.com/pbblogassets/uploads/2020/04/19153018/Vaporwave-and-Synthwave-Free-Pack-VHS-Look.gif"
      alt="ПОДПИСЫВАЙТЕСЬ НА НАС В ТЕЛЕГРАМЕ"
      class="w-48 mx-auto rounded-lg my-8" />
    ПОДПИСЫВАЙТЕСЬ НА НАС В ТЕЛЕГРАМЕ:
    <a href="https://t.me/teatralium" class="tracking-tight">t.me/teatralium</a>
  </div>

</section>

<section class="flex justify-between items-center small-caps py-32 flex-col">
  <span class="text-gray-600 text-sm px-3">поделиться:</span>
  <a
    class="gradient text-md px-3"
    href="https://www.facebook.com/sharer/sharer.php?u=https://www.teatralium.com/{url}">
    facebook
  </a>
  <a
    class="gradient text-md px-3"
    href="http://vkontakte.ru/share.php?url=https://www.teatralium.com/{url}">
    vkontakte
  </a>
</section>
