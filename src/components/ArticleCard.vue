<script setup lang="ts">
const router = useRouter()
const { t } = useI18n()
</script>

<template>
  <div card w-full h-60 flex flex-col p-0>
    <img v-if="true" h-30 w-full border-box class="image" src="https://demo.stack.jimmycai.com/p/hello-world/cover_hud7e36f7e20e71be184458283bdae4646_55974_1600x0_resize_q75_box.jpg">
    <div flex-1 p-6>
      <h2 text-2xl font-bold>
        Hello world
      </h2>
      <h3 text="#747474">
        this is description.
      </h3>
    </div>
  </div>
</template>

<style>
  .image{
    border-radius: 16px 16px 0 0;
    object-fit: cover;
    aspect-ratio: auto 800 / 534;
  }
</style>
