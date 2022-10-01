<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <button class="icon-btn !outline-none" :title="t('button.toggle_dark')" @click="toggleDark()">
    <div i="carbon-sun dark:carbon-moon" />
  </button>
</template>
