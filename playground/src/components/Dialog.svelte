<script>
  import { Dialog, Icon, Spacer } from "smelte";

  export let value = false;
  export let persistent = false;
  export let title = "new_article";
</script>

<Dialog
  {persistent}
  wrapperClasses="items-center z-50 rounded bg-white elevation-4"
  bind:value>
  <div class="flex bg-black p-4 text-secondary-a100 font-mono" slot="title">
    <small>{title}</small>
    
    <Spacer />
    <Icon
      small
      color={persistent ? "inherit" : "gray"}
      class="hover:text-white {persistent ? "cursor-pointer" : ""}"
      on:click={() => value = false}
    >close</Icon>
  </div>
  <div style="width: 500px" class="relative p-4">
    <slot />
  </div>
</Dialog>