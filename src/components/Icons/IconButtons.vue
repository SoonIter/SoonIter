<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <nav text-xl mt-6 gap-4 flex justify-center md:justify-start>
    <Home />

    <Dark />

    <Language />

    <About />
    <Github />
  </nav>
</template>
