<script>
  import { Chip } from "smelte";
  import { fade, fly, slide } from "svelte/transition";
  import { _metadata as ezhen } from "./articles/ezhen.svexy";
  import { _metadata as protokolPovsednevnost } from "./articles/protokol_povsednevnost.svexy";
  import { _metadata as aktyoryTruppyNaOtlyote } from "./articles/aktyory_truppy_na_otlyote.svexy";
  import { _metadata as estetikaVBytu } from "./articles/estetika_v_bytu.svexy";
  import { _metadata as vsehToshnit } from "./articles/vseh_toshnit.svexy";
  import { _metadata as vMoskveNaprimerAnalogovNet } from "./articles/v_moskve_naprimer_analogov_net.svexy";
  import { _metadata as teatrModyVSovetskoyRossii } from "./articles/teatr_mody_v_sovetskoy_rossii.svexy";
  import { _metadata as flanagan } from "./articles/flanagan.svexy";
  import { _metadata as gaevskiy } from "./articles/gaevskiy.svexy";

  import { _metadata as yaPosadilDerevo } from "./music/ya_posadil_derevo.svexy";
  import { _metadata as iBratvaZaSlovaOtvechaet } from "./music/i_bratva_za_slova_otvechaet.svexy";

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
    gaevskiy
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
