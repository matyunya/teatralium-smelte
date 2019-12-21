<script>
  import Repl from "../components/Repl/Repl.svelte";
  import { Dialog, Treeview, ProgressCircular, Button, Scrim } from "smelte";
  import { onMount } from "svelte";
  import { stores } from '@sapper/app';
  import { query, listQuery, sourceCodeQuery, update } from "../github";

	const { page } = stores();
  let repl;

  let showDialog = false;
  let path = 'routes/articles/';
  let selectedItem = '';
  let sha = '';
  let source = '';

  let saving = false;

  onMount(() => {
    showDialog = true;
  });

  function updateSource({ detail }) {
    source = detail.components.find(c => c.name === 'App').source;
  }

  async function load(name) {
    const { data } = await query(sourceCodeQuery(name), $page.query.key);
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
        {
          type: "svelte",
          name: "Video",
          source: "<video {...$$props} />"
        },
        {
          type: "svelte",
          name: "Note",
          source: "<div><slot /></div>"
        },
        {
          type: "svelte",
          name: "Person",
          source: "<div><slot /></div>"
        },
        {
          type: "svelte",
          name: "Rest",
          source: `<span class="whitespace-no-wrap">{'<…>'}</span>`
        },
      ]
    }); 
  }

  function process({ data }) {
    return data.repository.object.entries
      .filter(a => a.name.includes('svexy'))
      .map(d => ({ text: d.name }));
  }

  async function selectItem(i) {
    selectedItem = i.detail.text;

    await load(`${path}${selectedItem}`);

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
          message: "test",
          sha,
          content: btoa(unescape(encodeURIComponent(source))),
        },
        `${path}${selectedItem}`,
        $page.query.key
      )}
    />
  </div>
</div>
{/if}

<Repl bind:this={repl} on:change={updateSource} />