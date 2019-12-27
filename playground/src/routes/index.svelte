<script>
  import Repl from "../components/Repl/Repl.svelte";
  import { Dialog, Treeview, ProgressCircular, Button, TextField } from "smelte";
  import { onMount } from "svelte";
  import { stores, goto } from "@sapper/app";
  import { query, listQuery, update, setKey, setRepo } from "../github";
  import SettingsDialog from "./SettingsDialog.svelte";
  import {
    getImports,
    trim,
    fetchComponentsSource,
    loadComponent,
    getSourceCode,
    process,
  } from "../util";

	const { page } = stores();
  
  let repl;
  let showDialog = true;
  let path = "routes/";
  let selectedItem = "";
  let sha = "";
  let source = "";
  let showSettingsDialog = false;
  let key = $page.query.key || '';
  let repo = $page.query.repo || 'matyunya/teatralium-smelte';
  let loading = key && repo;
  let tree = {};

  $: setKey($page.query.key);
  $: setRepo($page.query.repo);
  $: showSettingsDialog = !tree.length && !loading;

  function updateSource({ detail }) {
    source = detail.components.find(c => c.name === "App").source;
  }

  async function loadMainComponent(name, meta) {
    const { data } = await loadComponent(name);

    sha = data.repository.object.oid;
    source = data.repository.object.text;

    const components = await fetchComponentsSource(source);

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
        ...components,
      ]
    }); 
  }

  async function selectItem(i) {
    selectedItem = i.detail.text;

    if (i.detail.type === 'tree') {
      const treeData = await getTree(`${path}${selectedItem}`);

      const index = tree.findIndex(a => a === i.detail);
      tree[index].items = treeData;

      path = `${path}${selectedItem}/`;
      return;
    }

    await loadMainComponent(`${path}${selectedItem}`, i.detail);

    showDialog = false;
  }

  async function getTree(p) {
    return process(query(listQuery(p || path)));
  }

  async function getInitialTree() {
    tree = await getTree();

    loading = false;

    return tree;
  }
 
</script>

<Dialog value={showDialog}>
  {#if $page.query.key && $page.query.repo}
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

<SettingsDialog {key} {repo} bind:value={showSettingsDialog} />

{#if !showDialog}
<div class="fixed ma-5 z-50 right-0">
  <div class="w-32">
    <Button color="secondary" icon="list" bind:value={showDialog} />  
    <Button
      color="primary"
      icon="save"
      bind:value={loading}
      on:click={() => update(
        {
          message: `Edited ${path}${selectedItem}`,
          sha,
          content: window.btoa(
            window.unescape(
              encodeURIComponent(source)
            )
          ),
        },
        `${path}${selectedItem}`
      )}
    />
    <Button
      color="primary"
      icon="settings"
      bind:value={showSettingsDialog}
    />
  </div>
</div>
{/if}

<Repl bind:this={repl} on:change={updateSource} />