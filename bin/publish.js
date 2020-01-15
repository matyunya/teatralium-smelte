const fs = require("fs");
const path = require("path");

function getFiles(fromPath) {
  const from = fs.readdirSync(fromPath);

  return from.reduce((acc, file) => {
    if (fs.statSync(fromPath + "/" + file).isDirectory()) {
      return [...acc, ...getFiles(fromPath + "/" + file)];
    }

    if (!file.includes("json")) return acc;

    return [...acc, fromPath + "/" + file];
  }, []);
}

function filterPublished(files) {
  return files.filter(f => {
    let rawdata = fs.readFileSync(f);
    let item = JSON.parse(rawdata);

    return item.published !== true;
  });
}

const metaRoot = path.resolve(__dirname, "../src/meta/");
const files = getFiles(metaRoot);
const unpublished = filterPublished(files);

console.log(unpublished);
