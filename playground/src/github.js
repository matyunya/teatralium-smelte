export const API = "https://api.github.com/graphql";

export let key = "";

export function setKey(k) {
  key = k;
}

export let repo = "";

export function setRepo(k) {
  if (!k) return;

  repo = k;
}

const REST_API = () => `https://api.github.com/repos/${repo}/contents/src/`;

const REPO = () =>
  `owner:"${repo.split("/")[0]}", name: "${repo.split("/")[1]}"`;

export const listQuery = i => `
  {
    repository(${REPO()}) {
      object(expression: "master:src/${i}") {
        ...on Tree {
          entries {
            name
            type
          }
        }
      }
    }
  }`;

export const sourceCodeQuery = i => `
  {
  repository(${REPO()}) {
    object(expression: "master:src/${i}") {
      ...on Blob {
        text
        oid
      }
    }
  }
}
`;

export async function query(query) {
  if (!window) return null;

  const data = await window.fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `bearer ${key}`
    },
    body: JSON.stringify({ query })
  });

  return data.json();
}

export async function update(query, path) {
  if (!window) return null;

  return window.fetch(REST_API() + path, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `bearer ${key}`
    },
    body: JSON.stringify(query)
  });
}
