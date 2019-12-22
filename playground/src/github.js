export const API = "https://api.github.com/graphql";

const REST_API =
  "https://api.github.com/repos/matyunya/teatralium-smelte/contents/src/";

const REPO = `owner:"matyunya", name: "teatralium-smelte"`;

export const listQuery = i => `
  {
    repository(${REPO}) {
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
  repository(${REPO}) {
    object(expression: "master:src/${i}") {
      ...on Blob {
        text
        oid
      }
    }
  }
}
`;

export async function query(query, key) {
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

export async function update(query, path, key) {
  const data = await window.fetch(REST_API + path, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `bearer ${key}`
    },
    body: JSON.stringify(query)
  });
}
