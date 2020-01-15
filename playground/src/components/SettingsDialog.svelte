<script>
  import { goto } from "@sapper/app";
  import { fly } from "svelte/transition";
  import { TextField, Button, Slider } from "smelte";
  import Dialog from "./Dialog.svelte";

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

<Dialog title="Settings" bind:value persistent>
  <Slider label="Zoom" bind:value={zoom} />
  <TextField outlined error={keyError} label="Github authorization token" bind:value={key} />
  <TextField outlined error={repoError} label="Repository name"  bind:value={repo} />
  <Button block color="primary" on:click={navigate}>OK</Button>
</Dialog>