<script>
  import { goto } from "@sapper/app";
  import { fly } from "svelte/transition";
  import { TextField, Button, Dialog } from "smelte";

  export let key = "";
  export let repo = "";
  export let value = true;

  function navigate() {
    goto(`/?key=${key}&repo=${repo}`);

    value = false;
  }
</script>

<Dialog bind:value persistent>
  <div style="width: 500px">
    <TextField label="Github authorization token" bind:value={key} />
    <TextField label="Repository name"  bind:value={repo} />
    <Button color="primary" class="float-right" on:click={navigate}>OK</Button>
  </div>
</Dialog>