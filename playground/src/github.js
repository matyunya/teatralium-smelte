export const API = "https://api.github.com/graphql";

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
      }
    }
  }
}
`;

export async function query(query, key) {
  const data = await fetch(API, {
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
