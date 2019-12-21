<script>
  import Repl from "../components/Repl/Repl.svelte";
  import { Dialog, Treeview, ProgressCircular } from "smelte";
  import { onMount } from "svelte";
  import { stores } from '@sapper/app';
  import { query, listQuery, sourceCodeQuery } from "../github";

	const { page } = stores();
  let repl;

  let showDialog = true;

  let components = [];

  async function load(name) {
    const { data } = await query(sourceCodeQuery(name), $page.query.key);

    repl.set({
      components: [
        {
          type: "svexy",
          name: "App",
          source: data.repository.object.text,
        },
        {
          type: "svelte",
          name: "Image",
          source: "<div>test</div>"
        },
        {
          type: "svelte",
          name: "Video",
          source: "<div>test</div>"
        },
        {
          type: "svelte",
          name: "Note",
          source: "<div>test</div>"
        },
        {
          type: "svelte",
          name: "Rest",
          source: "<div>test</div>"
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
    await load(`routes/articles/${i.detail.text}`);

    showDialog = false;
  }
 
</script>

<Dialog value={showDialog}>
  {#await query(listQuery('routes/articles/'), $page.query.key)} <ProgressCircular />
  {:then data}
    <div style="height: 500px" class="overflow-scroll">
      <Treeview items={process(data)} on:select={selectItem} />
    </div>
  {:catch e}
    Error: {e.toString()}
  {/await}
</Dialog>

<Repl bind:this={repl} />
