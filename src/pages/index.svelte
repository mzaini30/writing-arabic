<script>
  import Textarea from "../bagian/textarea.svelte";
  import iklan from "../gambar/your-ad-here.jpg";
  import ubah_jadi_arab from "../fungsi/ubah-jadi-arab";

  let latin;
  let arab;

  $: if (latin && latin.length > 0) {
    arab = ubah_jadi_arab(latin);
  } else {
    arab = "";
  }
</script>

<div class="p-2 grid grid-cols-1 gap-2">
  <Textarea bind:teks={arab} is_rtl is_readonly placeholder="الحصيل هنا" />
  <Textarea bind:teks={latin} placeholder="Tulis huruf latin di sini" />
  <a href="https://wa.me/6281545143654"><img src={iklan} alt="" /></a>
</div>
