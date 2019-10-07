<script>
  import { Chip } from "smelte";
  import { fade, fly, slide } from "svelte/transition";
  import ezhen from "./articles/ezhen.json";
  import protokolPovsednevnost from "./articles/protokol_povsednevnost.json";
  import aktyoryTruppyNaOtlyote from "./articles/aktyory_truppy_na_otlyote.json";
  import estetikaVBytu from "./articles/estetika_v_bytu.json";
  import vsehToshnit from "./articles/vseh_toshnit.json";
  import vMoskveNaprimerAnalogovNet from "./articles/v_moskve_naprimer_analogov_net.json";
  import teatrModyVSovetskoyRossii from "./articles/teatr_mody_v_sovetskoy_rossii.json";
  import flanagan from "./articles/flanagan.json";
  import gaevskiy from "./articles/gaevskiy.json";
  import vyrypaev from "./articles/ivan_vyrypaev_protiv_kritikov.json";

  import yaPosadilDerevo from "./music/ya_posadil_derevo.json";
  import iBratvaZaSlovaOtvechaet from "./music/i_bratva_za_slova_otvechaet.json";

  const articles = [
    ezhen,
    protokolPovsednevnost,
    aktyoryTruppyNaOtlyote,
    estetikaVBytu,
    vsehToshnit,
    vMoskveNaprimerAnalogovNet,
    teatrModyVSovetskoyRossii,
    yaPosadilDerevo,
    iBratvaZaSlovaOtvechaet,
    flanagan,
    gaevskiy,
    vyrypaev
  ];

  let selected = false;

  $: filtered = selected ? articles.filter(a => a.type === selected) : articles;

  function toggle(type) {
    return () => (selected = selected === type ? false : type);
  }

  const chips = [
    { name: "article", label: "Тексты", icon: "local_bar" },
    { name: "mix", label: "Миксы", icon: "music_note" },
    { name: "play", label: "Пьесы", icon: "fingerprint" },
    { name: "review", label: "Рицензии", icon: "format_paint" },
    { name: "us", label: "Мы", icon: "pets" }
  ];
</script>

<section>
  <div
    in:fly={{ delay: 100 }}
    class="flex items-center justify-between font-sans mx-auto"
    style="width: 550px">
    {#each chips as chip}
      <Chip
        selected={selected === chip.name}
        selectable={false}
        icon={chip.icon}
        on:click={toggle(chip.name)}>
        {chip.label}
      </Chip>
    {/each}
  </div>
</section>

<div class="pl-10 text-left flex flex-col mt-32">
  {#each filtered as article}
    <a
      in:fade={{ duration: 100 }}
      out:slide={{ duration: 200 }}
      href={article.url}
      rel="prefetch">
      <h3>{article.title}</h3>
    </a>
  {/each}
</div>
