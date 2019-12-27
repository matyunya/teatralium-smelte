import { query, sourceCodeQuery, listQuery } from "./github";

export const getImports = a => (a || "").match(/import(.*)\n/gm) || [];

export const trim = i => i.replace(/("|;|\n)/g, "");

export async function fetchComponentsSource(source) {
  return (
    Promise.all(
      getImports(source)
        .filter(i => !i.includes("svelte-image"))
        .map(async i => ({
          type: trim(i.split(".")[1]),
          name: i.split(" ")[1],
          source: await getSourceCode(trim(i.split(" ")[3]))
        }))
    ) || []
  );
}

export async function loadComponent(name) {
  return query(sourceCodeQuery(name));
}

export async function getSourceCode(name) {
  const { data } = await loadComponent(name);

  return data.repository.object.text;
}

export async function getTreeData(path) {
  const { data } = await query(listQuery(path));

  if (!data || !data.repository) {
    return [];
  }

  return Promise.all(
    data.repository.object.entries.map(async d => ({
      text: d.name,
      path: `${path}${d.name}`,
      items: d.type === "tree" ? await getTreeData(`${path}${d.name}/`) : null
    }))
  );
}
