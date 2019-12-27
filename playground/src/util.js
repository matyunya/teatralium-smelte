import { query, sourceCodeQuery } from "./github";

export const getImports = a => a.match(/import(.*)\n/gm) || [];

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

export async function process(resp) {
  const { data } = await resp;

  if (!data || !data.repository) {
    return [];
  }

  return data.repository.object.entries.map(d => ({
    text: d.name,
    ...d
  }));
}
