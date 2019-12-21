<script>
  import Repl from "../components/Repl/Repl.svelte";
  import { Dialog, Treeview, ProgressCircular } from "smelte";
  import { onMount } from "svelte";
  import { stores } from '@sapper/app';

	const { page } = stores();
  let repl;

  let showDialog = true;

  const API = 'https://api.github.com/graphql';

  const listQuery = `
    {
      repository(owner:"matyunya", name: "teatralium-smelte") {
        object(expression: "master:src/routes/articles") {
          ...on Tree {
            entries {
              name
              type
            }
          }
        }
      }
    }`;

  const itemQuery = i => `
    {
    repository(owner:"matyunya", name: "teatralium-smelte") {
      object(expression: "master:src/routes/articles/${i}") {
        ...on Blob {
          text
        }
      }
    }
  }
  `;

  async function load(name) {
    const { data } = await query(itemQuery(name));

    repl.set({
      components: [
        {
          type: "svexy",
          name: "App",
          source: data.repository.object.text,
        },
      ]
    }); 
  }

  async function query(query) {
    const data = await fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `bearer ${$page.query.key}`,
      },
      body: JSON.stringify({ query })
    })

    return data.json();
  }

  function process({ data }) {
    return data.repository.object.entries
      .filter(a => a.name.includes('svexy'))
      .map(d => ({ text: d.name }));
  }

  async function selectItem(i) {
    await load(i.detail.text);

    showDialog = false;
  }
 
</script>

<Dialog value={showDialog}>
  {#await query(listQuery)} <ProgressCircular />
  {:then data}
    <div style="height: 500px" class="overflow-scroll">
      <Treeview items={process(data)} on:select={selectItem} />
    </div>
  {:catch e}
    Error: {e.toString()}
  {/await}
</Dialog>

<Repl bind:this={repl} />
