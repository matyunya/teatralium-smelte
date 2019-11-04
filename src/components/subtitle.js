export default function subtitle({ title, subtitle, description }) {
  if (title.includes(":")) {
    const tl = title.split(":")[1].trim();
    return `${tl[0].toUpperCase()}${tl.slice(1)}`;
  }

  if (subtitle) {
    return subtitle;
  }

  return description.substr(-1) === "."
    ? description.slice(0, -1)
    : description;
}
