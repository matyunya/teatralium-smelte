<script>
  import Repl from "../components/Repl/Repl.svelte";
  import { Dialog, Treeview, ProgressCircular, Button, TextField, Slider } from "smelte";
  import { onMount } from "svelte";
  import { stores, goto } from "@sapper/app";
  import { update, setKey, setRepo } from "../github";
  import SettingsDialog from "./SettingsDialog.svelte";
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
  let showDialog = true;
  let path = "routes/";
  let selectedItem = "";
  let sha = "";
  let source = "";
  let key = $page.query.key || '';
  let repo = $page.query.repo || 'matyunya/teatralium-smelte';
  let loading = key && repo;
  let tree = {};
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
          source: "<img {...$$props}>"
        },
        ...await fetchComponentsSource(source),
      ]
    }); 
  }

  async function selectItem(i) {
    if (i.detail.items) return;

    selectedItem = i.detail.path;

    await loadMainComponent(i.detail);

    showDialog = false;
  }

  async function getInitialTree() {
    tree = await getTreeData(path);

    loading = false;

    return tree;
  }
 
</script>

<Dialog persistent={!selectedItem} value={showDialog}>
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

<SettingsDialog
  {key}
  {repo}
  bind:zoom
  bind:value={showSettingsDialog} />

<div class="fixed ma-5 z-50 right-0">
  <div class="w-32">
    <Button color="secondary" icon="list" bind:value={showDialog} />  
    <Button color="primary" icon="settings" bind:value={showSettingsDialog} />
    <Button
      color="primary"
      icon="save"
      disabled={!selectedItem}
      bind:value={loading}
      on:click={() => update(
        {
          message: `Edited ${selectedItem}`,
          sha,
          content: window.btoa(
            window.unescape(
              encodeURIComponent(source)
            )
          ),
        },
        `${selectedItem}`
      )}
    />
  </div>
</div>

{#if selectedItem}
  <Repl
    bind:this={repl}
    on:change={updateSource}
    {zoom}
  />
{/if}