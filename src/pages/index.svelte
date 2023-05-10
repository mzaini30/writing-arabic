<script>
  import Textarea from "../bagian/textarea.svelte";
  import iklan from "../gambar/your-ad-here.jpg";
  import ubah_jadi_arab from "../fungsi/ubah-jadi-arab";
  import AmbilShopeeAffiliate from "../bagian/ambil-shopee-affiliate.svelte";

  let latin;
  let arab;
  let bagian_arab;
  let bagian_latin;

  if (localStorage.latin) {
    latin = localStorage.latin;
  }
  if (localStorage.arab) {
    arab = localStorage.arab;
  }

  $: if (latin && latin.length > 0) {
    arab = ubah_jadi_arab(latin);
    localStorage.latin = latin;
    localStorage.arab = arab;
    if (bagian_arab) {
      bagian_arab.scrollTop = bagian_arab.scrollHeight;
    }
  } else {
    arab = "";
    localStorage.latin = "";
    localStorage.arab = "";
  }
</script>

<div class="p-2 grid grid-cols-1 gap-2">
  <div class="flex gap-2">
    <a
      href="index.html"
      target="_blank"
      class="bg-black px-4 py-3 rounded text-white text-sm inline-block"
      >Open in New Tab</a
    >
    <a
      href="http://www.qamus.org/transliteration.htm"
      target="_blank"
      class="px-4 py-3 rounded border border-black text-sm inline-block"
      >Tutorial</a
    >
  </div>
  <Textarea
    bind:this={bagian_arab}
    bind:teks={arab}
    is_rtl
    bind:ini={bagian_arab}
    is_readonly
    placeholder="الحصيل هنا"
  />
  <Textarea
    bind:teks={latin}
    bind:ini={bagian_latin}
    placeholder="Write alphabet here"
  />
  <AmbilShopeeAffiliate />
  <!-- <a href="https://wa.me/6281545143654"><img src={iklan} alt="" /></a> -->
  <!-- <div class="py-2 mx-auto">
    <a
      href="https://chat.whatsapp.com/GtAE57LiWNOFnTp1Sqd6in"
      target="_blank"
      class="px-4 py-2 rounded border-2 border-black text-sm mx-auto"
      >Join Community</a
    >
  </div> -->
</div>
