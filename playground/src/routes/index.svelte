<script>
  import Repl from "../components/Repl/Repl.svelte";
  import { Dialog, Treeview, ProgressCircular, Button } from "smelte";
  import { onMount } from "svelte";
  import { stores } from "@sapper/app";
  import { query, listQuery, sourceCodeQuery, update } from "../github";

	const { page } = stores();
  let repl;

  let showDialog = true;
  let path = "routes/articles/";
  let selectedItem = "";
  let sha = "";
  let source = "";

  let saving = false;

  const getImports = a => a.match(/import(.*)\n/gm) || [];

  const trim = i => i.replace(/("|;|\n)/g, "");

  async function fetchComponentsSource(source) {
    return Promise.all(
      getImports(source)
        .filter(i => !i.includes("svelte-image"))
        .map(async i => ({
          type: trim(i.split(".")[1]),
          name: i.split(" ")[1],
          source: await getSourceCode(trim(i.split(" ")[3])),
        }))
      ) || [];
  }

  function updateSource({ detail }) {
    source = detail.components.find(c => c.name === "App").source;
  }

  async function loadComponent(name) {
    return query(sourceCodeQuery(name), $page.query.key);
  }

  async function getSourceCode(name) {
    const { data } = await loadComponent(name);

    return data.repository.object.text;
  }

  async function loadMainComponent(name) {
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

  function process({ data }) {
    return data.repository.object.entries
      .filter(a => a.name.includes("svexy"))
      .map(d => ({ text: d.name }));
  }

  async function selectItem(i) {
    selectedItem = i.detail.text;

    await loadMainComponent(`${path}${selectedItem}`);

    showDialog = false;
  }
 
</script>

<Dialog value={showDialog}>
  {#await query(listQuery(path), $page.query.key)}
    <ProgressCircular />
  {:then data}
    <div style="height: 500px" class="overflow-scroll">
      <Treeview items={process(data)} on:select={selectItem} />
    </div>
  {:catch e}
    Error: {e.toString()}
  {/await}
</Dialog>

{#if !showDialog}
<div class="fixed ma-5 z-50 right-0">
  <div class="w-32">
    <Button color="secondary" icon="menu" bind:value={showDialog} />  
    <Button
      color="primary"
      icon="save"
      bind:value={saving}
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
        `${path}${selectedItem}`,
        $page.query.key
      )}
    />
  </div>
</div>
{/if}

<Repl bind:this={repl} on:change={updateSource} />