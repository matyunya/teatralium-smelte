<script>
  import { goto } from "@sapper/app";
  import { fly } from "svelte/transition";
  import { TextField, Button, Dialog, Slider } from "smelte";

  export let key = "";
  export let repo = "";
  export let value = true;
  export let zoom;
  
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
    <Slider label="Zoom" bind:value={zoom} />
    <TextField error={keyError} label="Github authorization token" bind:value={key} />
    <TextField error={repoError} label="Repository name"  bind:value={repo} />
    <Button block color="primary" on:click={navigate}>OK</Button>
  </div>
</Dialog>