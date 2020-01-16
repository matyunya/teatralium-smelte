<script>
  import Repl from "../components/Repl/Repl.svelte";
  import {
    Treeview,
    ProgressCircular,
    Button,
    TextField,
    Slider,
    Notifications,
    notifier
  } from "smelte";
  import { onMount } from "svelte";
  import { stores, goto } from "@sapper/app";
  import { update, setKey, setRepo } from "../github";
  import SettingsDialog from "../components/SettingsDialog.svelte";
  import CreateDialog from "../components/CreateDialog.svelte";
  import Dialog from "../components/Dialog.svelte";
  import {
    getImports,
    trim,
    fetchComponentsSource,
    loadComponent,
    getSourceCode,
    getTreeData,
  } from "../util";

	const { page } = stores();
  
  let repl;
  let showInitialDialog = true;
  let showCreateDialog = false;
  let path = "routes/";
  let selectedPath = "";
  let sha = "";
  let source = "";
  let key = $page.query.key || '';
  let repo = $page.query.repo || 'matyunya/teatralium-smelte';
  let loading = key && repo;
  let tree = [];
  let showSettingsDialog = (!tree.length && !loading) || (!key || !repo);
  let zoom = 75;

  $: setKey(key || $page.query.key);
  $: setRepo(repo || $page.query.repo);

  function updateSource({ detail }) {
    source = detail.components.find(c => c.name === "App").source;
  }

  async function loadMainComponent(component, meta) {
    const { data } = await loadComponent(component.path);

    sha = data.repository.object.oid;
    source = data.repository.object.text;

    repl.set({
      components: [
        {
          type: "svexy",
          name: "App",
          source,
        },
        {
          type: "svelte",
          name: "svelte-image",
          source: "<img alt=1 {...$$props}>"
        },
        ...await fetchComponentsSource(source),
      ]
    }); 
  }

  async function selectItem(i) {
    if (i.detail.items) return;

    selectedPath = i.detail.path;

    await loadMainComponent(i.detail);

    showInitialDialog = false;
  }

  async function getInitialTree() {
    tree = await getTreeData(path);

    loading = false;

    return tree;
  }

  async function save() {
    const result = await update(
      {
        message: `Edited ${selectedPath}`,
        sha,
        content: source,
      },
      selectedPath
    );

    if (result.status >= 200 && result.status <= 300) {
      notifier.notify("File was saved successfully");
    } else {
      notifier.notify(result.error || result.toString());
    }
  }
 
</script>

<Dialog title="Select item to edit" persistent={!selectedPath} value={showInitialDialog}>
  {#if key && repo}
    {#await getInitialTree()}
      <ProgressCircular />
    {:then}
      {#if tree.length}
      <div style="height: 500px; min-width: 400px;" class="overflow-scroll">
        <Treeview dense items={tree} on:select={selectItem} />
      </div>
      {/if}
    {/await}
  {/if}
</Dialog>

<CreateDialog
  items={tree}
  bind:value={showCreateDialog}
  on:create={selectItem} />

<SettingsDialog
  {key}
  {repo}
  bind:zoom
  bind:value={showSettingsDialog} />

<div class="fixed ma-5 z-50 right-0">
  <div class="w-32">
    <Button color="gray" dark icon="list" bind:value={showInitialDialog} />
    <Button
      color="gray"
      dark
      icon="save"
      disabled={!selectedPath}
      bind:value={loading}
      on:click={save}
    />
    <Button color="gray" dark icon="settings" bind:value={showSettingsDialog} />
    <Button color="gray" dark icon="add" bind:value={showCreateDialog} />
  </div>
</div>

{#if selectedPath}
  <Repl
    bind:this={repl}
    on:change={updateSource}
    {zoom}
  />
{/if}

<Notifications />