<script>
  import Textarea from "../bagian/textarea.svelte";
  import iklan from "../gambar/your-ad-here.jpg";
  import ubah_jadi_arab from "../fungsi/ubah-jadi-arab";

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
    bagian_arab.scrollTop = bagian_arab.scrollHeight;
  } else {
    arab = "";
    localStorage.latin = "";
    localStorage.arab = "";
  }
</script>

<div class="p-2 grid grid-cols-1 gap-2">
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
    placeholder="Tulis huruf latin di sini"
  />
  <a href="https://wa.me/6281545143654"><img src={iklan} alt="" /></a>
</div>
