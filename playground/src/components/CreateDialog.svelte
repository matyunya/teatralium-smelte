<script>
  import { createEventDispatcher } from 'svelte';
  import { TextField, Button, Dialog, Treeview, notifier, Icon, Spacer } from "smelte";
  import { update } from "../github";

  export let key = "";
  export let repo = "";
  export let value = false;
  export let zoom;
  export let items = [];
  export let title = "new_article";
  export let path = "";

  let keyError = "";

// TODO: templates
  const content = `---
published: true
author: Виктория Костюкевич
url: articles/***
type: article
title: «Я ушла веселенькая, потому что зрителям понравилось»
description: Виктория Костюкевич — о создании фестиваля новой драмы во Владивостоке
date: 15 июня 2020
---

\`\`\`js exec
  import Image from "svelte-image";
  import Video from "components/Video.svelte";
  import Note from "components/Note.svelte";
\`\`\`

NANINANI {.lead}

<section>

<Note left>
NOTE NOTE
</Note>

PPPP

<Video id="eiIKqIu-T1g" />

<Image
  src="images/iphuck/333.jpg"
  alt="alt"
/>

# H1

## H2

### H3

</section>
`;

  const dispatch = createEventDispatcher();

  function filterDirectories(i) {
    if (!i) return;

    return i
      .filter(Boolean)
      .filter(a => a.type === "tree")
      .map(a => a.items ? {...a, items: filterDirectories(i.items)} : a);
  }

  $: directories = filterDirectories(items);

  $: fullpath = path + "/" + title.replace(/\..*$/, "") + ".svexy";

  async function create() {
    const result = await update(
      {
        message: `Created ${fullpath}`,
        content,
      },
      fullpath
    );

    if (result.status >= 200 && result.status <= 300) {
      notifier.notify("File was created successfully");
      dispatch("create", { path: fullpath });
    } else {
      notifier.notify(result.error || result.toString());
    }

    value = false;
  }

  function selectItem(i) {
    path = i.detail.path;
  }
</script>

<Dialog
  wrapperClasses="items-center z-50 rounded bg-white elevation-4"
  bind:value>
  <div class="flex bg-black p-4 text-secondary-a100 font-mono" slot="title">
    <small>Create new file</small>
    <Spacer />
    <Icon
      small
      class="cursor-pointer hover:text-white"
      on:click={() => value = false}
    >close</Icon>
  </div>
  <div style="width: 500px" class="relative p-4">
    <label class="text-xs pl-4">Directory</label>
    <Treeview dense items={directories} on:select={selectItem} />
    <div class="my-8">

    <TextField
      outlined
      bind:value={title}
      persistent
      label="Filename"
      hint="File will be created at: {fullpath}"
    />
    </div>
    <Button
      disabled={!title || !path}
      block
      color="primary"
      on:click={create}
    >Create</Button>
  </div>
</Dialog>
