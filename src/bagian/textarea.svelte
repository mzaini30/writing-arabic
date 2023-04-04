<script>
  export let placeholder;
  export let is_readonly = false;
  export let teks;
  export let is_rtl = false;
  export let ini;
</script>

<textarea
  dir={is_rtl ? "rtl" : "ltr"}
  readonly={is_readonly}
  {placeholder}
  bind:this={ini}
  on:click={is_readonly ? this.select() : null}
  bind:value={teks}
  class="w-full h-40 focus:outline-none p-2 rounded border-2 border-black"
  name=""
  id=""
  cols="30"
  rows="10"
/>
