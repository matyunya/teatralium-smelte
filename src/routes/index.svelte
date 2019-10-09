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
  import velikoeRaznoobrazie from "./articles/velikoe_raznoobrazie.json";
  import pomoshZala from "./articles/pomosh_zala.json";
  import lyubimovka from "./articles/lyubimovka.json";
  import lektsii from "./articles/lektsii.json";
  import kritiki from "./articles/kritiki.json";
  import ozhilaKrasnayaStsena from "./articles/ozhila_krasnaya_stsena.json";
  import yaRabotayuVTeatreZaytseva from "./articles/ya_rabotayu_v_teatre_zaytseva.json";

  import vyrypaev from "./interviews/ivan_vyrypaev_protiv_kritikov.json";
  import sheshepop from "./interviews/sheshepop.json";
  import neperevodimiyRusskiyNadryv from "./interviews/neperevodimiy_russkiy_nadryv.json";
  import poobshatsaSGospodinomOblomovym from "./interviews/poobshatsa_s_gospodinom_oblomovym.json";
  import abyuzNelzyaPomilovat from "./interviews/abyuz_nelzya_pomilovat.json";
  import miloserdie from "./interviews/miloserdie.json";

  import yaPosadilDerevo from "./music/ya_posadil_derevo.json";
  import iBratvaZaSlovaOtvechaet from "./music/i_bratva_za_slova_otvechaet.json";

  import iphuck from "./reviews/iphuck.json";
  import yaneboyusskazat from "./reviews/ya_ne_boyus_skazat.json";
  
  import mestnye from "./plays/mestnye.json";

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
    vyrypaev,
    iphuck,
    yaneboyusskazat,
    velikoeRaznoobrazie,
    sheshepop,
    neperevodimiyRusskiyNadryv,
    pomoshZala,
    lyubimovka,
    poobshatsaSGospodinomOblomovym,
    lektsii,
    kritiki,
    abyuzNelzyaPomilovat,
    miloserdie,
    mestnye,
    yaRabotayuVTeatreZaytseva,
    ozhilaKrasnayaStsena,
  ];

  let selected = false;

  $: filtered = selected ? articles.filter(a => a.type === selected) : articles;

  function toggle(type) {
    return () => (selected = selected === type ? false : type);
  }

  const chips = [
    { name: "article", label: "Тексты", icon: "local_bar" },
    { name: "interview", label: "Интервью", icon: "person" },
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
    style="width: 600px">
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
  {#each filtered as post}
    <a
      in:fade={{ duration: 100 }}
      out:slide={{ duration: 200 }}
      href={post.url}
      rel="prefetch">
      <h4 class="pb-1">{post.title}</h4>
    </a>
  {/each}
</div>
