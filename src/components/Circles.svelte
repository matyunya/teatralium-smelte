<script>
  import { onMount, onDestroy } from "svelte";
  export let offset = 1;

  let n = 0;
  let interval = null;

  const colors = [
    "#ffdeeb",
    "#fcc2d7",
    "#faa2c1",
    "#f783ac",
    "#f06595",
    "#e64980",
    "#d6336c",
    "#c2255c",
    "#a61e4d",
    "#f3d9fa",
    "#eebefa",
    "#e599f7",
    "#da77f2",
    "#cc5de8",
    "#be4bdb",
    "#ae3ec9",
    "#9c36b5",
    "#862e9c",
    "#e5dbff",
    "#d0bfff",
    "#b197fc",
    "#9775fa",
    "#845ef7",
    "#7950f2",
    "#7048e8",
    "#6741d9",
    "#5f3dc4"
  ];

  onMount(
    () =>
      (interval = setInterval(() => {
        n += 1;

        if (n >= 17) {
          n = 0;
        }
      }, 120))
  );

  onDestroy(() => clearInterval(interval));

  /*
 {
    offset === 0
      ? {
          position: "absolute",
          top: `50%`,
          left: `50%`,
          zIndex: "-50"
        }
      : {}
  }
  */
</script>

<svg
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="xMidYMid meet"
  viewBox="0 0 1500 800"
  width={offset === 0 ? 700 : 100}
  height={offset === 0 ? 300 : 100}
  opacity={offset === 0 ? 1 : 0.5}>
  <circle
    cx="600"
    cy="400"
    r="10"
    stroke={colors[n]}
    strokeWidth="1"
    fill="none" />
  <circle
    cx="600"
    cy="400"
    r="40"
    stroke={colors[n + 1]}
    strokeWidth="1"
    fill="none" />
  <circle
    cx="600"
    cy="400"
    r="60"
    stroke={colors[n + 2]}
    strokeWidth="2"
    fill="none" />
  <circle
    cx="600"
    cy="400"
    r="90"
    stroke={colors[n + 3]}
    strokeWidth="3"
    fill="none" />
  <circle
    cx="600"
    cy="400"
    r="120"
    stroke={colors[n + 4]}
    strokeWidth="5"
    fill="none" />
  <circle
    cx="600"
    cy="400"
    r="150"
    stroke={colors[n + 5]}
    strokeWidth="8"
    fill="none" />
  <circle
    cx="600"
    cy="400"
    r="180"
    stroke={colors[n + 6]}
    strokeWidth="13"
    fill="none" />
  <circle
    cx="600"
    cy="400"
    r="210"
    stroke={colors[n + 7]}
    strokeWidth="21"
    fill="none" />
  <circle
    cx="600"
    cy="400"
    r="230"
    stroke={colors[n + 8]}
    strokeWidth="34"
    fill="none" />
  <circle
    cx="600"
    cy="400"
    r="270"
    stroke={colors[n + 9]}
    strokeWidth="55"
    fill="none" />
  <circle
    cx="600"
    cy="400"
    r="320"
    stroke={colors[n + 10]}
    strokeWidth="89"
    fill="none" />
</svg>
>
