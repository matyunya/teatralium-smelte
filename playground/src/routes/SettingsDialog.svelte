<script>
  import { goto } from "@sapper/app";
  import { fly } from "svelte/transition";
  import { TextField, Button, Dialog } from "smelte";

  export let key = "";
  export let repo = "";
  export let value = true;
  
  let keyError = "";
  let repoError = "";

  function navigate() {
    if (!key) {
      keyError = "Field is required";
      return;
    }
    if (!repo) {
      repoError = "Field is required";
      return;
    }

    goto(`/?key=${key}&repo=${repo}`);

    value = false;
  }
</script>

<Dialog bind:value persistent>
  <div style="width: 500px" class="relative">
    <TextField error={keyError} label="Github authorization token" bind:value={key} />
    <TextField error={repoError} label="Repository name"  bind:value={repo} />
    <Button color="primary" class="float-right" on:click={navigate}>OK</Button>
  </div>
</Dialog>