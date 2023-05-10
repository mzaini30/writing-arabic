<script>
  import { acak } from "kumpulan-tools";

  let sumber =
    "https://raw.githubusercontent.com/mzaini30/shopee/master/data.json";

  let terpilih;

  async function dapatkan_gambar() {
    let data = await fetch(sumber);
    data = await data.json();
    terpilih = acak(data)[0];
  }
  dapatkan_gambar();
</script>

{#if terpilih}
  <a href={terpilih.link}>
    <img class="mx-auto block" src={terpilih.gambar} alt="" />
  </a>
{/if}
