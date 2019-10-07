<script>
  import { Chip } from "smelte";
  import { fade, fly, slide } from "svelte/transition";
  import { _metadata as ezhenMeta } from "./articles/ezhen.svexy";
  import { _metadata as protokolPovsednevnostMeta } from "./articles/protokol_povsednevnost.svexy";
  import { _metadata as aktyoryTruppyNaOtlyoteMeta } from "./articles/aktyory_truppy_na_otlyote.svexy";
  import { _metadata as estetikaVBytuMeta } from "./articles/estetika_v_bytu.svexy";
  import { _metadata as vsehToshnitMeta } from "./articles/vseh_toshnit.svexy";
  import { _metadata as vMoskveNaprimerAnalogovNetMeta } from "./articles/v_moskve_naprimer_analogov_net.svexy";
  import { _metadata as teatrModyVSovetskoyRossiiMeta } from "./articles/teatr_mody_v_sovetskoy_rossii.svexy";

  import { _metadata as yaPosadilDerevoMeta } from "./music/ya_posadil_derevo.svexy";
  
  let selected = false;

  const articles = [
    ezhenMeta,
    protokolPovsednevnostMeta,
    aktyoryTruppyNaOtlyoteMeta,
    estetikaVBytuMeta,
    vsehToshnitMeta,
    vMoskveNaprimerAnalogovNetMeta,
    teatrModyVSovetskoyRossiiMeta,
    yaPosadilDerevoMeta,
  ];

  $: filtered = selected
     ? articles.filter(a => a.type === selected)
     : articles;

  function toggle(type) {
    return () => selected = selected === type ? false : type
  }
</script>

<section>
  <div
    in:fly={{ delay: 100 }}
    class="flex items-center justify-between font-sans mx-auto"
    style="width: 550px"
  >
    <Chip
      selected={selected === "article"}
      selectable={false}
      icon="local_bar"
      on:click={toggle("article")}
    >Тексты</Chip>
    <Chip
      selected={selected === "mix"}
      selectable={false}
      icon="music_note"
      on:click={toggle("mix")}
    >Миксы</Chip>
    <Chip
      selected={selected === "play"}
      selectable={false}
      icon="fingerprint"
      on:click={toggle("play")}
    >Пьесы</Chip>
    <Chip
      selected={selected === "review"}
      selectable={false}
      icon="format_paint"
      on:click={toggle("review")}
    >Рицензии</Chip>
    <Chip
      selected={selected === "us"}
      selectable={false}
      icon="pets"
      on:click={toggle("us")}
    >Мы</Chip>
  </div>
</section>

<div class="pl-10 text-left flex flex-col mt-32">
  {#each filtered as article}
    <a
      in:fade={{duration: 100}}
      out:slide={{duration: 200}}
      href={article.url}>
      <h3>{article.title}</h3>
    </a>
  {/each}
</div>
