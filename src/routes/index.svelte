<script>
  import { Chip } from "smelte";
  import { fade, fly, slide } from "svelte/transition";

  import ezhen from "./articles/ezhen.json";
  import aktyory_truppy_na_otlyote from "./articles/aktyory_truppy_na_otlyote.json";
  import estetika_v_bytu from "./articles/estetika_v_bytu.json";
  import vseh_toshnit from "./articles/vseh_toshnit.json";
  import v_moskve_naprimer_analogov_net from "./articles/v_moskve_naprimer_analogov_net.json";
  import teatr_mody_v_sovetskoy_rossii from "./articles/teatr_mody_v_sovetskoy_rossii.json";
  import flanagan from "./articles/flanagan.json";
  import gaevskiy from "./articles/gaevskiy.json";
  import velikoe_raznoobrazie from "./articles/velikoe_raznoobrazie.json";
  import pomosh_zala from "./articles/pomosh_zala.json";
  import lyubimovka from "./articles/lyubimovka.json";
  import lektsii from "./articles/lektsii.json";
  import kritiki from "./articles/kritiki.json";
  import ozhila_krasnaya_stsena from "./articles/ozhila_krasnaya_stsena.json";
  import ya_rabotayu_v_teatre_zaytseva from "./articles/ya_rabotayu_v_teatre_zaytseva.json";
  import dokumentalnaya_horeografiya from "./articles/dokumentalnaya_horeografiya.json";
  import iz_vseh_iskusstv from "./articles/iz_vseh_iskusstv.json";
  import kon_ne_valyalsya from "./articles/kon_ne_valyalsya.json";
  import abbreviatura_ramt from "./articles/abbreviatura_ramt.json";
  import morskoy_tsar_belomor from "./articles/morskoy_tsar_belomor.json";
  import revolyutsiya from "./articles/revolyutsiya.json";
  import nogi_zatekayut from "./articles/nogi_zatekayut.json";
  import aktyora_nado_mordoy_v_govno from "./articles/aktyora_nado_mordoy_v_govno.json";
  import nespyashie_v_teatre from "./articles/nespyashie_v_teatre.json";
  import mne_ploho_mne_skuchno from "./articles/mne_ploho_mne_skuchno.json";
  import net_amnezii from "./articles/net_amnezii.json";
  import telegram_kanaly from "./articles/telegram_kanaly.json";

  import ivan_vyrypaev_protiv_kritikov from "./interviews/ivan_vyrypaev_protiv_kritikov.json";
  import sheshepop from "./interviews/sheshepop.json";
  import neperevodimiy_russkiy_nadryv from "./interviews/neperevodimiy_russkiy_nadryv.json";
  import poobshatsa_s_gospodinom_oblomovym from "./interviews/poobshatsa_s_gospodinom_oblomovym.json";
  import abyuz_nelzya_pomilovat from "./interviews/abyuz_nelzya_pomilovat.json";
  import miloserdie from "./interviews/miloserdie.json";
  import contemporary_artists from "./interviews/contemporary_artists.json";
  import zygar from "./interviews/zygar.json";

  import ya_posadil_derevo from "./music/ya_posadil_derevo.json";
  import i_bratva_za_slova_otvechaet from "./music/i_bratva_za_slova_otvechaet.json";
  import playlist_komissara_vsevoloda_lisovskogo from "./music/playlist_komissara_vsevoloda_lisovskogo.json";
  import pahom from "./music/pahom.json";
  import poteryanniy_kray from "./music/poteryanniy_kray.json";
  import vsyo_dvizhetsya from "./music/vsyo_dvizhetsya.json";

  import iphuck from "./reviews/iphuck.json";
  import ya_ne_boyus_skazat from "./reviews/ya_ne_boyus_skazat.json";
  import dney from "./reviews/28dney.json";
  import zloveschaya_dolina from "./reviews/zloveschaya_dolina.json";
  import protokol_povsednevnost from "./reviews/protokol_povsednevnost.json";
  import vsyo_vidno_yasno from "./reviews/vsyo_vidno_yasno.json";

  import mestnye from "./plays/mestnye.json";
  import pomolvka from "./plays/pomolvka.json";
  import fioletoviy_sneg from "./plays/fioletoviy_sneg.json";

  const articles = [
    zygar,
    mestnye,
    estetika_v_bytu,
    miloserdie,
    zloveschaya_dolina,
    dney,
    ya_ne_boyus_skazat,
    pahom,
    gaevskiy,
    iphuck,
    sheshepop,
    vseh_toshnit,
    pomolvka,
    kritiki,
    lektsii,
    revolyutsiya,
    vsyo_dvizhetsya,
    flanagan,
    fioletoviy_sneg,
    contemporary_artists,
    ya_rabotayu_v_teatre_zaytseva,
    kon_ne_valyalsya,
    telegram_kanaly,
    protokol_povsednevnost,
    dokumentalnaya_horeografiya,
    ya_posadil_derevo,
    i_bratva_za_slova_otvechaet,
    playlist_komissara_vsevoloda_lisovskogo,
    poteryanniy_kray,
    nogi_zatekayut,
    vsyo_vidno_yasno,
    aktyory_truppy_na_otlyote,
    nespyashie_v_teatre,
    net_amnezii,
    v_moskve_naprimer_analogov_net,
    poobshatsa_s_gospodinom_oblomovym,
    aktyora_nado_mordoy_v_govno,
    teatr_mody_v_sovetskoy_rossii,
    abyuz_nelzya_pomilovat,
    ivan_vyrypaev_protiv_kritikov,
    pomosh_zala,
    abbreviatura_ramt,
    ezhen,
    ozhila_krasnaya_stsena,
    iz_vseh_iskusstv,
    velikoe_raznoobrazie,
    morskoy_tsar_belomor,
    neperevodimiy_russkiy_nadryv,
    lyubimovka,
    mne_ploho_mne_skuchno
  ];

  let selected = false;

  $: filtered = selected ? articles.filter(a => a.type === selected) : articles;

  function toggle(type) {
    return () => (selected = selected === type ? false : type);
  }

  const chips = [
    { name: "article", label: "Тексты", icon: "directions_run" },
    { name: "interview", label: "Интервью", icon: "call" },
    { name: "mix", label: "Миксы", icon: "play_circle_filled" },
    { name: "play", label: "Пьесы", icon: "local_bar" },
    { name: "review", label: "«Рицензии»", icon: "restaurant_menu" },
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
      class="p-10"
      in:fade={{ duration: 100 }}
      out:slide={{ duration: 200 }}
      href={post.url}
      rel="prefetch">
      <h2 class="my-0 py-0">{post.title}</h2>
      <h5>
        {post.description}
        <i class="text-sm no-underline">{post.date || ''}</i>
      </h5>
    </a>
  {/each}
</div>
